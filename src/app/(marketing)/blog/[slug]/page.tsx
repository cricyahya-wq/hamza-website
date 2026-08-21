import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  Link2,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts, getAdjacentPosts, getRelatedPosts } from "@/data/blog";
import type { BlogSection } from "@/types";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | MoosePBX Blog`,
    description: post.metaDescription ?? post.excerpt,
    openGraph: {
      title: post.title,
      description: post.metaDescription ?? post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category, "VoIP", "MoosePBX"],
      ...(post.image ? { images: [post.image] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription ?? post.excerpt,
    },
  };
}

// ── Section renderer ─────────────────────────────────────────────────────────

function RenderSection({ section, idx }: { section: BlogSection; idx: number }) {
  if (section.type === "callout") {
    return (
      <div className="bg-accent-400/5 border-accent-400/30 my-8 rounded-2xl border-l-4 px-6 py-5">
        <p className="text-accent-200 text-sm leading-relaxed">{section.body}</p>
      </div>
    );
  }

  if (section.type === "tip") {
    return (
      <div className="bg-primary-900/40 my-8 rounded-2xl border border-border px-6 py-5">
        <p className="mb-1 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
          💡 Tip
        </p>
        <p className="text-sm leading-relaxed text-neutral-400">{section.body}</p>
      </div>
    );
  }

  if (section.type === "quote") {
    return (
      <blockquote className="border-accent-400 my-8 border-l-4 pl-6">
        <p className="text-lg leading-relaxed font-medium text-foreground italic">
          &ldquo;{section.body}&rdquo;
        </p>
        {section.cite && (
          <cite className="mt-3 block text-sm not-italic text-neutral-400">
            — {section.cite}
          </cite>
        )}
      </blockquote>
    );
  }

  return (
    <div key={idx} className="mt-8">
      {section.heading && (
        <h2 className="font-display mb-4 text-xl font-bold text-foreground sm:text-2xl">
          {section.heading}
        </h2>
      )}
      <p className={`leading-relaxed text-neutral-400 ${idx === 0 ? "text-lg text-neutral-200" : ""}`}>
        {section.body}
      </p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const related = post.relatedSlugs ? getRelatedPosts(post.relatedSlugs) : [];

  // Category gradient for hero fallback
  const categoryGradients: Record<string, string> = {
    VoIP: "from-accent-900 via-primary-800 to-primary-950",
    PBX: "from-secondary-900 via-primary-800 to-primary-950",
    "Call Center": "from-primary-800 via-secondary-900 to-primary-950",
    Security: "from-primary-900 via-secondary-800 to-primary-950",
    AI: "from-accent-950 via-accent-900 to-primary-950",
    "Business Communication": "from-secondary-800 via-primary-900 to-primary-950",
    "Company News": "from-primary-800 via-accent-950 to-primary-950",
  };
  const gradient = categoryGradients[post.category] ?? "from-primary-800 via-primary-900 to-primary-950";

  // JSON-LD Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "MoosePBX" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero image ─────────────────────────────────────────────────── */}
      <div className={`relative h-[45vh] min-h-[320px] bg-gradient-to-br ${gradient} overflow-hidden pt-20`}>
        {post.image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${post.image})` }}
            aria-hidden
          />
        )}
        <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      {/* ── Article body ───────────────────────────────────────────────── */}
      <Section className="bg-surface-alt -mt-16">
        <Container className="max-w-4xl">
          {/* Breadcrumb */}
          <FadeIn>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Link href="/" className="hover:text-primary-600">Home</Link>
              <ChevronRight className="size-3" />
              <Link href="/blog" className="hover:text-primary-600">Blog</Link>
              <ChevronRight className="size-3" />
              <span className="text-neutral-400 truncate max-w-[200px]">{post.title}</span>
            </nav>
          </FadeIn>

          <div className="mt-8 lg:grid lg:grid-cols-[1fr_260px] lg:gap-16">
            {/* ── Main content ─────────────────────────────────────────── */}
            <div>
              {/* Meta header */}
              <FadeIn delay={0.05}>
                <Badge>{post.category}</Badge>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="mt-5 flex flex-wrap items-center gap-5 border-b border-border pb-8 text-sm text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <User className="size-4" />
                    <span>
                      {post.author}
                      {post.authorRole && (
                        <span className="ml-1 text-neutral-400">· {post.authorRole}</span>
                      )}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-4" />
                    {post.readTime}
                  </span>
                </div>
              </FadeIn>

              {/* Article sections */}
              <FadeIn delay={0.2}>
                <div className="mt-8 space-y-0">
                  {post.sections.map((section, idx) => (
                    <RenderSection key={idx} section={section} idx={idx} />
                  ))}
                </div>
              </FadeIn>

              {/* Share */}
              <FadeIn delay={0.25}>
                <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-border pt-8">
                  <span className="flex items-center gap-1.5 text-sm text-neutral-400">
                    <Share2 className="size-4" />
                    Share this article
                  </span>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X / Twitter"
                    className="bg-card hover:border-accent-400/40 flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-neutral-400 transition-colors hover:text-primary-600"
                  >
                    {/* X (Twitter) icon */}
                    <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.252 5.626 5.912-5.626Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X / Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://moosepbx.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="bg-card hover:border-accent-400/40 flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-neutral-400 transition-colors hover:text-primary-600"
                  >
                    {/* LinkedIn icon */}
                    <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <button
                    type="button"
                    aria-label="Copy link"
                    className="bg-card hover:border-accent-400/40 flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-neutral-400 transition-colors hover:text-primary-600"
                  >
                    <Link2 className="size-3.5" />
                    Copy link
                  </button>
                </div>
              </FadeIn>

              {/* Prev / Next navigation */}
              {(prev ?? next) && (
                <FadeIn delay={0.3}>
                  <div className="mt-12 grid grid-cols-1 gap-4 border-t border-border pt-10 sm:grid-cols-2">
                    {prev && (
                      <Link
                        href={`/blog/${prev.slug}`}
                        className="bg-card hover:border-accent-400/30 group flex items-start gap-3 rounded-2xl border border-border p-5 transition-colors"
                      >
                        <ArrowLeft className="mt-0.5 size-4 shrink-0 text-neutral-400 transition-transform group-hover:-translate-x-1" />
                        <div className="min-w-0">
                          <p className="text-xs text-neutral-400">Previous</p>
                          <p className="group-hover:text-accent-300 mt-1 truncate text-sm font-medium text-foreground transition-colors">
                            {prev.title}
                          </p>
                        </div>
                      </Link>
                    )}
                    {next && (
                      <Link
                        href={`/blog/${next.slug}`}
                        className="bg-card hover:border-accent-400/30 group flex items-start gap-3 rounded-2xl border border-border p-5 text-right transition-colors sm:flex-row-reverse"
                      >
                        <ArrowRight className="mt-0.5 size-4 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1" />
                        <div className="min-w-0">
                          <p className="text-xs text-neutral-400">Next</p>
                          <p className="group-hover:text-accent-300 mt-1 truncate text-sm font-medium text-foreground transition-colors">
                            {next.title}
                          </p>
                        </div>
                      </Link>
                    )}
                  </div>
                </FadeIn>
              )}
            </div>

            {/* ── Sidebar ───────────────────────────────────────────────── */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                {/* Back link */}
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-primary-600"
                >
                  <ArrowLeft className="size-4" />
                  All articles
                </Link>

                {/* Table of contents */}
                {post.tableOfContents && post.tableOfContents.length > 0 && (
                  <div className="bg-card rounded-2xl border border-border p-5">
                    <p className="mb-4 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                      Table of contents
                    </p>
                    <ol className="space-y-2.5">
                      {post.tableOfContents.map((heading, i) => (
                        <li key={i}>
                          <span className="hover:text-accent-300 flex gap-2.5 text-sm text-neutral-400 transition-colors cursor-default">
                            <span className="text-neutral-400 tabular-nums">
                              {String(i + 1).padStart(2, "0")}.
                            </span>
                            {heading}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* CTA box */}
                <div className="from-accent-950/60 bg-card rounded-2xl border border-border bg-gradient-to-br to-transparent p-5">
                  <p className="font-display text-sm font-bold text-foreground">
                    Ready to modernize your phone system?
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                    Book a free demo and see MoosePBX in action.
                  </p>
                  <Link
                    href="/contact"
                    className="bg-accent-400 text-primary-950 hover:bg-accent-300 mt-4 block rounded-full py-2.5 text-center text-xs font-semibold transition-colors"
                  >
                    Book a demo
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ── Related articles ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <Section className="bg-surface-alt border-t border-border">
          <Container>
            <FadeIn>
              <h2 className="font-display mb-10 text-2xl font-bold text-foreground">
                Related articles
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <FadeIn key={p.slug} delay={i * 0.07} className="h-full">
                  <BlogCard
                    href={`/blog/${p.slug}`}
                    category={p.category}
                    title={p.title}
                    excerpt={p.excerpt}
                    date={p.date}
                    readTime={p.readTime}
                    author={p.author}
                    image={p.image}
                    className="h-full"
                  />
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBanner
        title="Ready to see MoosePBX for yourself?"
        description="Book a demo and see how it fits into your team's workflow."
      />
    </>
  );
}
