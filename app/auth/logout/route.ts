import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();

  // Clear the session cookie
  cookieStore.delete("session");

  return NextResponse.json({ success: true });
}

export async function GET() {
  const cookieStore = await cookies();

  // Clear the session cookie
  cookieStore.delete("session");

  return NextResponse.redirect(
    new URL("/", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000")
  );
}
