"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface ParticleFieldProps {
  className?: string;
  count?: number;
  color?: string;
  linkDistance?: number;
}

export function ParticleField({
  className,
  count = 50,
  color = "76, 201, 240",
  linkDistance = 120,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    let visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.6)`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]!;
          const b = particles[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${color}, ${0.15 * (1 - dist / linkDistance)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (visible && !prefersReducedMotion) {
        frameId = requestAnimationFrame(step);
      }
    };

    resize();
    init();
    step();

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        visible = entry.isIntersecting;
        if (visible && !prefersReducedMotion) {
          cancelAnimationFrame(frameId);
          frameId = requestAnimationFrame(step);
        }
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [count, color, linkDistance]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    />
  );
}
