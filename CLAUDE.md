# ShivAnvaya Web

Source of truth for product scope: `ShivAnvaya_Brand_Strategy_and_Website_CMS_PWA_PRD_v2.md` (especially §11 Frontend UI and §17 Technical stack).

## Stack
- Next.js App Router, React, TypeScript, Tailwind CSS, accessible component primitives.
- React Hook Form + Zod for forms. TipTap or comparable editor for the CMS.
- Components live under `components/{ui,content,admin}/`.

## Design skills
Use these skills for frontend design work in this repo:
- `21st-ui`: see `skills/21st-ui/SKILL.md`; find and adapt individual UI components (hero, navbar, forms, cards, dashboards) when the 21st.dev MCP catalog is connected.
- `dataviz`: any chart, graph, stat tile or KPI row (CMS analytics, ingestion job status, dashboards).

Do not use `artifact-design` for code in this repo; it applies only to standalone artifact pages.

## Design source
- Google Stitch project: https://stitch.google.com/projects/12390658744003907806
- Stitch pages are not readable by WebFetch. Export the design as HTML/CSS or code, or provide screenshots, before extracting tokens.

## Rules from the PRD
- Mobile-first breakpoints: 320–767, 768–1023, ≥1024px. CMS is desktop-first.
- WCAG 2.2 AA; 44×44px touch targets; visible focus; reduced-motion support.
- Devanagari-optimized fonts; per-locale `lang` and `dir`.
- Brand strings and domain config are centralized so the provisional brand name can change without rewriting routes.
