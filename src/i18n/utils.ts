/**
 * useTranslations
 *
 * Server-side translation helper for Astro components.
 * Loads JSON locale files statically at build time — no client bundle.
 *
 * Usage in any .astro component:
 *
 *   ---
 *   import { useTranslations } from "../../i18n";
 *   const t = useTranslations(lang, "hero");
 *   ---
 *   <h1>{t("greeting")}</h1>
 *
 * Nested keys use dot notation: t("socials.ariaLabel")
 */

import { DEFAULT_LOCALE, type Locale, type Namespace } from "./config";

type TranslationRecord = Record<string, unknown>;

// Vite bundles all locale JSON files statically at build time
const translations = import.meta.glob<TranslationRecord>(
  "./locales/**/*.json",
  { eager: true }
);

function getTranslations(locale: Locale, namespace: Namespace): TranslationRecord {
  const key         = `./locales/${locale}/${namespace}.json`;
  const fallbackKey = `./locales/${DEFAULT_LOCALE}/${namespace}.json`;
  return (translations[key] ?? translations[fallbackKey] ?? {}) as TranslationRecord;
}

function resolveDot(obj: TranslationRecord, key: string): string {
  const parts = key.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current === null || typeof current !== "object") return key;
    current = (current as TranslationRecord)[part];
  }
  return typeof current === "string" ? current : key;
}

export function useTranslations(locale: Locale, namespace: Namespace) {
  const dict = getTranslations(locale, namespace);
  return function t(key: string, fallback?: string): string {
    const value = resolveDot(dict, key);
    return value !== key ? value : (fallback ?? key);
  };
}
