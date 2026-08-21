import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      suppressHydrationWarning
      className={cn(
        "bg-surface-alt focus:border-accent-400 focus:ring-accent-400/20 w-full rounded-xl border border-border px-4 py-3 text-foreground placeholder:text-neutral-500 focus:ring-2 focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
