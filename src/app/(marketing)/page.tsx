import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Features } from "@/components/sections/Features";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Statistics } from "@/components/sections/Statistics";
import { PricingSection } from "@/components/sections/PricingSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 1. HOME */}
      <Hero />

      {/* 2. SERVICES */}
      <ServicesSection />
      <Features />

      {/* 3. SOLUTIONS */}
      <SolutionsSection />
      <DashboardPreview />
      <Statistics />

      {/* 4. PRICING */}
      <PricingSection />

      {/* 5. INDUSTRIES */}
      <IndustriesSection />

      {/* 6. BLOG */}
      <BlogSection />

      {/* SUPPORTING SECTIONS */}
      <FAQ />
      <Contact />
    </>
  );
}
