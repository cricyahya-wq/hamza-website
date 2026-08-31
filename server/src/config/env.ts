import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().int().positive().default(4000),
  HOST: z.string().default("0.0.0.0"),
  API_BASE_URL: z.string().url().default("http://localhost:4000"),
  TRUST_PROXY: z
    .string()
    .default(process.env.NODE_ENV === "production" ? "true" : "false")
    .transform((value) => value === "true"),

  CORS_ORIGIN: z
    .string()
    .default("http://localhost:3000")
    .transform((value) => value.split(",").map((origin) => origin.trim())),

  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"])
    .default("info"),

  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  DATABASE_SSL: z
    .string()
    .default("false")
    .transform((value) => value === "true"),

  SMTP_HOST: z.string().min(1, "SMTP_HOST is required"),
  SMTP_PORT: z.coerce.number().int().positive().default(587),
  SMTP_SECURE: z
    .string()
    .default("false")
    .transform((value) => value === "true"),
  SMTP_USER: z.string().min(1, "SMTP_USER is required"),
  SMTP_PASS: z.string().min(1, "SMTP_PASS is required"),

  MAIL_FROM: z.string().min(1, "MAIL_FROM is required"),
  CONTACT_INBOX: z.string().email().default("info@moosepbx.com"),

  UNSUBSCRIBE_SECRET: z
    .string()
    .min(16, "UNSUBSCRIBE_SECRET must be at least 16 characters"),

  RATE_LIMIT_WINDOW_MS: z.coerce
    .number()
    .int()
    .positive()
    .default(15 * 60 * 1000),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(5),

  MIN_SUBMIT_SECONDS: z.coerce.number().nonnegative().default(2),
});

function loadEnv() {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error("Invalid environment configuration:");
    for (const issue of parsed.error.issues) {
      console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
    }
    process.exit(1);
  }

  return parsed.data;
}

export const env = loadEnv();
export type Env = typeof env;
