import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await db.lecturer.findMany());
}

export async function POST(req: NextRequest) {
  const { id, name } = await req.json();
  const data = await db.lecturer.findFirst({
    where: { id: { equals: id } },
  });
  if (data != null) {
    return NextResponse.json({ ok: false });
  }
  await db.lecturer.create({
    data: {
      id: id,
      name: name,
    },
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const data = await db.lecturer.findFirst({
    where: { id: { equals: id } },
  });
  if (data == null) {
    return NextResponse.json({ ok: false });
  }
  await db.lecturer.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ ok: true });
}

export async function PATCH(req: NextRequest) {
  const { id, newId, name } = await req.json();
  const data = await db.lecturer.update({
    where: {
      id: id,
    },
    data: {
      id: newId,
      name,
    },
  });
  if (data == null) {
    return NextResponse.json({ ok: false });
  }
  return NextResponse.json({ ok: true });
}
