import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await db.class.findMany());
}
