import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ContainerTag =
  "div" | "section" | "article" | "header" | "footer" | "main";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  as?: ContainerTag;
}

export function Container({ as = "div", className, ...props }: ContainerProps) {
  const Component = as;

  return (
    <Component
      className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}
      {...props}
    />
  );
}
