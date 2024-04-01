import { NextResponse } from "next/server";
import { seed, empty } from "@/prisma/seed";

export async function POST() {
  return NextResponse.json(await seed());
}

export async function DELETE() {
  return NextResponse.json(await empty());
}
