import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const subject = req.nextUrl.searchParams.get("subject") as string;
  const classes = req.nextUrl.searchParams.get("class") as string;
  const classInfo = await db.classInfo.findFirst({
    where: {
      subjectId: {
        equals: subject,
      },
      classId: {
        equals: classes,
      },
    },
  });
  if (!classInfo) {
    return NextResponse.json(null);
  }
  return NextResponse.json(
    await db.attendance.findMany({
      where: {
        classInfoId: {
          equals: classInfo?.id,
        },
      },
      include: {
        student: true,
      },
    })
  );
}
