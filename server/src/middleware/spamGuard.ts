import type { NextFunction, Request, Response } from "express";
import { env } from "../config/env";

export interface SpamCheckable {
  website?: string;
  renderedAt?: number;
}

/**
 * Silently accepts likely-bot submissions with a generic success response
 * instead of a rejection, so bots get no signal that they were caught and
 * don't adapt — while real work (DB write, email) is skipped entirely.
 */
export function spamGuard(successBody: unknown) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const body = req.body as SpamCheckable;

    if (body.website && body.website.trim().length > 0) {
      req.log?.info({ ip: req.ip }, "Blocked submission: honeypot filled");
      res.status(201).json(successBody);
      return;
    }

    if (typeof body.renderedAt === "number") {
      const elapsedSeconds = (Date.now() - body.renderedAt) / 1000;
      if (elapsedSeconds >= 0 && elapsedSeconds < env.MIN_SUBMIT_SECONDS) {
        req.log?.info(
          { ip: req.ip, elapsedSeconds },
          "Blocked submission: submitted too quickly",
        );
        res.status(201).json(successBody);
        return;
      }
    }

    next();
  };
}
