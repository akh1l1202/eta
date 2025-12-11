import type { NextRequest } from "next/server";

// Minimal App Route to create a Razorpay order server-side.
// Expects JSON body: { amount: number, currency?: string, receipt?: string }
// Requires env vars: RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const amount = Number(body?.amount);
    if (!amount || amount <= 0) {
      return new Response(JSON.stringify({ error: "Invalid amount" }), {
        status: 400,
      });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    console.log("Razorpay Key ID:", keyId);
    console.log("Has Key Secret:", keySecret ? "Yes" : "No");

    if (!keyId || !keySecret) {
      return new Response(
        JSON.stringify({ error: "Razorpay keys not configured" }),
        { status: 500 }
      );
    }

    const payload = {
      amount: Math.round(amount * 100), // amount in paise (INR) if currency INR
      currency: body.currency || "INR",
      receipt: body.receipt || `rcpt_${Date.now()}`,
    };

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("🔴 Razorpay API Error:", {
        status: res.status,
        statusText: res.statusText,
        responseData: data,
        sentPayload: payload,
      });
      return new Response(
        JSON.stringify({
          error: "Razorpay order creation failed",
          message: data.error?.description || data.message || "Unknown error",
          razorpayError: data,
        }),
        { status: 502 }
      );
    }

    console.log("Order created successfully:", data.id);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message || String(err) }),
      { status: 500 }
    );
  }
}
