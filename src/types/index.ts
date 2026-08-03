import type { LucideIcon } from "lucide-react";

export interface SiteConfig {
  name: string;
  tagline: string;
  mission: string;
  description: string;
  url: string;
  email: string;
  links: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export interface Product {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface TrustedCompany {
  name: string;
}

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
}

export interface BlogSection {
  heading?: string;
  body: string;
  type?: "paragraph" | "callout" | "quote" | "tip";
  cite?: string; // for quote type
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  metaDescription?: string;
  date: string;
  readTime: string;
  author: string;
  authorRole?: string;
  image: string;
  featured?: boolean;
  tableOfContents?: string[];
  sections: BlogSection[];
  /** kept for backward compat — derived from sections */
  content?: string[];
  relatedSlugs?: string[];
}
