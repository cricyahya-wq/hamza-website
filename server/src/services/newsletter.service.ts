import { pool } from "../db/pool";

export type SubscribeResult = "subscribed" | "already_subscribed";

export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  const result = await pool.query(
    `INSERT INTO newsletter_subscribers (email, status, subscribed_at)
     VALUES ($1, 'subscribed', now())
     ON CONFLICT (email) DO UPDATE
       SET status = 'subscribed', subscribed_at = now(), unsubscribed_at = NULL
       WHERE newsletter_subscribers.status = 'unsubscribed'`,
    [email.toLowerCase().trim()],
  );

  return result.rowCount && result.rowCount > 0 ? "subscribed" : "already_subscribed";
}

export async function unsubscribeFromNewsletter(email: string): Promise<boolean> {
  const result = await pool.query(
    `UPDATE newsletter_subscribers
       SET status = 'unsubscribed', unsubscribed_at = now()
     WHERE email = $1 AND status = 'subscribed'`,
    [email.toLowerCase().trim()],
  );

  return (result.rowCount ?? 0) > 0;
}
