# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Destil·leria La Solana**, a premium essential-oil distillery in the Empordà. Single-page Vue 3 site, content in Catalan (`<html lang="ca">`).

## Commands

```bash
npm run dev      # local dev (Vite, allows ngrok hosts — see vite.config.js)
npm run build    # production build to dist/
npm run preview  # serve built dist/
```

No test, lint, or typecheck scripts are configured.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` to Cloudflare Pages (project `delasolana`) via `cloudflare/wrangler-action@v3`. Requires repo secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.

## Architecture

Vue 3 + Vite + Tailwind CSS v4 (via `@tailwindcss/vite`). No router, no store, no SSR — `App.vue` simply stacks section components inside `<TheNav>` / `<TheFooter>`.

Layered component structure:

- `src/components/sections/` — full-page sections; one per landing-page block. Each owns its anchor `id` (e.g. `#destilleria`, `#proces`, `#destilacions`, `#origen`, `#contacte`) which `TheNav.vue` links to.
- `src/components/layout/` — `TheNav` (sticky, scroll-aware, mobile hamburger), `TheFooter`.
- `src/components/ui/` — reusable primitives: `BaseButton`, `SectionEyebrow`, `ImageSlot`, `DistillationCard`.
- `src/composables/useReveal.js` — IntersectionObserver-based fade-in. Sections bind `ref="target"` and toggle `is-revealed` on the `.reveal` element. The CSS for this lives in `style.css` under `@layer components`.
- `src/composables/useDocumentMeta.js` — watches the active i18n locale and overwrites `<title>` and the description / og meta tags. Called once from `App.vue`.
- `src/lib/contact.js` — **stubbed** contact-form submitter. `submitMessage()` currently logs and returns `{ ok: true }`; the file's TODO documents the payload contract for the future Lambda endpoint. The `assumpte` field is a stable enum (`inquiry` | `collaboration` | `info` | `other`), not the localised label.

### Design system

The visual system lives in two places — keep them in sync:

1. **`src/style.css`** — Tailwind v4 `@theme` block defines the brand tokens (`--color-cream`, `--color-paper`, `--color-copper`, `--color-copper-deep`, `--color-clay`, `--color-ink`, `--color-hairline*`, `--font-display`, `--font-sans`, tracking). Tailwind v4 surfaces these as utility classes (`bg-cream`, `text-copper`, etc.), so add new design tokens here rather than in component styles.
2. **`@layer components`** in the same file — shared primitives: `.eyebrow`, `.display`, `.prose-solana`, `.hairline*`, `.reveal` / `.is-revealed`, `.grain`, `.container-solana`, `.section-y`. New sections should use `section-y` for vertical rhythm and `container-solana` for max-width/gutter.

Typography: display font is `Verdana` (intentional — see `--font-display`); body is `Inter` loaded from Google Fonts in `index.html`.

Section convention: every section uses `<section id="..." class="section-y bg-cream" aria-labelledby="...-title">`, wraps content in `.container-solana`, applies `useReveal()` to the inner grid, and opens with `<SectionEyebrow>` or `.eyebrow` text in copper.

### Internationalisation

The site ships in 6 locales: `ca` (default, source of truth), `es`, `en`, `fr`, `ja`, `zh` (Simplified). Built on **vue-i18n v11** in Composition API mode (`legacy: false`).

- **Setup**: `src/i18n/index.js` exports `i18n`, the `SUPPORTED` list, and `setLocale(code)`. Locale detection order: `localStorage('lasolana.locale')` → `navigator.language` 2-letter match → `ca`. `<html lang>` is kept in sync via a `watch` in the same file.
- **Dictionaries**: `src/i18n/locales/{ca,es,en,fr,ja,zh}.js` — namespaced by component (`hero`, `message`, `distillery`, …). Catalan is the source of truth; other files mirror its key structure exactly.
- **Split headings**: section titles with mid-sentence italic emphasis are stored as discrete keys (`titleLine1`, `titleEmphasis`, `titleLine3`, sometimes `titleConnector` / `titleSuffix`) so each language can rephrase without losing the typographic intent.
- **Latin species names** (`Cupressus sempervirens`, `Schinus molle`, `Schinus terebinthifolius`, `Petroselinum crispum`) are NOT translated — they are hardcoded in the section components' arrays (`SectionDistillations.vue`, `SectionOrigins.vue`). For the inline italic Latin names in `SectionOrigins` body 2, the message is split into `body2Prefix`/`body2Middle`/`body2Suffix` and the component interpolates `<em>` markup between them.
- **Language switcher**: `src/components/ui/LanguageSwitcher.vue` — globe icon + "Language" label trigger with a right-anchored popover, mounted in the nav and visible at all breakpoints (mobile header too, alongside the hamburger). Uses endonyms (`Català`, `Español`, `English`, `Français`, `日本語`, `中文`).
- **Contact form `assumpte` enum**: stable values (`inquiry` / `collaboration` / `info` / `other`) are submitted to the backend; localised labels are only shown in the `<select>`. Don't translate the enum.
- **Adding a new locale**: add `{ code, name }` to `SUPPORTED` in `src/i18n/index.js`, create `src/i18n/locales/<code>.js` mirroring `ca.js`, import it and pass it into the `messages` object. No other changes needed.
- **No per-locale URLs**. Locale lives in client state. SEO impact is accepted; reconsider when/if a router is added.

### Media

Large `.mp4` files live in `public/` and are referenced by absolute paths (e.g. `/xipre.mp4`) so Vite serves them as static assets. `ImageSlot.vue` accepts either `src` (image) or `video` and gracefully degrades to a tinted gradient + caption fallback (`tone: copper | clay | cream`) when the asset is missing or fails to load — this is intentional so the page stays visually complete during content-in-progress states. `src/assets/images/README.md` documents the expected image filenames, ratios, and minimum sizes for each section.

## Conventions

- Vue 3 `<script setup>` SFCs throughout; no Options API.
- Catalan copy in templates is the source of truth — preserve diacritics (`·`, `à`, `è`, etc.) when editing.
- Prefer extending the design tokens / component layer in `style.css` over one-off arbitrary Tailwind values when a pattern repeats.
