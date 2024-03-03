import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  return Number(id)
    ? NextResponse.json(
        await db.classInfo.findMany({
          where: {
            id: {
              equals: Number(id),
            },
          },
          include: {
            lecturer: true,
          },
        })
      )
    : NextResponse.json(
        await db.classInfo.findMany({
          include: {
            lecturer: true,
          },
        })
      );
}

export async function POST(req: NextRequest) {
  const { classId, subjectId, lecturerId, slotOrder } = await req.json();
  const data = await db.classInfo.findFirst({
    where: {
      classId: { equals: classId },
      subjectId: { equals: subjectId },
      lecturerId: { equals: lecturerId },
    },
  });
  if (data != null) {
    return NextResponse.json({ ok: false });
  }
  await db.classInfo.create({
    data: {
      classId,
      subjectId,
      lecturerId,
      slotOrder: +slotOrder,
    },
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const data = await db.classInfo.findFirst({
    where: { id: { equals: +id } },
  });
  if (data == null) {
    return NextResponse.json({ ok: false });
  }
  await db.classInfo.delete({
    where: {
      id: +id,
    },
  });
  return NextResponse.json({ ok: true });
}

export async function PATCH(req: NextRequest) {
  const { id, classId, subjectId, lecturerId, slotOrder } = await req.json();

  const data = await db.classInfo.update({
    where: {
      id: +id,
    },
    data: {
      classId,
      subjectId,
      lecturerId,
      slotOrder,
    },
  });
  if (data == null) {
    return NextResponse.json({ ok: false });
  }
  return NextResponse.json({ ok: true });
}
