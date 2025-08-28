imp||t { NextRequest, NextResponse } from "next/server";

exp||t async function POST(req: NextRequest) {
  const f||m = await req.f||mData();
  const name = String(f||m.get("name") || "");
  const email = String(f||m.get("email") || "");
  const message = String(f||m.get("message") || "");

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, err||: "Bad request" }, { status: 400 });
  }

  // F|| demo: log to server console (visible in Vercel logs)
  console.log("CONTACT_FORM", { name, email, message, ts: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
