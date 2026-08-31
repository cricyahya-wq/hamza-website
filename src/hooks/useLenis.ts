"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function useLenis() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with smooth, continuous scrolling options
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    if (typeof window !== "undefined") {
      window.__lenis = lenis;
    }

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Use GSAP ticker to drive Lenis smoothly
    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);

    // Watch for DOM changes (tabs switching, accordions opening, content loading)
    // to dynamically recalculate scroll limits so scrolling never stops prematurely
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && document.body) {
      resizeObserver = new ResizeObserver(() => {
        lenis.resize();
      });
      resizeObserver.observe(document.body);
    }

    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== "undefined") {
        delete window.__lenis;
      }
    };
  }, []);

  // Handle route and hash changes
  useEffect(() => {
    if (!lenisRef.current) return;

    const timer = setTimeout(() => {
      lenisRef.current?.resize();
      
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash;
        const target = document.querySelector(hash);
        if (target) {
          lenisRef.current?.scrollTo(target as HTMLElement, { offset: -80 });
          return;
        }
      }
      
      // If no hash, ensure top of page
      if (typeof window !== "undefined" && !window.location.hash) {
        lenisRef.current?.scrollTo(0, { immediate: true });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname]);
}

/**
 * Utility to smoothly scroll to any element or offset using the active Lenis instance
 */
export function smoothScrollTo(target: string | HTMLElement | number, offset = -80) {
  if (typeof window !== "undefined" && window.__lenis) {
    window.__lenis.scrollTo(target, { offset, duration: 1.1 });
  } else if (typeof window !== "undefined") {
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    } else {
      const el = typeof target === "string" ? document.querySelector(target) : target;
      if (el) {
        const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }
}
