"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = resolvedTheme === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";

  return (
    <button
      className="tag"
      onClick={() => setTheme(next)}
      aria-label="Toggle theme"
      title="Сменить тему"
    >
      {current === "dark" ? "Тёмная" : "Светлая"}
    </button>
  );
}
