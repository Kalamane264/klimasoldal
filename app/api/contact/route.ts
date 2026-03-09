import { NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_WwmrNHKn_PtPfwWiDZJTZzdTnBe7zx33P");

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, productid } = await req.json();

    // alap validálás
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Hiányzó kötelező mezők" },
        { status: 400 },
      );
    }

    // email küldés
    const { data, error } = await resend.emails.send({
      from: "Kapcsolat <onboarding@resend.dev>", // amíg nincs domain
      to: ["kalmiklima@gmail.com"],
      //replyTo: email,
      replyTo: "no-reply@domain.hu",
      subject: `Új üzenet – ${name}`,
      html: `
        <h2>Új kapcsolatfelvétel</h2>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email vagy telefon:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "-"}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <p><strong>Termék:</strong> ${productid}</p>
      `,
    });

    if (error) {
      console.error("Resend hiba:", error);
      return NextResponse.json(
      { error: "Nem sikerült elküldeni az üzenetet" },
      { status: 500 },
    );
    } else {
      console.log("Az imél elment.");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email küldési hiba:", err);

    return NextResponse.json(
      { error: "Nem sikerült elküldeni az üzenetet" },
      { status: 500 },
    );
  }
}
