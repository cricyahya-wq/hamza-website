import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "border-accent-400/20 bg-accent-400/10 text-primary-600 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium",
        className,
      )}
      {...props}
    />
  );
}
