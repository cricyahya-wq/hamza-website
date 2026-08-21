"use client";

import { type ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LazyMotion features={domAnimation}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </LazyMotion>
    </ThemeProvider>
  );
}
