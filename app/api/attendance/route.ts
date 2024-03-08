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

export async function POST(req: NextRequest) {
  const { uid, section, subjectId } = await req.json();
  const data = await db.attendance.findFirst({
    where: {
      student: {
        uid: {
          equals: uid,
        },
      },
      classInfo: {
        subjectId: {
          equals: subjectId,
        },
      },
      section: {
        equals: +section,
      },
    },
  });
  if (!data) {
    return await NextResponse.json({ ok: false });
  }
  await db.attendance.update({
    where: {
      classInfoId_studentId_section: {
        classInfoId: data.classInfoId,
        studentId: data.studentId,
        section: data.section,
      },
    },
    data: {
      attendance: "PRESENT",
    },
  });
  return await NextResponse.json({ ok: true });
}
