import type { NextRequest } from "next/server";
import crypto from "crypto";

// API Route to verify Razorpay payment signature
// Expects JSON body: { razorpay_order_id, razorpay_payment_id, razorpay_signature }

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return new Response(
        JSON.stringify({ error: "Missing required parameters" }),
        { status: 400 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return new Response(
        JSON.stringify({ error: "Razorpay secret not configured" }),
        { status: 500 }
      );
    }

    // Generate signature using HMAC SHA256
    const generated_signature = crypto
      .createHmac("sha256", keySecret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    // Verify signature
    if (generated_signature === razorpay_signature) {
      // Payment is authentic
      // TODO: Update your database with payment details
      return new Response(
        JSON.stringify({
          success: true,
          message: "Payment verified successfully",
          payment_id: razorpay_payment_id,
          order_id: razorpay_order_id,
        }),
        { status: 200 }
      );
    } else {
      // Signature mismatch - possible fraud
      return new Response(
        JSON.stringify({
          success: false,
          error: "Payment verification failed - signature mismatch",
        }),
        { status: 400 }
      );
    }
  } catch (err: any) {
    console.error("Payment verification error:", err);
    return new Response(
      JSON.stringify({ error: err?.message || String(err) }),
      { status: 500 }
    );
  }
}
