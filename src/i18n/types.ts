export type Locale = "en" | "zh-TW";

export type L = string | Record<Locale, string>;

export function resolveL(text: L, locale: Locale): string {
  if (typeof text === "string") return text;
  return text[locale] ?? text.en;
}
