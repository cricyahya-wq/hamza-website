import { Hero } from "@/components/sections/Hero";
import { TrustedCompanies } from "@/components/sections/TrustedCompanies";
import { Statistics } from "@/components/sections/Statistics";
import { Features } from "@/components/sections/Features";
import { Products } from "@/components/sections/Products";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Statistics />
      <Features />
      <Products />
      <ServicesSection />
      <DashboardPreview />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
