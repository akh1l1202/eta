import type { NextRequest } from "next/server";
import crypto from "crypto";

// Webhook handler for Razorpay payment events
// Configure this URL in Razorpay Dashboard: https://dashboard.razorpay.com/app/webhooks
// Supported events: payment.captured, payment.failed, order.paid, etc.

export async function POST(req: NextRequest) {
  try {
    const body = await req.text(); // Raw body needed for signature verification
    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      return new Response(
        JSON.stringify({ error: "Missing webhook signature" }),
        { status: 400 }
      );
    }

    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error("RAZORPAY_WEBHOOK_SECRET not configured");
      return new Response(
        JSON.stringify({ error: "Webhook secret not configured" }),
        { status: 500 }
      );
    }

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("Webhook signature verification failed");
      return new Response(JSON.stringify({ error: "Invalid signature" }), {
        status: 401,
      });
    }

    // Parse the webhook payload
    const payload = JSON.parse(body);
    const event = payload.event;
    const paymentEntity = payload.payload?.payment?.entity;
    const orderEntity = payload.payload?.order?.entity;

    console.log("Webhook received:", event);

    // Handle different webhook events
    switch (event) {
      case "payment.captured":
        // Payment was successfully captured
        await handlePaymentCaptured(paymentEntity);
        break;

      case "payment.failed":
        // Payment failed
        await handlePaymentFailed(paymentEntity);
        break;

      case "order.paid":
        // Order was paid
        await handleOrderPaid(orderEntity);
        break;

      case "payment.authorized":
        // Payment authorized but not captured yet
        console.log("Payment authorized:", paymentEntity?.id);
        break;

      default:
        console.log("Unhandled webhook event:", event);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error("Webhook processing error:", err);
    return new Response(
      JSON.stringify({ error: err?.message || String(err) }),
      { status: 500 }
    );
  }
}

// Handler for successful payment capture
async function handlePaymentCaptured(payment: any) {
  console.log("Payment captured successfully:", {
    payment_id: payment?.id,
    order_id: payment?.order_id,
    amount: payment?.amount / 100, // Convert paise to rupees
    email: payment?.email,
    contact: payment?.contact,
  });

  // TODO: Update your database
  // Example:
  // await db.transactions.create({
  //   payment_id: payment.id,
  //   order_id: payment.order_id,
  //   amount: payment.amount / 100,
  //   status: 'captured',
  //   customer_email: payment.email,
  //   customer_phone: payment.contact,
  //   captured_at: new Date(),
  // });

  // TODO: Send confirmation email to customer
  // await sendPaymentConfirmationEmail(payment.email, payment);

  // TODO: Send notification to admin
  // await notifyAdmin(payment);
}

// Handler for failed payments
async function handlePaymentFailed(payment: any) {
  console.log("Payment failed:", {
    payment_id: payment?.id,
    order_id: payment?.order_id,
    error_code: payment?.error_code,
    error_description: payment?.error_description,
  });

  // TODO: Update database with failure status
  // TODO: Send retry email to customer (optional)
}

// Handler for order paid event
async function handleOrderPaid(order: any) {
  console.log("Order paid:", {
    order_id: order?.id,
    amount: order?.amount / 100,
    status: order?.status,
  });

  // TODO: Mark order as paid in database
}
