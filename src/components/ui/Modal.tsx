"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.stop();
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.start();
      }
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-background/80 absolute inset-0 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <m.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "relative w-full max-w-lg rounded-3xl border border-white/10 bg-foreground/5 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl outline-none sm:p-8",
              className,
            )}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 flex size-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-surface-alt hover:text-primary-600"
            >
              <X className="size-5" />
            </button>
            {title && (
              <h2 className="font-display pr-8 text-xl font-semibold text-foreground">
                {title}
              </h2>
            )}
            <div className={cn(title && "mt-4")}>{children}</div>
          </m.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
