import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    await db.class.findMany({ orderBy: [{ id: "asc" }] })
  );
}

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  const data = await db.class.findFirst({
    where: { id: { equals: id } },
  });
  if (data != null) {
    return NextResponse.json({ ok: false });
  }
  await db.class.create({
    data: {
      id: id,
    },
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const data = await db.class.findFirst({
    where: { id: { equals: id } },
  });
  if (data != null) {
    await db.class.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ ok: false });
}

export async function PATCH(req: NextRequest) {
  const { id, newId } = await req.json();
  const data = await db.class.update({
    where: { id: id },
    data: { id: newId },
  });
  if (data != null) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ ok: false });
}
