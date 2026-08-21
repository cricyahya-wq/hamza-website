"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Search, X } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { BlogCard } from "@/components/ui/BlogCard";
import { SkeletonCard } from "@/components/ui/Skeleton";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

const ALL = "All";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const featuredPost = posts.find((p) => p.featured) ?? posts[0];
  const gridPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts],
  );

  const [active, setActive] = useState(ALL);
  const [search, setSearch] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);

  const filtered = useMemo(() => {
    let result = active === ALL ? gridPosts : gridPosts.filter((p) => p.category === active);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q),
      );
    }
    return result;
  }, [active, search, gridPosts]);

  const handleSelect = (category: string) => {
    if (category === active || isFiltering) return;
    setIsFiltering(true);
    window.setTimeout(() => {
      setActive(category);
      setIsFiltering(false);
    }, 350);
  };

  return (
    <div className="space-y-16">
      {/* ── Featured article ─────────────────────────────────────────────── */}
      {featuredPost && (
        <FadeIn>
          <p className="mb-5 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
            Featured Article
          </p>
          <BlogCard
            href={`/blog/${featuredPost.slug}`}
            category={featuredPost.category}
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            date={featuredPost.date}
            readTime={featuredPost.readTime}
            author={featuredPost.author}
            image={featuredPost.image}
            featured
          />
        </FadeIn>
      )}

      {/* ── Search + Filter bar ──────────────────────────────────────────── */}
      <FadeIn delay={0.1}>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative max-w-sm flex-1">
            <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="search"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-card focus:border-accent-400 focus:ring-accent-400/20 w-full rounded-full border border-border py-2.5 pr-4 pl-11 text-sm text-foreground placeholder:text-neutral-500 focus:ring-2 focus:outline-none"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-neutral-400 hover:text-primary-600"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="bg-card flex flex-wrap gap-1 rounded-full p-1 sm:inline-flex">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleSelect(category)}
                className="relative rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
                suppressHydrationWarning
              >
                {active === category && (
                  <m.span
                    layoutId="blog-category-pill"
                    className="bg-accent-400 absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10",
                    active === category
                      ? "text-primary-950"
                      : "text-neutral-400 hover:text-primary-600",
                  )}
                >
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ── Article grid ─────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {isFiltering ? (
          <m.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </m.div>
        ) : filtered.length === 0 ? (
          <m.div
            key="empty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-20 text-center"
          >
            <p className="text-neutral-400">
              No articles found
              {search ? ` for "${search}"` : ""}.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActive(ALL);
              }}
              className="text-accent-400 mt-3 text-sm hover:underline"
            >
              Clear filters
            </button>
          </m.div>
        ) : (
          <m.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.05} className="h-full">
                <BlogCard
                  href={`/blog/${post.slug}`}
                  category={post.category}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  author={post.author}
                  image={post.image}
                  className="h-full"
                />
              </FadeIn>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
