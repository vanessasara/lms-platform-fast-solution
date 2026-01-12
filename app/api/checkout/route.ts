import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import baseUrl from "@/lib/baseUrl";
import { urlFor } from "@/sanity/lib/image";
import getCourseById from "@/sanity/lib/courses/getCourseById";
import { createStudentIfNotExists } from "@/sanity/lib/student/createStudentIfNotExists";
import { createEnrollment } from "@/sanity/lib/student/createEnrollment";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    const { courseId, userId } = await request.json();

    if (!courseId || !userId) {
      return NextResponse.json(
        { error: "Missing courseId or userId" },
        { status: 400 }
      );
    }

    // Get course from Sanity
    const course = await getCourseById(courseId);

    if (!course) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    // Get user from Clerk
    const clerk = await clerkClient();
    const clerkUser = await clerk.users.getUser(userId);
    const { emailAddresses, firstName, lastName, imageUrl } = clerkUser;
    const email = emailAddresses[0]?.emailAddress;

    if (!email) {
      return NextResponse.json(
        { error: "User email not found" },
        { status: 400 }
      );
    }

    // Create student in Sanity if not exists
    const student = await createStudentIfNotExists({
      clerkId: userId,
      email,
      firstName: firstName || email,
      lastName: lastName || "",
      imageUrl: imageUrl || "",
    });

    if (!student) {
      return NextResponse.json(
        { error: "Failed to create student" },
        { status: 500 }
      );
    }

    // Handle free course
    const priceInCents = Math.round((course.price || 0) * 100);

    if (priceInCents === 0) {
      await createEnrollment({
        studentId: student._id,
        courseId: course._id,
        paymentId: "free",
        amount: 0,
      });

      return NextResponse.json({ free: true });
    }

    // Validate course data
    const { title, description, image, slug } = course;

    if (!title || !description || !image || !slug) {
      return NextResponse.json(
        { error: "Course data is incomplete" },
        { status: 400 }
      );
    }

    // Create Stripe Embedded Checkout session
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "pkr",
            unit_amount: priceInCents,
            product_data: {
              name: title,
              description: description,
              images: [urlFor(image).url() || ""],
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        courseId: course._id,
        userId: userId,
        studentId: student._id,
      },
      return_url: `${baseUrl}/api/checkout/complete?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({
      id: session.id,
      clientSecret: session.client_secret,
    });
  } catch (error) {
    console.error("Checkout session error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
