"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { BlogCard } from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";

export function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <Section id="blog" className="bg-background py-24 sm:py-32 relative overflow-hidden border-b border-border scroll-mt-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-20">
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.15em] text-accent-400 uppercase">
            INSIGHTS & RESOURCES
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Stay Ahead in Business Communication.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-3xl mx-auto">
            Expert articles on VoIP, PBX, call center strategy, AI voice agents, SIP trunking, and modern telecom infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {latestPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.08} className="h-full">
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
        </div>

        <div className="mt-16 text-center">
          <Button href="/blog" variant="outline-dark" size="lg" className="hover:border-accent-400">
            Read All Articles & Guides
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
