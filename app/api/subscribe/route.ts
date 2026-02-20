import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const apiKey = process.env.FLODESK_API_KEY;
  const segmentId = process.env.FLODESK_SEGMENT_ID;

  if (!apiKey) {
    console.error("FLODESK_API_KEY not set");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const encoded = Buffer.from(`${apiKey}:`).toString("base64");
  const headers = {
    Authorization: `Basic ${encoded}`,
    "Content-Type": "application/json",
    "User-Agent": "StevenMellor (yourdomain.com)",
  };

  // Upsert subscriber
  const upsertRes = await fetch("https://api.flodesk.com/v1/subscribers", {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      ...(segmentId ? { segment_ids: [segmentId] } : {}),
    }),
  });

  if (!upsertRes.ok) {
    const err = await upsertRes.json().catch(() => ({}));
    console.error("Flodesk error:", err);
    return NextResponse.json(
      { error: "Could not subscribe. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
