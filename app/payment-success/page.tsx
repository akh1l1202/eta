import { Suspense } from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";

export const dynamic = "force-dynamic"; // optional but good for searchParams-based pages

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center text-gray-600">
            Loading payment result...
          </div>
        </div>
      }
    >
      <PaymentSuccessClient />
    </Suspense>
  );
}
