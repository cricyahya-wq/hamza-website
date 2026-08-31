"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.61l.39-4H14V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { subscribeNewsletter, ApiError } from "@/lib/api";

const productLinks = [
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "Features", href: "/features" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Footer() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const renderedAt = useRef(Date.now());

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = new FormData(event.currentTarget);

    try {
      await subscribeNewsletter({
        email: String(form.get("email") ?? ""),
        website: String(form.get("website") ?? ""),
        renderedAt: renderedAt.current,
      });
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError
          ? error.message
          : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/images/moosepbx-logo.png"
                alt="MoosePBX logo"
                width={160}
                height={160}
                className="h-20 w-auto rounded-xl"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              {siteConfig.mission}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block text-sm text-neutral-500 hover:text-accent-400"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Product</p>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Company</p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Stay in the loop</p>
            <p className="mt-4 text-sm text-neutral-500">
              Product updates and VoIP insights, straight to your inbox.
            </p>
            {status === "success" ? (
              <p className="text-accent-400 mt-4 text-sm font-medium">
                You&apos;re subscribed. Thanks!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4">
                <div className="flex flex-col gap-2 xs:flex-row sm:flex-row">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="bg-surface-alt focus:border-accent-400 focus:ring-[#C8A96B]/20 w-full min-w-0 flex-1 rounded-full border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-neutral-400 focus:ring-2 focus:outline-none"
                  />
                  {/* Honeypot field — hidden from real users. */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="footer-website">Website</label>
                    <input
                      id="footer-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    disabled={status === "submitting"}
                    className="bg-[#315FE8] text-white hover:bg-[#2F5BEA] flex h-10 w-full xs:w-10 sm:w-10 shrink-0 items-center justify-center rounded-full transition-colors disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <ArrowRight className="size-4" />
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          
          <p className="text-sm text-neutral-500 text-center sm:text-left">
            {siteConfig.tagline}
          </p>

          <div className="flex items-center gap-2">
            {siteConfig.links?.facebook && (
              <div
                className="p-2 rounded-md border border-transparent text-neutral-400"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </div>
            )}
            {siteConfig.links?.linkedin && (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border border-transparent text-neutral-500 hover:text-foreground hover:bg-foreground/5 hover:border-border transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            )}
            {siteConfig.links?.instagram && (
              <div
                className="p-2 rounded-md border border-transparent text-neutral-400"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </div>
            )}
            {siteConfig.links?.twitter && (
              <div
                className="p-2 rounded-md border border-transparent text-neutral-400"
                aria-label="X (Twitter)"
              >
                <Twitter className="size-5" />
              </div>
            )}
            {siteConfig.links?.youtube && (
              <div
                className="p-2 rounded-md border border-transparent text-neutral-400"
                aria-label="YouTube"
              >
                <Youtube className="size-5" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
