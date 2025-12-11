import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;
    if (!token) return NextResponse.json({ user: null });
    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET || "dev-secret"
    );
    const resDb = await pool.query(
      "SELECT id,name,email,mobile FROM users WHERE id = $1",
      [decoded.userId]
    );
    return NextResponse.json({ user: resDb.rows[0] || null });
  } catch (err) {
    return NextResponse.json({ user: null });
  }
}
