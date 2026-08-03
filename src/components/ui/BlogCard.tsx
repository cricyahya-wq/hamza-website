"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  href: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  author?: string;
  image?: string;
  featured?: boolean;
  className?: string;
}

// Gradient fallbacks per category
const categoryGradients: Record<string, string> = {
  VoIP: "from-accent-900/80 via-primary-800/60 to-primary-950",
  PBX: "from-secondary-900/80 via-primary-800/60 to-primary-950",
  "Call Center": "from-primary-800/80 via-secondary-900/60 to-primary-950",
  Security: "from-primary-900/80 via-secondary-800/60 to-primary-950",
  AI: "from-accent-950/80 via-accent-900/50 to-primary-950",
  "Business Communication":
    "from-secondary-800/80 via-primary-900/60 to-primary-950",
  "Company News": "from-primary-800/80 via-accent-950/50 to-primary-950",
};

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="bg-accent-400/10 text-primary-600 border-accent-400/20 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase">
      {category}
    </span>
  );
}

export function BlogCard({
  href,
  category,
  title,
  excerpt,
  date,
  readTime,
  author,
  image,
  featured = false,
  className,
}: BlogCardProps) {
  const gradient =
    categoryGradients[category] ??
    "from-primary-800/80 via-secondary-800/60 to-primary-950";

  if (featured) {
    return (
      <Link href={href} className={cn("group block", className)}>
        <m.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-white border-neutral-200 hover:border-accent-400/30 relative grid overflow-hidden rounded-3xl border transition-colors duration-300 lg:grid-cols-5"
        >
          {/* Image panel */}
          <div
            className={cn(
              "relative overflow-hidden lg:col-span-3",
              "aspect-[16/9] lg:aspect-auto",
            )}
          >
            {image ? (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden
              />
            ) : (
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  gradient,
                )}
                aria-hidden
              />
            )}
            <div className="from-primary-950/60 absolute inset-0 bg-gradient-to-r to-transparent" />
            {/* Featured label */}
            <span className="absolute top-5 left-5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-neutral-900 backdrop-blur-sm">
              Featured
            </span>
          </div>

          {/* Content panel */}
          <div className="flex flex-col justify-center p-8 lg:col-span-2">
            <CategoryBadge category={category} />
            <h2 className="font-display group-hover:text-accent-300 mt-4 text-2xl font-bold tracking-tight text-neutral-900 transition-colors duration-200 lg:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {excerpt}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
              {author && (
                <span className="flex items-center gap-1.5">
                  <User className="size-3.5" />
                  {author}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {date}
              </span>
              {readTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {readTime}
                </span>
              )}
            </div>

            <div className="text-accent-400 group-hover:text-accent-300 mt-6 flex items-center gap-2 text-sm font-semibold transition-colors">
              Read article
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </m.div>
      </Link>
    );
  }

  // Standard card
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <m.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="bg-white border-neutral-200 hover:border-accent-400/30 hover:shadow-accent-400/5 flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:shadow-xl"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {image ? (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
              aria-hidden
            />
          ) : (
            <div
              className={cn("absolute inset-0 bg-gradient-to-br", gradient)}
              aria-hidden
            />
          )}
          <div className="from-primary-950/30 absolute inset-0 bg-gradient-to-t to-transparent" />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <CategoryBadge category={category} />
          <h3 className="font-display group-hover:text-accent-300 mt-3 text-lg font-semibold leading-snug text-neutral-900 transition-colors duration-200">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
            {excerpt}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-neutral-400">
            {author && (
              <span className="flex items-center gap-1">
                <User className="size-3" />
                {author}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Calendar className="size-3" />
              {date}
            </span>
            {readTime && (
              <span className="flex items-center gap-1">
                <Clock className="size-3" />
                {readTime}
              </span>
            )}
          </div>

          <div className="text-accent-400 group-hover:text-accent-300 mt-4 flex items-center gap-1.5 text-xs font-semibold transition-colors">
            Read more
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </div>
      </m.div>
    </Link>
  );
}
