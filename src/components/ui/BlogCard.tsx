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

const categoryGradients: Record<string, string> = {
  VoIP: "from-accent-900/80 via-primary-800/60 to-primary-950",
  PBX: "from-secondary-900/80 via-primary-800/60 to-primary-950",
  "Call Center": "from-primary-800/80 via-secondary-900/60 to-primary-950",
  Security: "from-primary-900/80 via-secondary-800/60 to-primary-950",
  AI: "from-accent-950/80 via-accent-900/50 to-primary-950",
  "Business Communication": "from-secondary-800/80 via-primary-900/60 to-primary-950",
  "Company News": "from-primary-800/80 via-accent-950/50 to-primary-950",
};

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="bg-accent-500/10 text-accent-400 border-accent-500/20 inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold tracking-widest uppercase shadow-sm">
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
  const gradient = categoryGradients[category] ?? "from-primary-800/80 via-secondary-800/60 to-primary-950";

  if (featured) {
    return (
      <Link href={href} className={cn("group block", className)}>
        <m.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-surface-alt border-border hover:border-[#315FE8]/40 hover:shadow-2xl hover:shadow-[#315FE8]/10 relative grid overflow-hidden rounded-3xl border transition-all duration-300 lg:grid-cols-5"
        >
          {/* Image panel */}
          <div
            className={cn(
              "relative overflow-hidden lg:col-span-3",
              "aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto",
            )}
          >
            {image ? (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden
              />
            ) : (
              <div
                className={cn("absolute inset-0 bg-gradient-to-br", gradient)}
                aria-hidden
              />
            )}
            <div className="from-background absolute inset-0 bg-gradient-to-r via-background/40 to-transparent lg:via-background/20" />
            <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent lg:hidden" />
            
            {/* Featured label */}
            <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-background/80 px-3.5 py-1.5 backdrop-blur-md border border-border">
              <span className="size-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest text-foreground uppercase">
                Featured
              </span>
            </div>
          </div>

          {/* Content panel */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 lg:col-span-2 relative z-10 bg-background/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
            <div>
              <CategoryBadge category={category} />
            </div>
            <h2 className="font-display group-hover:text-accent-400 mt-5 text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 sm:text-3xl lg:text-4xl leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-400 line-clamp-3">
              {excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500">
              {author && (
                <span className="flex items-center gap-1.5 text-neutral-300">
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

            <div className="mt-8 flex items-center">
              <div className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent-500/10 px-6 py-3 text-sm font-bold text-accent-400 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white border border-accent-500/20 group-hover:border-accent-500 shadow-lg shadow-transparent group-hover:shadow-accent-500/25">
                Read Article
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
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
        className="bg-surface-alt border-border hover:border-[#315FE8]/40 flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:shadow-[#315FE8]/10"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {image ? (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
              aria-hidden
            />
          ) : (
            <div
              className={cn("absolute inset-0 bg-gradient-to-br", gradient)}
              aria-hidden
            />
          )}
          <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80" />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <div>
            <CategoryBadge category={category} />
          </div>
          <h3 className="font-display group-hover:text-accent-400 mt-4 text-xl font-bold leading-tight text-foreground transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400 line-clamp-3">
            {excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500">
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
          </div>

          <div className="mt-6 flex items-center">
            <div className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-background px-5 py-2.5 text-xs font-bold text-foreground border border-border transition-all duration-300 group-hover:bg-[#315FE8] group-hover:border-[#315FE8] group-hover:text-white shadow-sm">
              Read More
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </m.div>
    </Link>
  );
}
