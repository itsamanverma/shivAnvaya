# PRD validation: frontend scope in this repository

**Checked:** 13 November 2026 against `ShivAnvaya_Brand_Strategy_and_Website_CMS_PWA_PRD_v2.md` (v2.0) and the ShivSadhana Unified PRD v1.0 (pasted; same product, earlier naming).
**Method:** `tsc --noEmit`, `next lint`, `next build`, then `next start` and HTTP checks on routes, metadata, headers and SEO files.
**Scope:** This repo is the Next.js web app only. NestJS API, CMS authentication and workflows, Flutter, Python AI and the account features are separate projects and are not implemented here.

## Status by requirement

| Requirement | Status | Notes |
|---|---|---|
| Hindi-first public shell, home, navigation | Done | `/hi` and root redirect. |
| WEB-002 search (Devanagari and Latin, aliases, diacritics) | Partial | Token matching over local sample content. Passes "om namah shivay", "ॐ नमः शिवाय", "Om Namah Shivaya", "maha mrityunjaya", "mahamrityunjaya", "Mahadev", and Devanagari "नीलकण्ठ". Fails the typo "om namaha shivaya" (no typo suggestions). Results come from the local sample only, not the API. |
| Search results noindex | Done | `robots: noindex, follow`. |
| WEB-003/004 mantra detail | Partial | Original-script verse shown only where set (`verse` field). Other entries show a pending-review notice. Detail pages are noindex until reviewed. Bug fixed: the verse block previously showed the title, not the text. |
| WEB-005/006 Shiva names | Partial | Three illustrative entries only; the 108-name dataset is not loaded. |
| WEB-007 Jyotirlinga | Partial | All 12 entries (name, romanization, state) with overview and detail pages. Detail pages carry no travel, religious or source content and stay noindex. |
| WEB-008 Panch Kedar | Partial | All 5 entries, same structure as above. `kedarnath` is in both lists by design. |
| WEB-009 to WEB-014 (calendar, rudraksha, baby names, poster, audio, groups) | Not started | P1/P2 features. |
| WEB-015 to WEB-018 trust, sources, legal, help | Partial | `/hi/sources` and `/hi/about` are indexable placeholders. Privacy, terms and corrections pages are missing. The correction form needs the API. |
| WEB-019 to WEB-028 (Jap, bookmarks, account, AI) | Not started | Need the backend contract and identity decision. |
| §10 PWA: manifest | Done | `app/manifest.ts`. Name is provisional. |
| §10 PWA: installable icons | Gap | Only an SVG icon is provided. Chrome and Android installability usually needs PNG 192 and 512 icons. Supply the PNGs once the brand is cleared. |
| §10 PWA: service worker and offline fallback | Done | `public/sw.js`. Shell precache, cache-first for hashed assets, network-first navigations with `/offline` fallback. Never caches `/admin`, `/api` or search result pages. Registered in production only. |
| §10 PWA: unpublish purge | Not applicable yet | The offline cache holds whatever was last viewed. Purge needs the backend's unpublish event. |
| §12 SEO: robots.txt | Done | Disallows `/admin` and `/api`. Not a security control (per PRD). |
| §12 SEO: sitemap | Done | Lists only indexable index and trust pages. Detail pages are excluded until approved. Base URL comes from `NEXT_PUBLIC_SITE_URL` and falls back to localhost. |
| §9.6 / §16 admin headers | Rule in place | `/admin/*` gets `Cache-Control: private, no-store` and `X-Robots-Tag: noindex`. No admin route exists yet. |
| §9.6 security headers | Done | `nosniff`, `Referrer-Policy`, `X-Frame-Options`. CSP is not set and needs a Next.js nonce or hash plan. |
| §11 / §15 design tokens | Partial | Colors and type are in `globals.css`. Contrast has not been audited for WCAG 2.2 AA. Several hard-coded colors remain outside the tokens. |
| §11 responsive breakpoints | Done | 320, 768 and 1024 px rules exist in `globals.css`. Not tested on devices. |
| §21 CMS, NestJS integration, auth, analytics | Not in this repo | Separate projects. |

## Fixes made during this pass

1. Search normalization: the old version used a substring match on a single string. It is now token-based with Devanagari-aware normalization (`lib/search.ts`).
2. Mantra detail: the verse block showed the mantra title. It now shows the verse only where set, otherwise a pending-review notice.
3. Trailing fullwidth danda in the section copy removed.
4. ESLint: generated `next-env.d.ts` is ignored, so lint passes.
5. Jyotirlinga and Panch Kedar: placeholder sections replaced with dedicated index and detail routes.
6. Non-reviewed placeholder sections (Shiv Charcha, Help) are now noindex.

## Open items

- Typo-tolerant search (PRD WEB-002 "typo suggestions").
- PNG icons for installability.
- Content: reviewed mantra text, names, travel details with verified dates. None of these may be added without a source and a reviewer.
- NestJS integration for content and search (`docs/api-content-contract-proposal.md`).
- Brand clearance, domain and `NEXT_PUBLIC_SITE_URL` before launch.
- CSP plan.
