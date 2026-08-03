import rateLimit, { type Options } from "express-rate-limit";
import { env } from "../config/env";

const baseOptions: Partial<Options> = {
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  limit: env.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  // Skip OPTIONS (CORS preflight) and bypass entirely in development to prevent
  // local test submissions from exhausting the in-memory rate limit bucket.
  skip: (req) =>
    req.method === "OPTIONS" || env.NODE_ENV === "development",
  // Do not count validation errors or bad/malformed request submissions against the rate limit
  skipFailedRequests: true,
  message: {
    error: {
      message: "Too many requests. Please try again later.",
    },
  },
};

export const contactRateLimiter = rateLimit(baseOptions);
export const newsletterRateLimiter = rateLimit(baseOptions);
