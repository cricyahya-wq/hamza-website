"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-[20px] shadow-[0_8px_25px_rgba(15,23,42,0.08)] border-b border-neutral-200"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between sm:h-20">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/images/moosepbx-logo.png"
              alt="MoosePBX logo"
              width={140}
              height={140}
              className="h-14 w-auto rounded-lg sm:h-16"
              priority
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary-600",
                  scrolled ? "text-neutral-900" : "text-neutral-600 hover:text-primary-600"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="/contact" variant="cta" size="sm">
              Get a demo
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "flex size-10 items-center justify-center rounded-full transition-colors md:hidden",
              scrolled || mobileOpen ? "text-neutral-900" : "text-neutral-900"
            )}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white overflow-hidden border-t border-neutral-200 md:hidden shadow-[0_8px_25px_rgba(15,23,42,0.08)]"
          >
            <Container className="flex flex-col gap-1 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 hover:text-primary-600"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Button
                  href="/contact"
                  variant="cta"
                  size="md"
                  onClick={() => setMobileOpen(false)}
                  className="w-full"
                >
                  Get a demo
                </Button>
              </div>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
