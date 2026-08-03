import type { Request, Response } from "express";
import {
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
} from "../services/newsletter.service";
import { sendNewsletterConfirmation } from "../services/email.service";
import { verifyUnsubscribeToken } from "../utils/unsubscribeToken";
import { AppError } from "../utils/AppError";
import type { NewsletterInput } from "../validators/newsletter.schema";

export async function subscribe(req: Request, res: Response): Promise<void> {
  const { email } = req.body as NewsletterInput;

  const result = await subscribeToNewsletter(email);

  if (result === "subscribed") {
    try {
      await sendNewsletterConfirmation(email);
    } catch (error) {
      req.log.error({ err: error }, "Newsletter confirmation email failed");
    }
  }

  res.status(201).json({
    message:
      result === "subscribed"
        ? "You're subscribed. Check your inbox for a confirmation email."
        : "You're already subscribed.",
  });
}

function renderUnsubscribePage(message: string): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>MoosePBX Newsletter</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;font-family:system-ui,-apple-system,sans-serif;background:#06141f;color:#fff;display:flex;min-height:100vh;align-items:center;justify-content:center;">
  <div style="max-width:28rem;text-align:center;padding:2rem;">
    <h1 style="font-size:1.5rem;margin-bottom:1rem;">MoosePBX</h1>
    <p style="color:#9fb2be;line-height:1.6;">${message}</p>
  </div>
</body>
</html>`;
}

export async function unsubscribe(req: Request, res: Response): Promise<void> {
  const { email, token } = req.query as unknown as {
    email: string;
    token: string;
  };

  if (!verifyUnsubscribeToken(email, token)) {
    throw new AppError("Invalid or expired unsubscribe link", 400);
  }

  await unsubscribeFromNewsletter(email);

  res
    .status(200)
    .type("html")
    .send(
      renderUnsubscribePage(
        "You've been unsubscribed from MoosePBX updates. You won't receive further newsletter emails.",
      ),
    );
}
