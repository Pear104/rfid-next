import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  return NextResponse.json(
    await db.attendance.findMany({
      where: {
        classInfoId: {
          equals: Number(id) || 1,
        },
      },
      include: {
        student: true,
        classInfo: true,
      },
      distinct: ["studentId"],
    })
  );
}
