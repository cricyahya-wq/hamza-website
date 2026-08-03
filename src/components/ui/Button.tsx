import { type ButtonHTMLAttributes, type ComponentProps } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 will-change-transform hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-neutral-900 hover:bg-primary-700 shadow-[0_12px_30px_rgba(37,99,235,0.20)]",
        secondary:
          "bg-white border border-primary-600 text-primary-600 hover:bg-primary-50",
        cta: "bg-primary-600 text-white shadow-[0_12px_30px_rgba(37,99,235,0.20)] hover:bg-primary-700 hover:shadow-[0_16px_35px_rgba(37,99,235,0.30)]",
        outline:
          "bg-white border border-neutral-300 text-neutral-900 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50",
        "outline-dark":
          "bg-transparent border border-white text-white hover:bg-white/10",
        ghost: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
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
