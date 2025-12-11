import { NextResponse } from "next/server";
import fetch from "node-fetch";
import jwt from "jsonwebtoken";
import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function GET(req: Request) {
  const url = new URL(req.url);
  const origin = `${
    req.headers.get("x-forwarded-proto") || "http"
  }://${req.headers.get("host")}`;

  try {
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const parsedState = state ? JSON.parse(decodeURIComponent(state)) : {};
    const next = parsedState.next || "/";

    if (!code) return NextResponse.redirect(new URL("/auth", origin));

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID || "",
        client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
        redirect_uri:
          process.env.OAUTH_REDIRECT_URL ||
          `${
            req.headers.get("x-forwarded-proto") || "http"
          }://${req.headers.get("host")}/auth/google/callback`,
        grant_type: "authorization_code",
      }),
    });

    const tokenJson: any = await tokenRes.json();
    const access_token = tokenJson.access_token;
    if (!access_token) return NextResponse.redirect(new URL("/auth", origin));

    const profileRes = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
    const profile: any = await profileRes.json();

    // upsert user
    const { name, email } = profile;
    const mobile = "";
    const sql = `INSERT INTO users (name,email,mobile) VALUES ($1,$2,$3) ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name, updated_at = now() RETURNING *`;
    const values = [name || "", email || "", mobile];
    const resDb = await pool.query(sql, values);
    const user = resDb.rows[0];

    // create jwt
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "dev-secret",
      { expiresIn: "7d" }
    );

    const response = NextResponse.redirect(new URL(next, origin));
    response.cookies.set({
      name: "session",
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch (err) {
    console.error("oauth callback error", err);
    return NextResponse.redirect(new URL("/auth", origin));
  }
}
