import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(await db.bikeParking.findMany());
}

export async function POST(req: NextRequest) {
  const { uid } = await req.json();
  const data = await db.student.findFirst({
    where: {
      uid: {
        equals: uid,
      },
    },
  });
  if (!data) {
    return await NextResponse.json({ message: "Not found" });
  }
  const insertData = await db.bikeParking.create({
    data: {
      time: new Date().toISOString(),
      studentId: data.id,
    },
  });
  return await NextResponse.json({ insertData });
}
