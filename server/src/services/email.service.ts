import nodemailer from "nodemailer";
import { env } from "../config/env";
import { logger } from "../utils/logger";
import { escapeHtml } from "../utils/escapeHtml";
import { generateUnsubscribeToken } from "../utils/unsubscribeToken";

export const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_SECURE,
  auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
});

export async function verifyEmailTransport(): Promise<boolean> {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    logger.error({ err: error }, "SMTP transport verification failed");
    return false;
  }
}

interface ContactNotificationInput {
  name: string;
  email: string;
  company?: string;
  message: string;
  ipAddress?: string;
}

export async function sendContactNotification(
  input: ContactNotificationInput,
): Promise<void> {
  const { name, email, company, message, ipAddress } = input;

  await transporter.sendMail({
    from: env.MAIL_FROM,
    to: env.CONTACT_INBOX,
    replyTo: email,
    subject: `New contact form submission from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : undefined,
      ipAddress ? `IP: ${ipAddress}` : undefined,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `,
  });
}

export async function sendContactConfirmation(
  name: string,
  email: string,
): Promise<void> {
  await transporter.sendMail({
    from: env.MAIL_FROM,
    to: email,
    subject: "We received your message — MoosePBX",
    text: `Hi ${name},\n\nThanks for reaching out to MoosePBX. Our team will follow up within one business day.\n\n— The MoosePBX Team`,
    html: `
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thanks for reaching out to MoosePBX. Our team will follow up within one business day.</p>
      <p>— The MoosePBX Team</p>
    `,
  });
}

export async function sendNewsletterConfirmation(email: string): Promise<void> {
  const token = generateUnsubscribeToken(email);
  const unsubscribeUrl = `${env.API_BASE_URL}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}&token=${token}`;

  await transporter.sendMail({
    from: env.MAIL_FROM,
    to: email,
    subject: "You're subscribed to MoosePBX updates",
    text: `Thanks for subscribing to MoosePBX product updates and VoIP insights.\n\nUnsubscribe at any time: ${unsubscribeUrl}`,
    html: `
      <p>Thanks for subscribing to MoosePBX product updates and VoIP insights.</p>
      <p style="color:#7b93a3;font-size:12px;">
        <a href="${unsubscribeUrl}">Unsubscribe</a> at any time.
      </p>
    `,
  });
}
