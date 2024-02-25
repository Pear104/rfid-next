import { NextResponse } from "next/server";
import seed from "@/prisma/seed";

export async function POST() {
  return NextResponse.json(await seed());
}
