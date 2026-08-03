# MoosePBX API

Backend service for the MoosePBX website: contact form handling, newsletter
subscriptions, and transactional email. Node.js + Express 5 + PostgreSQL,
written in TypeScript.

## Features

- `POST /api/contact` — validates and stores contact form submissions, emails
  a notification to the MoosePBX inbox, and sends the sender a confirmation.
- `POST /api/newsletter/subscribe` — validates and upserts a subscriber, sends
  a welcome email with a working unsubscribe link.
- `GET /api/newsletter/unsubscribe` — signed-token unsubscribe link used in
  outbound emails; returns a small HTML confirmation page.
- `GET /api/health` — reports server and database status; returns `503` if
  the database is unreachable.
- Zod validation on every input, with per-field error messages.
- Spam protection: a honeypot field plus a minimum-time-to-submit check, both
  applied before any database write or email send. Detected bots get a fake
  success response rather than an error, so they get no signal they were
  caught. Per-route rate limiting (`express-rate-limit`) backs this up.
- Structured JSON logging via `pino`/`pino-http` (pretty-printed in dev),
  with request IDs and automatic redaction of sensitive headers.
- `helmet`, `cors` (origin allowlist), `compression`, and a centralized error
  handler that hides internal error detail in production.
- Environment variables are validated with `zod` at startup — the process
  exits immediately with a clear message if configuration is invalid or
  incomplete, rather than failing unpredictably later.
- Graceful shutdown on `SIGTERM`/`SIGINT`: stops accepting new connections,
  finishes in-flight requests, then closes the database pool.

## Getting started

```bash
cd server
npm install
cp .env.example .env
```

Fill in `.env` — see the comments in `.env.example` for what each variable
does. At minimum you need a PostgreSQL connection string and SMTP
credentials for outbound email.

### Local PostgreSQL

If you don't already have Postgres running locally, the included
`docker-compose.yml` starts one matching the default `.env.example`
connection string:

```bash
docker compose up -d
```

Then run migrations:

```bash
npm run migrate
```

This applies the SQL files in `src/db/migrations/` in order and tracks what's
already been applied in a `schema_migrations` table, so it's safe to re-run.

### Development

```bash
npm run dev
```

Starts the API on `http://localhost:4000` (or your configured `PORT`) with
hot reload via `tsx watch`.

### Production build

```bash
npm run build
npm start
```

`npm run build` compiles TypeScript to `dist/` and copies the SQL migration
files alongside it (`tsc` only emits `.ts` files, so this copy step is
required — don't skip it in a custom deploy script).

## Email (SMTP)

All outbound email goes through a single SMTP transport configured via
`SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` / `SMTP_USER` / `SMTP_PASS`. This
works with:

- **Gmail** — use an [App Password](https://myaccount.google.com/apppasswords)
  for `SMTP_USER`/`SMTP_PASS`, not the account's normal password. Gmail SMTP
  has daily sending limits; fine for low volume, but consider a transactional
  provider (Postmark, SES, Resend, SendGrid) if volume grows.
- Any other SMTP provider — just point the host/port/credentials at it.

## Spam protection notes

The honeypot field is named `website` and the timing field is `renderedAt`
(client-sent epoch ms of when the form was rendered) — see
`src/validators/contact.schema.ts` and `src/middleware/spamGuard.ts`. The
Next.js frontend's `ContactForm` and newsletter form already send both.

This is self-contained (no third-party account needed) and reasonably
effective against unsophisticated bots, but it is **not** a CAPTCHA. If spam
becomes a real problem, the cleanest next step is adding an hCaptcha/
Turnstile/reCAPTCHA token check inside `spamGuard` (or as its own middleware
before it) — the validation schemas can accept a `captchaToken` field and the
guard can verify it server-side before falling through to the honeypot/timing
checks.

## Database schema

Two tables, created by `src/db/migrations/001_init.sql`:

- `contact_submissions` — one row per contact form submission, with a
  `status` (`new` / `reviewed` / `spam`) you can update manually or from an
  internal admin tool later.
- `newsletter_subscribers` — one row per email, with `status`
  (`subscribed` / `unsubscribed`) and timestamps. Re-subscribing an
  unsubscribed address is idempotent.

## Environment variables

See `.env.example` for the full list with inline documentation. Notable ones:

| Variable              | Purpose                                                        |
| --------------------- | ---------------------------------------------------------------- |
| `CORS_ORIGIN`         | Comma-separated list of frontend origins allowed to call this API |
| `API_BASE_URL`        | This API's own public URL, used to build unsubscribe links        |
| `UNSUBSCRIBE_SECRET`  | Random secret signing unsubscribe tokens — generate a real one before deploying |
| `RATE_LIMIT_WINDOW_MS` / `RATE_LIMIT_MAX` | Per-IP rate limit applied independently to contact and newsletter endpoints |
| `MIN_SUBMIT_SECONDS`  | Submissions faster than this after form render are treated as bots |

## Connecting the frontend

Set `NEXT_PUBLIC_API_URL` in the Next.js app's `.env.local` to this API's
base URL (defaults to `http://localhost:4000` if unset). The `ContactForm`
and footer newsletter form already call it via `src/lib/api.ts`.
