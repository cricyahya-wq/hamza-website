"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Loader2, Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { subscribeNewsletter, ApiError } from "@/lib/api";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
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
    <footer className="bg-[#071923] border-t border-neutral-800">
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
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              {siteConfig.mission}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block text-sm text-white/75 hover:text-accent-400"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Product</p>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Stay in the loop</p>
            <p className="mt-4 text-sm text-white/75">
              Product updates and VoIP insights, straight to your inbox.
            </p>
            {status === "success" ? (
              <p className="text-accent-400 mt-4 text-sm font-medium">
                You&apos;re subscribed. Thanks!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4">
                <div className="flex gap-2">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="bg-card focus:border-accent-400 focus:ring-accent-400/20 w-full min-w-0 rounded-full border border-neutral-700 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:ring-2 focus:outline-none"
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
                    className="bg-primary-600 text-white hover:bg-primary-700 flex size-10 shrink-0 items-center justify-center rounded-full transition-colors disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <ArrowRight className="size-4" />
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p className="mt-2 text-xs text-red-300">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          
          <div className="flex items-center gap-2">
            {siteConfig.links?.facebook && (
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border border-transparent text-white/75 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
            )}
            {siteConfig.links?.linkedin && (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border border-transparent text-white/75 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            )}
            {siteConfig.links?.instagram && (
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border border-transparent text-white/75 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
            )}
            {siteConfig.links?.twitter && (
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border border-transparent text-white/75 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all"
                aria-label="X (Twitter)"
              >
                <Twitter className="size-5" />
              </a>
            )}
            {siteConfig.links?.youtube && (
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border border-transparent text-white/75 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="size-5" />
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
