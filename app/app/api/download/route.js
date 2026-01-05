import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 🔴 FORCE NODE RUNTIME (THIS FIXES THE ERROR)
export const runtime = "nodejs";

let downloadCount = 0;

export async function POST() {
  try {
    downloadCount++;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Mumba Consultants" <${process.env.EMAIL_USER}>`,
      to: "mumbab2002@gmail.com",
      subject: "📄 Company Profile Downloaded",
      text: `Your company profile has been downloaded.\nTotal downloads: ${downloadCount}`,
    });

    return NextResponse.json({
      success: true,
      downloadCount,
    });
  } catch (error) {
    console.error("Download API error:", error);

    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
