import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

let downloadCount = 0;

export async function POST() {
  downloadCount++;

  // Email notification
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

  return NextResponse.json({ success: true, downloadCount });
}

