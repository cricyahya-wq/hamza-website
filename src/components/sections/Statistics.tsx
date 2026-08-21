import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/stats";

export function Statistics() {
  return (
    <section className="from-primary-950/50 via-background to-background bg-gradient-to-b py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 0.1}
              className="text-center"
            >
              <p className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-3 text-sm text-neutral-400 sm:text-base">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
