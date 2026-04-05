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

// Static imports for projectsContent — guaranteed to be picked up by Vite
import enProjectsContent from "./locales/en/projectsContent.json";
import esProjectsContent from "./locales/es/projectsContent.json";

type TranslationRecord = Record<string, unknown>;

// Vite bundles all locale JSON files statically at build time
const translations = import.meta.glob<TranslationRecord>(
  "./locales/**/*.json",
  { eager: true }
);

function getTranslations(locale: Locale, namespace: Namespace): TranslationRecord {
  const key = `./locales/${locale}/${namespace}.json`;
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

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectContent = {
  smallDescription: string;
  fullDescription: string[];
  challenge: string;
  solution: string;
  features: ProjectFeature[];
};

type RawProjectContent = Partial<{
  smallDescription: string;
  fullDescription: string | string[];
  challenge: string;
  solution: string;
  features: ProjectFeature[];
}>;

type ProjectsContentMap = Record<string, RawProjectContent>;

const projectsContentMap: Record<Locale, ProjectsContentMap> = {
  en: enProjectsContent as ProjectsContentMap,
  es: esProjectsContent as ProjectsContentMap,
};

export function getProjectContent(locale: Locale, slug: string): ProjectContent {
  const localeMap = projectsContentMap[locale] ?? projectsContentMap[DEFAULT_LOCALE];
  const raw = localeMap[slug] ?? projectsContentMap[DEFAULT_LOCALE][slug] ?? {};

  return {
    smallDescription: raw.smallDescription ?? "",
    fullDescription: Array.isArray(raw.fullDescription)
      ? raw.fullDescription
      : raw.fullDescription
        ? [raw.fullDescription]
        : [],
    challenge: raw.challenge ?? "",
    solution: raw.solution ?? "",
    features: Array.isArray(raw.features) ? raw.features : [],
  };
}