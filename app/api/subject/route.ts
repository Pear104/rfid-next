import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await db.subject.findMany());
}

export async function POST(req: NextRequest) {
  const { id, name } = await req.json();
  const data = await db.subject.findFirst({
    where: { id: { equals: id } },
  });
  if (data != null) {
    return NextResponse.json({ ok: false });
  }
  await db.subject.create({
    data: {
      id: id,
      name: name,
    },
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const data = await db.subject.findFirst({
    where: { id: { equals: id } },
  });
  if (data == null) {
    return NextResponse.json({ ok: false });
  }
  await db.subject.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ ok: true });
}

export async function PATCH(req: NextRequest) {
  const { id, newName } = await req.json();
  const data = await db.subject.update({
    where: {
      id: id,
    },
    data: {
      name: newName,
    },
  });
  if (data == null) {
    return NextResponse.json({ ok: false });
  }
  return NextResponse.json({ ok: true });
}
