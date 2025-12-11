import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const next = searchParams.get("next") || "/";

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri =
    process.env.OAUTH_REDIRECT_URL ||
    `${req.headers.get("x-forwarded-proto") || "http"}://${req.headers.get(
      "host"
    )}/auth/google/callback`;
  const scope = encodeURIComponent("openid profile email");
  const state = encodeURIComponent(JSON.stringify({ next }));

  if (!clientId) {
    return NextResponse.json(
      { error: "GOOGLE_CLIENT_ID not configured" },
      { status: 500 }
    );
  }

  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&response_type=code&scope=${scope}&state=${state}&access_type=online&prompt=select_account`;
  return NextResponse.redirect(url);
}
