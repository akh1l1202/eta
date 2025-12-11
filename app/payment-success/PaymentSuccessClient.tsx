"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Footer from "@/components/footer";
import { CheckCircle, Home, Heart } from "lucide-react";

export default function PaymentSuccessClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paymentDetails, setPaymentDetails] = useState({
    payment_id: "",
    order_id: "",
    verified: false,
  });

  useEffect(() => {
    const payment_id = searchParams.get("payment_id");
    const order_id = searchParams.get("order_id");

    if (payment_id && order_id) {
      setPaymentDetails({
        payment_id,
        order_id,
        verified: true,
      });
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-white to-blue-50">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center border border-gray-200">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <CheckCircle className="text-green-500" size={80} />
                <Heart
                  className="text-red-500 absolute -top-2 -right-2 animate-pulse"
                  size={32}
                />
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for fueling our mission! 🚀
            </p>

            {/* Payment Details */}
            {paymentDetails.verified && (
              <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Payment Details
                </h2>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Payment ID:</span>
                    <code className="text-sm bg-white px-3 py-1 rounded border border-gray-200 font-mono">
                      {paymentDetails.payment_id}
                    </code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Order ID:</span>
                    <code className="text-sm bg-white px-3 py-1 rounded border border-gray-200 font-mono">
                      {paymentDetails.order_id}
                    </code>
                  </div>
                </div>
              </div>
            )}

            {/* Thank You Message */}
            <div className="bg-linear-to-r from-teal-500 to-blue-500 text-white rounded-lg p-6 mb-8">
              <p className="text-lg">
                Your contribution will help Team Eta build a sustainable future
                at the Shell Eco-Marathon. We&apos;ll keep you updated on our
                progress!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-linear-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Home size={20} />
                Back to Home
              </button>
              <button
                onClick={() => router.push("/fuel-our-mission")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-gray-50 text-teal-600 font-bold rounded-lg transition-all duration-300 border-2 border-teal-500"
              >
                <Heart size={20} />
                Contribute Again
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
