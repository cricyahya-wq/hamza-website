import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SectionTag = "section" | "div" | "article";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  as?: SectionTag;
}

export function Section({ as = "section", className, ...props }: SectionProps) {
  const Component = as;

  return <Component className={cn("py-20 sm:py-28 scroll-mt-24", className)} {...props} />;
}
