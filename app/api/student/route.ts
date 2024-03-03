import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await db.student.findMany());
}

export async function POST(req: NextRequest) {
  const { id, name, uid } = await req.json();
  const data = await db.student.findFirst({
    where: { id: { equals: id } },
  });
  if (data != null) {
    return NextResponse.json({ ok: false });
  }
  await db.student.create({
    data: {
      id,
      name,
      uid,
    },
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const data = await db.student.findFirst({
    where: { id: { equals: id } },
  });
  if (data == null) {
    return NextResponse.json({ ok: false });
  }
  await db.student.delete({
    where: {
      id,
    },
  });
  return NextResponse.json({ ok: true });
}

export async function PATCH(req: NextRequest) {
  const { id, newName, newUid } = await req.json();
  const data = await db.student.update({
    where: {
      id: id,
    },
    data: {
      name: newName,
      uid: newUid,
    },
  });
  if (data == null) {
    return NextResponse.json({ ok: false });
  }
  return NextResponse.json({ ok: true });
}
