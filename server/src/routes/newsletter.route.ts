import { Router } from "express";
import { newsletterRateLimiter } from "../middleware/rateLimiter";
import { validateBody, validateQuery } from "../middleware/validate";
import { spamGuard } from "../middleware/spamGuard";
import {
  newsletterSchema,
  unsubscribeQuerySchema,
} from "../validators/newsletter.schema";
import { subscribe, unsubscribe } from "../controllers/newsletter.controller";

export const newsletterRouter = Router();

newsletterRouter.post(
  "/subscribe",
  newsletterRateLimiter,
  validateBody(newsletterSchema),
  spamGuard({ message: "You're subscribed. Check your inbox for a confirmation email." }),
  subscribe,
);

newsletterRouter.get("/unsubscribe", validateQuery(unsubscribeQuerySchema), unsubscribe);
