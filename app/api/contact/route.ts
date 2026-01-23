import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // alap validálás
    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: "Hiányzó kötelező mezők" },
        { status: 400 }
      );
    }

    // email küldés
    await resend.emails.send({
      from: "Kapcsolat <onboarding@resend.dev>", // amíg nincs domain
      to: ["kalmiklima@gmail.com"],
      replyTo: email,
      subject: `Új üzenet – ${name}`,
      html: `
        <h2>Új kapcsolatfelvétel</h2>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "-"}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    console.log("Az imél elment.");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email küldési hiba:", err);

    return NextResponse.json(
      { error: "Nem sikerült elküldeni az üzenetet" },
      { status: 500 }
    );
  }
}
