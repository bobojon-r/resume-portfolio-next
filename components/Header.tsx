"use client";

import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";
import { content, profile } from "@/lib/data";

export function Header() {
  const { locale } = useLanguage();
  const nav = content[locale].nav;
  return <header className="sticky top-0 z-50 border-b border-neutral-200 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:supports-[backdrop-filter]:bg-neutral-950/60"><div className="section flex items-center justify-between py-3"><a href="/" className="font-semibold">{profile.name}</a><nav className="flex items-center gap-3 text-sm"><a href="#experience" className="link hidden sm:inline">{nav.experience}</a><a href="#skills" className="link hidden sm:inline">{nav.skills}</a><a href="#projects" className="link hidden md:inline">{nav.projects}</a><a href="#contact" className="link hidden md:inline">{nav.contact}</a><LanguageToggle /><ThemeToggle /></nav></div></header>;
}
