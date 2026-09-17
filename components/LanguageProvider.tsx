"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/data";

type LanguageContextValue = { locale: Locale; setLocale: (locale: Locale) => void };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");
  useEffect(() => {
    const savedLocale = window.localStorage.getItem("locale");
    if (savedLocale === "en" || savedLocale === "ru") {
      document.documentElement.lang = savedLocale;
      setLocaleState(savedLocale);
    }
  }, []);
  function setLocale(nextLocale: Locale) {
    window.localStorage.setItem("locale", nextLocale);
    document.documentElement.lang = nextLocale;
    setLocaleState(nextLocale);
  }
  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
