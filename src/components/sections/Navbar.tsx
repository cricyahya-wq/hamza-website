"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
    <m.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent",
        mobileOpen && "bg-background border-b border-border"
      )}
    >
      <Container>
        <nav className="flex h-[72px] sm:h-[88px] items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/images/moose-icon-clean.png"
              alt="MoosePBX icon"
              width={36}
              height={36}
              className="h-8 w-auto sm:h-9 shrink-0 brightness-0 invert [.light_&]:invert-0 transition-all duration-350"
              priority
            />
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
              MoosePBX
            </span>
          </Link>

          <div className="hidden items-center md:flex lg:gap-10">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-[15px] font-medium transition-colors hover:text-accent-400 py-2",
                    isActive ? "text-accent-400" : "text-neutral-500"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <m.div
                      layoutId="navbar-active-indicator"
                      className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-accent-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <Button href="/contact" variant="primary" size="sm" className="min-h-[44px] transition-transform hover:-translate-y-[1px] hover:shadow-lg duration-200">
              Get a demo
            </Button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-neutral-500/10"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-background overflow-hidden border-t border-border/50 md:hidden"
          >
            <Container className="flex flex-col gap-2 py-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-base font-medium hover:bg-neutral-500/10 hover:text-accent-400 transition-colors",
                      isActive ? "text-accent-400 bg-neutral-500/10" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-border/50">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  onClick={() => setMobileOpen(false)}
                  className="w-full transition-transform hover:-translate-y-[1px] duration-200"
                >
                  Get a demo
                </Button>
              </div>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
