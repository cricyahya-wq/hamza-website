import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "border-border bg-card text-neutral-500 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium",
        className,
      )}
      {...props}
    />
  );
}
