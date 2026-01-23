import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, message } = body;

  // itt jöhet validálás
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Hiányzó mezők" },
      { status: 400 }
    );
  }

  // pl. adatbázis, email küldés, stb.
  console.log(body);

  return NextResponse.json({ success: true });
}
