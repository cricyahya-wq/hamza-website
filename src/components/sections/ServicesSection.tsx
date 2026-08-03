"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";

import { servicesData as services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Enterprise Cloud Solutions
          </h2>
          <p className="mt-4 text-lg text-[#64748B]">
            Premium telecom infrastructure designed for scale, security, and global reliability.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-[28px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08} className="flex h-full">
              <Link 
                href={`/services/${service.slug}`}
                className="group flex flex-col w-full h-full bg-[#FFFFFF] rounded-[20px] border border-[#EEF2FF] p-[32px] shadow-[0_10px_35px_rgba(83,104,255,0.08)] transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[10px] hover:shadow-[0_20px_45px_rgba(83,104,255,0.12)] hover:border-[#2563EB]/30 hover:shadow-[#2563EB]/10"
              >
                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-[16px] bg-transparent">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-[32px] font-bold text-[#0F172A] leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[17px] leading-[1.8] text-[#64748B] line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Pushes CTA to the bottom if description is short */}
                  <div className="mt-auto pt-8">
                    <span className="flex items-center text-[15px] font-bold uppercase text-[#2563EB]">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-2" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
