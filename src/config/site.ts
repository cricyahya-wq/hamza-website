import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "MoosePBX",
  tagline:
    "All-In-One Call Center Solutions & Modern Telephony",
  mission: "Provide enterprise-grade call center solutions and VoIP infrastructure.",
  description:
    "MoosePBX is an advanced call center solution company providing intelligent predictive dialers, cloud PBX, omnichannel routing, and AI voice agents for high-performance teams.",
  // Set NEXT_PUBLIC_SITE_URL in your production environment before deploying.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "info@moosepbx.com",
  links: {
    linkedin: "https://www.linkedin.com/company/moosepbx/posts/?feedView=all",
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
};
