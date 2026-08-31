"use client";

import { useEffect, useState, useCallback } from "react";
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
import { smoothScrollTo } from "@/hooks/useLenis";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState<string>(pathname);

  // Determine the active navigation link based on scroll position (on home) or pathname (on sub-pages)
  const updateActiveSection = useCallback(() => {
    setScrolled(window.scrollY > 10);

    if (pathname !== "/") {
      if (pathname.startsWith("/features")) {
        setActiveHref("/#features");
      } else if (pathname.startsWith("/solutions")) {
        setActiveHref("/#solutions");
      } else if (pathname.startsWith("/pricing")) {
        setActiveHref("/#pricing");
      } else if (pathname.startsWith("/industries")) {
        setActiveHref("/#industries");
      } else if (pathname.startsWith("/blog")) {
        setActiveHref("/#blog");
      } else if (pathname.startsWith("/services")) {
        setActiveHref("/#services");
      } else {
        setActiveHref(pathname);
      }
      return;
    }

    // When on homepage ("/")
    if (window.scrollY < 200) {
      setActiveHref("/");
      return;
    }

    // Sections on the homepage in exact top-to-bottom order: Home, Services, Features, Solutions, Pricing, Industries, Blog
    const sections = [
      { id: "hero", href: "/" },
      { id: "services", href: "/#services" },
      { id: "features", href: "/#features" },
      { id: "solutions", href: "/#solutions" },
      { id: "pricing", href: "/#pricing" },
      { id: "industries", href: "/#industries" },
      { id: "blog", href: "/#blog" },
    ];

    let current = "/";
    for (const sec of sections) {
      const el = document.getElementById(sec.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // If the top of the section has reached the upper area of the viewport
        if (rect.top <= 260) {
          current = sec.href;
        }
      }
    }

    setActiveHref(current);
  }, [pathname]);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [updateActiveSection]);

  // Handle hash on initial mount or page navigation
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const timer = setTimeout(() => {
          smoothScrollTo(el, -80);
        }, 180);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [mobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileOpen(false);

    if (pathname === "/") {
      if (href === "/") {
        e.preventDefault();
        smoothScrollTo(0);
        setActiveHref("/");
        window.history.pushState(null, "", "/");
      } else if (href.startsWith("/#") || href.startsWith("#")) {
        const targetId = href.replace("/#", "").replace("#", "");
        const el = document.getElementById(targetId);
        if (el) {
          e.preventDefault();
          smoothScrollTo(el, -80);
          const fullHref = href.startsWith("/") ? href : `/${href}`;
          setActiveHref(fullHref);
          window.history.pushState(null, "", fullHref);
        }
      }
    }
  };

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
            onClick={(e) => handleNavClick(e, "/")}
          >
            <Image
              src="/images/moosepbx-logo.png"
              alt="MoosePBX logo"
              width={40}
              height={40}
              className="h-9 w-auto sm:h-10 shrink-0 rounded-lg transition-all duration-300"
              priority
            />
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
              MoosePBX
            </span>
          </Link>

          <div className="hidden items-center md:flex md:gap-5 lg:gap-8">
            {navigation.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative text-sm lg:text-[15px] font-medium transition-colors hover:text-accent-400 py-2 whitespace-nowrap",
                    isActive ? "text-accent-400 font-semibold" : "text-neutral-500"
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
                const isActive = activeHref === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-base font-medium hover:bg-neutral-500/10 hover:text-accent-400 transition-colors flex items-center justify-between",
                      isActive ? "text-accent-400 bg-neutral-500/10 font-semibold" : "text-foreground"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-accent-400" />
                    )}
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
