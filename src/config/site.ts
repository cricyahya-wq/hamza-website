import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "MoosePBX",
  tagline:
    "Advanced call center solutions designed to cut operational costs, maximize efficiency, and drive business growth.",
  mission: "Provide the best VoIP solutions.",
  description:
    "MoosePBX delivers advanced call center and VoIP solutions that cut operational costs, maximize efficiency, and drive business growth.",
  // Set NEXT_PUBLIC_SITE_URL in your production environment before deploying.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "info.moosepbx@gmail.com",
  links: {},
};
