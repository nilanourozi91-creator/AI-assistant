"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-[#161E2E] dark:text-slate-200 dark:hover:bg-slate-800"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <Sun size={18} />
        // <span>light</span>
      ) : (
        <Moon size={18} />
        // <span>dark</span>
      )}
    </button>
  );
}