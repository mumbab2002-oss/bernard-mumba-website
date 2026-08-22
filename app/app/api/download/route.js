import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    await resend.emails.send({
      from: "Mumba Consultants <onboarding@resend.dev>",
      to: "mumbab2002@gmail.com",
      subject: "📄 Company Profile Downloaded",
      html: `
        <h2>Company Profile Downloaded</h2>
        <p>Your company profile has been downloaded from the website.</p>
        <p><strong>Mumba Consultants</strong></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
