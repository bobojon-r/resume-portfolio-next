"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  return <div className="flex overflow-hidden rounded-full border border-neutral-300 text-xs dark:border-neutral-700" aria-label="Language selector">
    {(["ru", "en"] as const).map((item) => <button key={item} type="button" onClick={() => setLocale(item)} className={`px-2 py-1 ${locale === item ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "hover:bg-neutral-100 dark:hover:bg-neutral-900"}`} aria-pressed={locale === item}>{item.toUpperCase()}</button>)}
  </div>;
}
