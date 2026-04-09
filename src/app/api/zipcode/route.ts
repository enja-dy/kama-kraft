import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const zipcode = searchParams.get("zipcode");

  if (!zipcode) {
    return NextResponse.json({ error: "Zipcode is required" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://search.zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch address" }, { status: 500 });
  }
}
