import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const ok = await db.admin.findFirst({
    where: { username: { equals: username }, password: { equals: password } },
  });
  return NextResponse.json({ ok: ok ? true : false });
}
