import { type ButtonHTMLAttributes, type ComponentProps } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[12px] font-medium transition-all duration-200 will-change-transform hover:-translate-y-[2px] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315FE8] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0",
  {
    variants: {
      variant: {
        primary: "bg-[#315FE8] text-white hover:bg-[#3F6FF0] shadow-[0_2px_8px_rgba(0,0,0,0.15)]",
        cta: "bg-[#315FE8] text-white hover:bg-[#3F6FF0] shadow-[0_4px_12px_rgba(49,95,232,0.2)]",
        secondary:
          "bg-transparent border border-border text-foreground hover:bg-neutral-500/10",
        outline:
          "bg-transparent border border-border text-foreground hover:bg-neutral-500/10",
        "outline-dark":
          "bg-transparent border border-border text-foreground hover:bg-neutral-500/10",
        ghost: "text-neutral-500 hover:bg-neutral-500/10 hover:text-foreground",
      },
      size: {
        sm: "px-4 py-2 text-sm min-h-[40px]",
        md: "px-[24px] py-[14px] text-base min-h-[48px]", // Fits the 48-54px height & 20-28px padding
        lg: "px-[28px] py-[16px] text-lg min-h-[54px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type ButtonAsLink = ComponentProps<typeof Link> & {
  href: string;
};

type ButtonProps = VariantProps<typeof buttonVariants> &
  (ButtonAsButton | ButtonAsLink);

export function Button({ variant, size, className, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href) {
    return <Link className={classes} {...(props as ButtonAsLink)} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
