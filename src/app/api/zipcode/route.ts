import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const zipcode = searchParams.get("zipcode");

  if (!zipcode) {
    return NextResponse.json({ error: "Zipcode is required" }, { status: 400 });
  }

  try {
    // 安定性の高い別のAPI（zipaddress.net）を使用
    const res = await fetch(`https://api.zipaddress.net/?zipcode=${zipcode}`, {
      headers: {
        "User-Agent": "KamaKraft-Server/1.0"
      }
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Zipcode Proxy Error:", error.message);
    return NextResponse.json({ error: "Failed to fetch address", details: error.message }, { status: 500 });
  }
}
