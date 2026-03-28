/**
 * i18n configuration
 * Supported locales and default locale.
 */

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/**
 * All available translation namespaces.
 * Each namespace maps to a JSON file inside src/i18n/locales/<locale>/<namespace>.json
 */
export const NAMESPACES = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
  "specialtys",
  "projectDetail",
  "projectsContent",
] as const;
export type Namespace = (typeof NAMESPACES)[number];
