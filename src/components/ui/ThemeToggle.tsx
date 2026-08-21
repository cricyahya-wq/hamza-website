"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[68px] h-[34px] rounded-full bg-foreground/5 border border-white/10" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-between w-[68px] h-[34px] p-1 rounded-full overflow-hidden transition-colors duration-350 bg-surface-alt border border-border hover:border-neutral-400"
      aria-label="Toggle theme"
    >
      {/* Background slider */}
      <m.div
        className="absolute left-1 top-1 w-[26px] h-[26px] rounded-full bg-card shadow-sm border border-border"
        initial={false}
        animate={{
          x: isDark ? 0 : 32,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      
      {/* Icons */}
      <div className="relative z-10 flex w-full justify-between items-center px-1.5 pointer-events-none">
        <Moon 
          className={`size-[14px] transition-colors duration-350 ${isDark ? 'text-accent-400' : 'text-neutral-400'}`} 
          strokeWidth={2.5}
        />
        <Sun 
          className={`size-[14px] transition-colors duration-350 ${isDark ? 'text-neutral-400' : 'text-accent-400'}`} 
          strokeWidth={2.5}
        />
      </div>
    </button>
  );
}
