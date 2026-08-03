# MoosePBX Website

Advanced call center solutions designed to cut operational costs, maximize efficiency, and drive business growth.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion + GSAP
- Lenis (smooth scroll)
- Three.js + React Three Fiber

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
- `npm run typecheck` — run the TypeScript compiler with no emit
- `npm run format` / `npm run format:check` — Prettier write/check

## Project Structure

```
src/
  app/            App Router routes, layout, and global styles
  components/
    ui/           Reusable primitives (Button, Container, Section, FadeIn)
    providers/    App-wide providers (smooth scroll, motion)
    three/        React Three Fiber scene primitives
  config/         Site configuration (name, tagline, contact info)
  hooks/          Shared React hooks
  lib/            Utilities (cn, fonts, gsap setup)
  types/          Shared TypeScript types
```

## Environment Variables

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the production domain before deploying (used for SEO metadata). Set `NEXT_PUBLIC_API_URL` to point at the backend API (see below).

## Backend API

The contact form and newsletter signup are served by a separate Node.js/Express/PostgreSQL API in [`server/`](./server) — it's its own package with its own dependencies and `.env`. See [`server/README.md`](./server/README.md) for setup, and run it alongside this app in development:

```bash
cd server
npm install
cp .env.example .env   # fill in DB + SMTP credentials
npm run migrate
npm run dev             # http://localhost:4000
```
