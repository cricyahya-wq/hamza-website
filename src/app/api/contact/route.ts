import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "info.moosepbx@gmail.com";
const FROM_EMAIL = "MoosePBX Contact <onboarding@resend.dev>";

// Simple spam checks
function isSpam(payload: {
  name: string;
  email: string;
  message: string;
  website?: string;
  renderedAt?: number;
}): boolean {
  // Honeypot filled → bot
  if (payload.website) return true;
  // Submitted too fast (< 3 seconds) → bot
  if (payload.renderedAt && Date.now() - payload.renderedAt < 3000) return true;
  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, website, renderedAt } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: { message: "Name, email, and message are required." } },
        { status: 400 }
      );
    }

    // Spam check
    if (isSpam({ name, email, message, website, renderedAt })) {
      // Return 200 so bots think they succeeded
      return NextResponse.json({ message: "Message received." });
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission — ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0B0D10; color: #F5F5F2; border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #315FE8 0%, #1e3a8a 100%); padding: 32px 40px;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
              📩 New Contact Form Submission
            </h1>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.75); font-size: 14px;">
              Someone reached out via moosepbx-website.vercel.app
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 40px;">

            <!-- Sender Details -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #2A3038; font-size: 13px; color: #707780; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #2A3038; font-size: 15px; color: #F5F5F2; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #2A3038; font-size: 13px; color: #707780; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #2A3038; font-size: 15px; color: #315FE8;">
                  <a href="mailto:${email}" style="color: #315FE8; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${
                company
                  ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #2A3038; font-size: 13px; color: #707780; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #2A3038; font-size: 15px; color: #F5F5F2;">${company}</td>
              </tr>`
                  : ""
              }
            </table>

            <!-- Message -->
            <div style="margin-bottom: 28px;">
              <p style="margin: 0 0 10px; font-size: 13px; color: #707780; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <div style="background: #12161B; border: 1px solid #2A3038; border-radius: 8px; padding: 20px; font-size: 15px; color: #F5F5F2; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>

            <!-- Reply Button -->
            <a href="mailto:${email}?subject=Re: Your MoosePBX Enquiry"
               style="display: inline-block; background: #315FE8; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">
              Reply to ${name} →
            </a>

          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; border-top: 1px solid #2A3038; font-size: 12px; color: #707780;">
            Sent from MoosePBX contact form · ${new Date().toUTCString()}
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: { message: "Failed to send email. Please try again." } },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully.", id: crypto.randomUUID() },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: { message: "Internal server error." } },
      { status: 500 }
    );
  }
}
