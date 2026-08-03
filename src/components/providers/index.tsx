"use client";

import { type ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </LazyMotion>
  );
}
