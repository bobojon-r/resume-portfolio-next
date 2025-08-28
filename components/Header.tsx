"use client";

import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="section py-3 flex items-center justify-between">
        <a href="/" className="font-semibold">Резюме — Шеф</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#skills" className="link">Навыки</a>
          <a href="#projects" className="link">Проекты</a>
          <a href="#contact" className="link">Контакты</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
