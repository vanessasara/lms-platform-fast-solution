"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function EnrollButton({
  courseId,
  isEnrolled: initialIsEnrolled,
}: {
  courseId: string;
  isEnrolled: boolean;
}) {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(initialIsEnrolled);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Create checkout session when dialog opens
  const handleOpenChange = async (open: boolean) => {
    setIsOpen(open);
    setError(null);

    if (open && user?.id && !clientSecret) {
      setIsLoading(true);
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            courseId,
            userId: user.id,
          }),
        });

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        // Handle free course enrollment
        if (data.free) {
          setIsEnrolled(true);
          setIsOpen(false);
          return;
        }

        setClientSecret(data.clientSecret);
      } catch (err) {
        console.error("Error creating checkout session:", err);
        setError("Failed to load checkout. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Reset client secret when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setClientSecret(null);
    }
  }, [isOpen]);

  // Show loading state while user is loading
  if (!isUserLoaded) {
    return (
      <div className="w-full h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
      </div>
    );
  }

  // Show enrolled state
  if (isEnrolled) {
    return (
      <Link
        prefetch={false}
        href={`/dashboard/courses/${courseId}`}
        className="w-full rounded-lg px-6 py-3 font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all duration-300 h-12 flex items-center justify-center gap-2 group"
      >
        <span>Access Course</span>
        <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </Link>
    );
  }

  // Show sign in message if not logged in
  if (!user?.id) {
    return (
      <button
        className="w-full rounded-lg px-6 py-3 font-medium bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed h-12"
        disabled
      >
        Sign in to Enroll
      </button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="w-full rounded-lg px-6 py-3 font-medium bg-white dark:bg-gray-800 text-black dark:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 h-12">
          Enroll Now
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle>Complete Your Enrollment</DialogTitle>
        </DialogHeader>

        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center py-4">{error}</div>
        )}

        {clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EnrollButton;
