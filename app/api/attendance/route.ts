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
  const { uid } = await req.json();
  let { slot, date } = timeToSlot();
  console.log(slot, date);
  // date = "2024-02-22T";
  // slot = 3;
  let startDate = date + "00:00:00.000Z";
  let endDate = date + "18:00:00.000Z";
  const data = await db.attendance.findFirst({
    where: {
      student: {
        uid: {
          equals: uid,
        },
      },
      date: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
      classInfo: {
        slotOrder: {
          equals: slot,
        },
      },
    },
    include: {
      classInfo: true,
    },
  });
  if (!data) {
    return await NextResponse.json({ message: "Not found" });
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
  return await NextResponse.json({ data });
}

const timeToSlot: any = () => {
  let slot = 0;
  let currentTime = new Date();
  let totalMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
  console.log(totalMinutes);
  const timeRanges = [
    { startMinutes: 7 * 60, endMinutes: 9 * 60 + 15 },
    { startMinutes: 9 * 60 + 30, endMinutes: 11 * 60 + 45 },
    { startMinutes: 12 * 60 + 30, endMinutes: 14 * 60 + 45 },
    { startMinutes: 15 * 60, endMinutes: 17 * 60 + 15 },
  ];

  for (let i = 0; i < timeRanges.length; i++) {
    const { startMinutes, endMinutes } = timeRanges[i];
    if (totalMinutes >= startMinutes && totalMinutes <= endMinutes) {
      slot = i + 1;
      break;
    }
  }

  return { slot, date: currentTime.toISOString().slice(0, 11) };
};
