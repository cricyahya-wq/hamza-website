import { createHmac, timingSafeEqual } from "node:crypto";
import { env } from "../config/env";

export function generateUnsubscribeToken(email: string): string {
  return createHmac("sha256", env.UNSUBSCRIBE_SECRET)
    .update(email.toLowerCase().trim())
    .digest("hex");
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  if (!token || typeof token !== "string" || !/^[0-9a-f]{64}$/i.test(token)) {
    return false;
  }

  const expected = generateUnsubscribeToken(email);

  const expectedBuffer = Buffer.from(expected, "hex");
  const providedBuffer = Buffer.from(token, "hex");

  if (expectedBuffer.length !== providedBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, providedBuffer);
}

