import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const restaurants = await prisma.restaurant.findMany();
  return NextResponse.json(restaurants);
}
