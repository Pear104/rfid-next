import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "I'm in user route" });
}
