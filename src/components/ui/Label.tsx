import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: ComponentPropsWithoutRef<"label">) {
  return (
    <label
      className={cn(
        "mb-2 block text-sm font-medium text-foreground",
        className,
      )}
      {...props}
    />
  );
}
