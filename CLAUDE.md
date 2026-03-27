# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run astro     # Run Astro CLI commands (e.g. astro check)
```

No test runner is configured. Type-checking via `npm run astro check`.

## Architecture

**Stack:** Astro 6 (SSG + one SSR endpoint), TailwindCSS v4, Three.js, Resend (email).

### Routing & i18n

- Root (`/`) redirects to `/en/` via `src/pages/index.astro`.
- All localized pages live under `src/pages/[lang]/` and use `getStaticPaths()` with `LOCALES` from `src/i18n/config.ts`.
- Supported locales: `en`, `es`. Default: `en`.
- Translations are pure server-side (no client bundle): JSON files at `src/i18n/locales/<locale>/<namespace>.json`, loaded at build time via Vite's `import.meta.glob`.
- Usage in any `.astro` file:
  ```ts
  const t = useTranslations(lang, "hero"); // namespace matches a JSON file name
  t("some.nested.key")                     // dot notation for nested keys
  ```
- Adding a new namespace: add the name to `NAMESPACES` in `src/i18n/config.ts`, then create matching JSON files for each locale.

### Projects Data

Projects are defined as typed objects in `src/data/projects.ts` (the `Project` type). Adding a project means adding an entry to the `projects` array — the project detail page (`src/pages/[lang]/projects/[slug].astro`) and the project cards are driven entirely from this data.

Key `Project` fields: `slug` (used for URL and `transition:name`), `hasDetailsBtn` (shows link to detail page), `onProgressTag`, `workProjectTag`, `previewImages`, `technologiesIcons` (Astro SVG components from `src/assets/svg/`).

### Layout & Design System

- `src/layouts/Layout.astro` wraps every page. It renders the animated star canvas (canvas-based, restarts on `astro:page-load`), the `NavBar`, and uses Astro's `ClientRouter` for view transitions.
- CSS design tokens are defined as CSS custom properties in `src/styles/variables.css` and mapped into Tailwind v4's `@theme` block — use `bg-bg-main`, `text-primary`, `text-secondary-5`, etc. as Tailwind classes.
- Primary accent: `--primary` (`#53EBF3` cyan), `--primary-2` (`#3090E9` blue).
- SVG icons live in `src/assets/svg/` as `.astro` components (imported and rendered as `<Icon class="h-5 w-5" />`).

### API

- `src/pages/api/contact.ts` is the only SSR endpoint (`prerender = false`). It uses Resend to send contact form emails.
- Required env vars: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`.
