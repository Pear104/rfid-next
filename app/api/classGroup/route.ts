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
