import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Locale, L } from "./types";
import { resolveL } from "./types";
import en from "./en.json";
import zhTW from "./zh-TW.json";

type Dict = Record<string, unknown>;
const dicts: Record<Locale, Dict> = { en, "zh-TW": zhTW };

function get(obj: Dict, path: string): string {
  const val = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") return (acc as Dict)[key];
    return undefined;
  }, obj);
  return typeof val === "string" ? val : path;
}

interface LanguageCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  l: (text: L) => string;
}

const Ctx = createContext<LanguageCtx>({
  locale: "en",
  setLocale: () => {},
  t: (k) => k,
  l: (text) => (typeof text === "string" ? text : text.en),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem("locale");
      if (saved === "zh-TW") return "zh-TW";
    } catch {}
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("locale", locale);
    } catch {}
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: string) => get(dicts[locale], key);
  const l = (text: L) => resolveL(text, locale);

  return <Ctx.Provider value={{ locale, setLocale, t, l }}>{children}</Ctx.Provider>;
}

export function useLanguage() {
  return useContext(Ctx);
}
