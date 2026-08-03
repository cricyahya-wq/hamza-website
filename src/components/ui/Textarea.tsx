import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      suppressHydrationWarning
      className={cn(
        "bg-neutral-50 focus:border-accent-400 focus:ring-accent-400/20 w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:ring-2 focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
