import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = await db.updateRFID.findFirst();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const { uid } = await req.json();
  const check = await db.student.findFirst({
    where: { uid: { equals: uid } },
  });
  if (check == null) {
    const data = await db.updateRFID.update({
      where: {
        id: 1,
      },
      data: {
        uid: uid,
        isUpdated: false,
      },
    });
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ message: "Not found" });
  }
}
