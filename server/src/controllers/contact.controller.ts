import type { Request, Response } from "express";
import { createContactSubmission } from "../services/contact.service";
import {
  sendContactNotification,
  sendContactConfirmation,
} from "../services/email.service";
import type { ContactInput } from "../validators/contact.schema";

export async function submitContact(req: Request, res: Response): Promise<void> {
  const { name, email, company, message } = req.body as ContactInput;

  const submission = await createContactSubmission({
    name,
    email,
    company: company || undefined,
    message,
    ipAddress: req.ip,
    userAgent: req.get("user-agent") ?? undefined,
  });

  try {
    await sendContactNotification({
      name,
      email,
      company: company || undefined,
      message,
      ipAddress: req.ip,
    });
    await sendContactConfirmation(name, email);
  } catch (error) {
    // The submission is safely stored — a delivery hiccup on the notification
    // or confirmation email shouldn't fail the request.
    req.log.error({ err: error }, "Contact email delivery failed");
  }

  res.status(201).json({
    message: "Thanks for reaching out — we'll be in touch shortly.",
    id: submission.id,
  });
}
