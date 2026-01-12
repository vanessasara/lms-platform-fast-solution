import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import baseUrl from "@/lib/baseUrl";
import { createEnrollment } from "@/sanity/lib/student/createEnrollment";
import getCourseById from "@/sanity/lib/courses/getCourseById";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.redirect(`${baseUrl}?error=missing_session`);
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Check if payment was successful
    if (session.payment_status !== "paid") {
      return NextResponse.redirect(`${baseUrl}?error=payment_failed`);
    }

    const { courseId, userId, studentId } = session.metadata || {};

    if (!courseId || !userId || !studentId) {
      console.error("Missing metadata in session:", sessionId);
      return NextResponse.redirect(`${baseUrl}?error=missing_metadata`);
    }

    // Get course to redirect to correct page
    const course = await getCourseById(courseId);

    if (!course) {
      return NextResponse.redirect(`${baseUrl}?error=course_not_found`);
    }

    // Create enrollment in Sanity
    try {
      await createEnrollment({
        studentId: studentId,
        courseId: courseId,
        paymentId: session.id,
        amount: session.amount_total ? session.amount_total / 100 : 0,
      });

      console.log("✅ Enrollment created for:", userId, "in course:", courseId);
    } catch (enrollError) {
      // Check if enrollment already exists (avoid duplicates)
      console.error("Enrollment error (may already exist):", enrollError);
    }

    // Redirect to course page with success message
    return NextResponse.redirect(
      `${baseUrl}/my-courses`
    );
  } catch (error) {
    console.error("Checkout complete error:", error);
    return NextResponse.redirect(`${baseUrl}?error=checkout_failed`);
  }
}
