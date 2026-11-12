# ShivAnvaya Web

Hindi-first Next.js App Router foundation for the proposed ShivAnvaya public website. The brand name is provisional and centralized in `lib/brand.ts` until clearance is complete.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Then open `http://localhost:3000`. The root path redirects to `/hi`.

## Current scope

- Responsive Hindi public shell, home page, search prototype, mantra collection, Shiva names index and sample detail pages.
- Lightweight informational route shells for the planned knowledge sections.
- Design tokens and brand strings centralized for future changes.
- Mantra/search sample content is illustrative and is not marked as editor-reviewed or published.

## Not connected yet

The NestJS API, CMS authentication and review workflows, real editorial content, English translations, PWA caching, user accounts, analytics and deployment configuration still need to be defined and implemented. Search is intentionally limited to the small local sample in `lib/content.ts`.
