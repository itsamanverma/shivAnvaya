# ShivAnvaya (शिवान्वय) — Brand Strategy and Detailed Product Requirements Document

**Status:** Proposed, not approved; **Brand:** provisional; **Internal project codename:** ShivSadhana  
**Document:** Website + CMS + PWA PRD v2.0 | **Prepared:** 12 November 2026  
**Companion products:** Flutter Android/iOS app; NestJS modular-monolith backend; Python AI engine  
**Scope of this PRD:** public website, limited installable PWA, and protected CMS in **one Next.js App Router application and one frontend deployment**. Mobile/backend/AI are integration dependencies, not separately specified here.

> **Decision caution:** “ShivAnvaya” is a creative recommendation, **not a legally cleared or registrar-verified name**. This document must remain brand-configurable until trademark, domains, app stores and handles are checked.

---

## 1. Executive product decision

**Recommended provisional master brand:** **ShivAnvaya** (शिवान्वय).  
**Positioning:** *A source-reviewed, Hindi-first companion to understand Shiva, build private devotional practice, and explore Shaiva traditions.*  
**Primary tagline:** **शिव ज्ञान से साधना तक।**  
**English line:** **Understand Shiva. Practice with purpose.**  
**Core product loop:** **Discover → Understand → Practice → Continue**.

One public-facing master brand should cover the website, installable PWA and Flutter app; the CMS is an administrative surface and is never separately marketed. The public website acquires visitors through genuinely useful searchable content. The mobile app drives reliable offline devotional practice. The CMS builds a durable, reviewed, versioned knowledge corpus that can support citation-grounded AI in later releases.

**Do not position the launch as** a generic compilation of mantras, a new puja-booking marketplace, a guaranteed-results spiritual remedy service, or an autonomous AI guru. None is a defensible differentiation at launch.

### Success hypothesis
A meaningful proportion of first-time visitors should complete **one learning task** (e.g., understand a mantra with its source), then perform **one optional practice action** (e.g., start a basic Jap session or save the page), and return because the experience is credible and useful—not because of rewards or guilt-inducing streaks.

### Key choices
- **One Next.js app:** public SEO pages, account pages where approved, PWA shell and `/admin` CMS.
- **One NestJS business API:** authoritative content, auth, role checks, publishing, Jap sync and account data. The Next.js app does not create a second business backend.
- **One Flutter mobile product:** primary offline Jap and Sankalp experience. PWA parity is explicitly *not* a launch requirement.
- **One PostgreSQL database:** canonical content and CMS workflow, user activity and `pgvector` when AI is ready.
- **One object store:** Cloudflare R2 for approved media and originals, using signed-upload URLs.
- **AI:** Python ingestion/Evals first; optional source-grounded user-facing RAG only after editorial corpus and evaluation thresholds.

---

## 2. Naming research, shortlist and clearance plan

### 2.1 Why not the working name?
- Existing **Shiv Sadhana** Android listing overlaps directly with mala counter, mantras, audio, goals, stories and temple guides.
- A separate **Shiv Sadhana – Om Namah Shivay** Apple listing overlaps conceptually.
- `shivsadhana.com` already presents a music/dance academy identity.
- **ShivBodh** is used by an active trust, religious-content website and related organization; do not shortlist it.
- **ShivMarg** is already used by a Shiva devotional website. A spelling variant is not reliable differentiation.

These findings show potential brand conflict, **not a legal determination of infringement**.

### 2.2 Naming recommendations (provisional; no availability claims)

| Rank | Candidate | Devanagari | Meaning/brand fit | Risk and next step |
|---|---|---|---|---|
| **1** | **ShivAnvaya** | **शिवान्वय** | Connection/continuity around Shiva; distinctive coined combination; supports learning-to-practice story | **Preferred for testing only**. Check phonetic/Devanagari marks and user pronunciation. |
| 2 | ShivPravaah | शिवप्रवाह | A flowing relationship with Shiva knowledge/practice | More common phrase; search and legal clearance needed. |
| 3 | ShivSaarthi | शिवसारथी | Companion on a personal Shiva journey | Spelling/meaning may suggest guidance authority; check collisions. |
| 4 | ShivPathika | शिवपथिक | A seeker following a Shiva path | More niche; verify native-language comprehension. |
| Avoid | ShivSadhana / ShivBodh / ShivMarg | — | Existing significant name usage | Do not launch without professional assessment. |

**Reason for preferring ShivAnvaya:** stronger ownable-sounding brand construction than generic “Shiv + Sadhana/Marg,” flexible for knowledge and practice, readable in Latin script. **Counterargument:** the Sanskrit-derived name may be unfamiliar; if 5-second comprehension and recall are poor, do *not* force it.

### 2.3 Brand clearance (release blocker)
1. Search exact, partial, transliterated and phonetic marks on official **IP India trademark public search**; ask an Indian trademark professional to advise relevant classes (potentially 9 for software/apps, 41 for education/content, 42 for software services, and other classes depending on commercial scope).
2. Search Google Play, App Store, Google/Bing, social platforms and company registries for exact and confusingly similar names, including `Shivanvaya`, `Shiv Anvaya`, `शिवान्वय`, alternate spellings and unrelated categories.
3. Query an **accredited domain registrar** for live `.com`, `.in`, and preferred alternatives; **no exact domain is claimed available by this report**. Assess premium/domain purchase cost.
4. Test 3 names with ~15 Hindi-speaking target users: pronunciation, spelling from memory, emotional fit, differentiation, trust and avoidance of inappropriate religious claims.
5. Obtain final clearance and reserve domain, social handles, Android application ID and iOS bundle ID **before** designing final logo or launching a listing.
6. Centralize strings and domain configuration in the code so a late rename does not require rewriting routes/content.

**Name-use policy until cleared:** internal code/repo uses `shivsadhana` codename; demo/mockup uses `ShivAnvaya (provisional)`; no external trademark or domain assertion.

### 2.4 Brand system proposal
- **Master brand:** ShivAnvaya | शिवान्वय.
- **Website title:** `ShivAnvaya — शिव ज्ञान, मंत्र अर्थ और साधना` (refine for SERP readability, not a keyword-stuffed title).
- **App listing working title:** `ShivAnvaya` plus a compliant optional descriptive subtitle if permitted.
- **Primary tagline:** `शिव ज्ञान से साधना तक।`
- **Voice:** respectful, welcoming, clear, non-dogmatic, no promises of supernatural outcomes, precise about interpretation vs source.
- **Visual direction:** warm off-white, stone gray, muted copper/saffron, restrained deep indigo; ample whitespace; highly legible Devanagari; no sensational divine imagery or fake endorsements.
- **Logo concept:** an abstract continuous path/line and subtle bindu/Trishul-inspired geometry only after design and cultural review; avoid close resemblance to existing devotional brands.
- **Naming for experiences:** `ज्ञान` (Explore), `जप` (Practice), `संकल्प`, `तीर्थ`, `संदर्भ` (Sources). Feature labels should be more immediately understandable than the master brand.
- **No distinct CMS brand:** `ShivAnvaya Studio` may be an *internal label*, not a separately registered product.

---

## 3. Market problem, competition and differentiation

### 3.1 User problems
- Hundreds of mantra pages repeat text without trustworthy origin, explanation, or pronunciation.
- Sanskrit/Devanagari transliteration creates search friction (`om namah shivay`, `ॐ नमः शिवाय`, spelling variants).
- Reading about mantras and practicing Jap happen in disconnected products.
- Travelers encounter undated or unverified temple/trek logistics.
- Devotees do not necessarily want public streaks, social ranking, paid rituals or compulsory login.
- AI-generated religious answers often omit provenance, uncertainty and distinctions between traditions.

### 3.2 Competitive stance
Compete on **trust + structured learning + seamless daily practice**, not number of mantras, online puja booking, raw app downloads, feature count or AI novelty. Existing apps already provide counters, audio, reminders and temple lists. A copied feature catalog will not win adoption.

### 3.3 Unique product differentiators to validate
1. **Source-first pages:** every important explanation displays scripture/tradition attribution, interpretation labels, reviewer and last-reviewed date.
2. **Learn → Jap connection:** readers move from a named mantra, meaning and pronunciation to a guest Jap session in one tap; Flutter can be recommended for a stronger offline experience.
3. **Hindi/Hinglish discoverability:** aliases, transliteration, Devanagari normalization and intent-oriented editorial structure.
4. **Tradition-aware knowledge:** present differing accounts respectfully; never flatten regional beliefs into a single asserted fact.
5. **Private, gentle practice:** no forced registration, shame-based streak mechanics or involuntary sharing.
6. **Trustworthy Yatra:** clearly labeled stable religious knowledge vs dated travel logistics, with reviewed dates and source links.
7. **Later grounded AI:** citations trace back to approved canonical chunks; evaluation results and failure handling are visible internally.

### 3.4 Defensibility
The durable asset is **an independently edited, structured, multilingual, rights-cleared knowledge corpus and associated provenance graph**, combined with a repeat-use practice workflow. A polished counter or chatbot alone is easy to copy.

---

## 4. Target audiences and research plan

| Persona | Primary task | Discovery channel | Initial product value |
|---|---|---|---|
| Hindi-first curious learner | What does this mantra/term mean? | Search / YouTube | Source-linked clear answer |
| Daily Shiva devotee | Practice simple daily Jap | Referral / direct | Guest-first flow and continuity |
| Shiv Charcha participant | Find reviewed discussion and Katha | Search / community | Topic-based structured material |
| Pilgrimage researcher | Understand and plan Panch Kedar/Jyotirlinga | Search | Religious history + verified guidance |
| Editor/reviewer | Publish correct accessible content | Admin | Review queue and audit history |

**Pre-build validation:** 15–20 qualitative interviews; 3 clickable prototypes; task-based tests covering mantra discovery, citation comprehension and first Jap completion; 10-user naming/recall exercise minimum (prefer ~15). Interview hypotheses do not equal market proof.

---

## 5. Product goals, non-goals and metrics

### Goals
- Make authoritative, mobile-readable Shiva knowledge searchable without login.
- Build a reliable editorial publishing system with source provenance and corrections.
- Provide a simple installable PWA for selected public content, not full app parity.
- Support optional account and basic web practice only after robust data-ownership design.
- Build a reusable content API and structured corpus suitable for future RAG/Evals.
- Lead visitors into Flutter when offline/repeat practice is clearly useful.

### Non-goals for first public release
- Online puja and donation marketplace; astrology or personalized medical/financial outcomes; group chat; unmoderated social posting; full poster generator; AI guru; paid subscription; live weather/road safety claims; every Flutter screen in web PWA; offline CMS publishing.

### North-star metric
**Weekly meaningful engagement:** unique users completing a meaningful action such as finishing a reviewed article, listening to pronunciation, saving content, or completing a consent-respecting Jap session. Exclude crawlers and bot traffic.

### Supporting metrics and validation targets (hypotheses, not observed benchmarks)
- First-session mantra detail → related action CTR; find baseline in beta.
- Search task success: target **≥85%** in curated test scenarios.
- First Jap session completion: target **≥60%** of starters, if web Jap is released.
- Editorial review SLA: initial target 90% of standard items reviewed within 5 business days.
- Incorrect citation link rate: target **<1%** of audited citations.
- Indexed eligible-page rate, organic clicks and returning visitors monitored; **no organic traffic or ranking promise**.
- Security: zero unpublished source leakage in authorization/caching tests.

---

## 6. Release priorities and feature boundaries

| Release | Public web | CMS | PWA | AI |
|---|---|---|---|---|
| **R0 internal** | Design system, auth shell, preview pages | Roles, source records, editorial review, versioning, audit | None | Ingestion experiments only |
| **R1 public MVP** | Home, search, mantra, Shiva names, Charcha, Katha, select Jyotirlinga + Panch Kedar, legal/help | Content lifecycle, media, metadata, SEO, revisions and urgent unpublish | Manifest, install, cached selected public pages, offline fallback | No user-facing AI; eval dataset begins |
| **R1.1 practice** | Bookmarks, optional browser Jap, Sankalp introduction, licensed audio | More content workflows, analytics | Local saved content; optional foreground sync | RAG retrieval internal beta |
| **R1.2 trust/utility** | Verified Vrat/Panchang, Rudraksha/Bhasma, baby names, improved guides | Source freshness and calendar approvals | Selected offline guides | Limited sourced Q&A after release gates |
| **R2** | Poster maker, optional groups and community | Moderation and rights management | Selective additions | Memory with explicit consent |

**Release rule:** do not inflate the MVP to all previous 14 website feature groups or 45 mobile screens. Those remain in the broader portfolio roadmap, not the website R1 delivery commitment.

---

## 7. Information architecture and page inventory

### Primary public navigation
`होम` · `मंत्र` · `शिव नाम` · `शिव ज्ञान` · `तीर्थ` · `खोज`. A practice CTA `जप करें` can be shown after the relevant web feature is ready. Avoid 10+ top-level menu items.

### Route convention
Use `/hi/` for Hindi and `/en/` for English. Default root `/` links to or redirects transparently to selected default language; avoid opaque forced geo redirects. Public slugs can be Latin/transliterated for ease of sharing. Existing API route names remain canonical on NestJS; these are frontend pages.

| ID | Example route | Page / experience | Priority | SEO? |
|---|---|---|---|---|
| WEB-001 | `/hi` | Homepage | P0 | Yes |
| WEB-002 | `/hi/search?q=` | Search | P0 | noindex search-result URLs |
| WEB-003 | `/hi/mantras` | Mantra library | P0 | Yes |
| WEB-004 | `/hi/mantras/om-namah-shivaya` | Mantra detail | P0 | Yes |
| WEB-005 | `/hi/shiva-names` | Shiva names index | P0 | Yes |
| WEB-006 | `/hi/shiva-names/mahadeva` | Shiva name meaning | P0 | Yes |
| WEB-007 | `/hi/shiv-charcha` | Topics / discussion guides | P0 | Yes |
| WEB-008 | `/hi/shiv-charcha/:slug` | Topic detail | P0 | Yes |
| WEB-009 | `/hi/katha` | Story library | P0 | Yes |
| WEB-010 | `/hi/katha/:slug` | Story detail | P0 | Yes |
| WEB-011 | `/hi/jyotirlinga` | 12 Jyotirlinga overview | P0 | Yes |
| WEB-012 | `/hi/jyotirlinga/:slug` | Temple detail | P0 | Yes |
| WEB-013 | `/hi/panch-kedar` | Panch Kedar overview | P0 | Yes |
| WEB-014 | `/hi/panch-kedar/:slug` | Trek/temple detail | P0 | Yes |
| WEB-015 | `/hi/about` | Trust, mission and team | P0 | Yes |
| WEB-016 | `/hi/sources` | Sources / methodology | P0 | Yes |
| WEB-017 | `/hi/privacy`, `/hi/terms` | Legal pages | P0 | Yes |
| WEB-018 | `/hi/help`, `/hi/contact` | Support and correction reports | P0 | Yes |
| WEB-019 | `/hi/jap` | Basic web Jap | P1 | noindex for activity |
| WEB-020 | `/hi/bookmarks` | Saved items | P1 | No |
| WEB-021 | `/hi/calendar`, `/hi/calendar/:slug` | Verified calendar | P1 | Yes for reviewed events |
| WEB-022 | `/hi/audio`, `/hi/audio/:slug` | Audio | P1 | Yes for rights-cleared details |
| WEB-023 | `/hi/rudraksha`, `/hi/bhasma` | Educational articles | P1 | Yes |
| WEB-024 | `/hi/baby-names` | Curated name meanings | P1 | Yes |
| WEB-025 | `/hi/poster` | Poster composer | P2 | No |
| WEB-026 | `/hi/community` | Community introduction | P2 | As approved |
| WEB-027 | `/hi/ask` | Source-grounded AI | Later | Noindex chat outputs |
| WEB-028 | `/hi/account/*` | Profile/preferences/history | P1 | No |

**Canonical URL policy:** every language page self-canonicalizes and uses valid `hreflang` alternate links only where translations exist. No templated empty English pages. Sitemap contains **only approved published indexable URLs**.

---

## 8. Detailed public-page requirements and acceptance criteria

### WEB-001 Home (P0)
**Sections:** hero `शिव ज्ञान से साधना तक`, featured reviewed mantra, three knowledge pathways (meaning, stories, pilgrimage), a curated daily item, search, source-trust strip, optional practice CTA, footer and app CTA. **No misleading live metrics.**  
**States:** SSR initial content, loading for optional personalized widgets, missing daily item, no JS, offline cached and errors.  
**Accept:** core content visible without JS; navigation works using semantic links; no forced login; CMS controls featured slots; visible reviewer/source cues on promoted pages.

### WEB-002 Multilingual search and discovery (P0)
**Features:** Devanagari/Latin query input, aliases and known transliterations; filters by content type, language and source; empty state; typo suggestions; server search API; keyboard and screen-reader support.  
**Out of scope R1:** fully generative answers.  
**Accept:** benchmark queries such as `om namah shivay`, `ॐ नमः शिवाय`, and common spelling variants resolve to reviewed relevant content; private/unpublished records are never returned; query is safely escaped and rate limited.

### WEB-003/004 Mantra library and detail (P0)
**Required fields:** title, Sanskrit/Devanagari form, transliteration, original-language text if applicable, Hindi meaning, optional English meaning, pronunciation, tradition context, benefits phrased as traditional beliefs where applicable, source citations with exact locator and edition, authorship/review date, rights/licensing, related names/stories and Jap CTA.  
**Accept:** the original and interpretation are visually distinct; missing source is disclosed; no invented verse references; audio has rights metadata; a related Jap action preserves mantra ID and language.

### WEB-005/006 Shiva names dictionary (P0)
**Features:** indexed 108 names first; expand toward 1008 only when content source and editorial staffing permit; search, alternate names/transliterations, meaning, reference if known, related mantra; filter by letter.  
**Accept:** every name has a stable ID; no duplicate slug; uncertain etymologies marked as interpretation; batch imports create unpublished drafts, not live pages.

### WEB-007/008 Shiv Charcha (P0)
**Features:** curated topic pages, regional variation labels, preparation/read-aloud guidance, tradition notes and related Katha. Do not present moderated community chat as part of this feature in R1.  
**Accept:** titles and explanatory text reviewed; “practice guidance” is clearly described as one tradition rather than mandatory universal prescription.

### WEB-009/010 Katha library (P0)
**Features:** original/retelling classification, section headings, narration if licensed, citation references, related themes and reading time.  
**Accept:** adaptations are labeled; original scriptures are not impersonated; any quote is licensed/public-domain or appropriately limited and attributed.

### WEB-011/012 Jyotirlinga (P0)
**Features:** directory and individual temple pages: religious significance, tradition/source, location, accessibility, important visitor notes, publisher/review dates, official-source links.  
**Accept:** clearly separate historical/traditional claims from volatile operational facts; no promises on queue times/entry availability; stale operational info displays dated warnings or is hidden.

### WEB-013/014 Panch Kedar (P0)
**Features:** route context, trek difficulty disclaimers, seasons, permissions and official verification links, map embeds only if appropriately supported, safety note and last review date.  
**Accept:** guide has checked-at timestamps and source links; high-risk/seasonal details have a staleness policy; no invented live road/weather status.

### WEB-015–018 Trust, sources, policies and support (P0)
**Features:** editorial policy, who reviews, corrections process, AI disclosure, privacy, account export/deletion route, user support, content reports.  
**Accept:** every report receives an opaque tracking ID; no hidden fabricated reviewers; privacy controls are actually implementable via NestJS API.

### WEB-019 Basic web Jap (P1 and scope-gated)
**Features:** guest local counter, optional target, tactile feedback when supported, completion, persistent local state, undo, foreground sync if account linking becomes approved.  
**Accept:** taps are never blocked by network; count can exceed target where mobile PRD permits; no duplicate session on replay; conflict policy tested; Safari/iOS close/reopen tested.  
**Critical:** do not release until guest-to-account claim, sync idempotency, and data-retention specifications are agreed with backend/Flutter teams.

### WEB-020 Bookmarks (P1)
Guest bookmarks local only; authenticated bookmarks live on shared NestJS API. Merge policy is explicit and user-visible. Account deletion removes server records in accordance with approved retention policy.

### WEB-021 Calendar (P1)
Verified locale/convention and date-specific details; location-specific timing provider identified; source confidence and last-updated date shown; incorrect-date correction path. Avoid generating tithi with an LLM.

### WEB-022 Audio (P1)
Licensed playback, transcripts where reviewed, playback speed, browser audio controls, streaming from R2/CDN, descriptive fallback. Offline downloads deferred until licensing and storage quotas are defined.

### WEB-023/024 Rudraksha, Bhasma and baby names (P1)
Educational framing, sources, non-medical claims, curation and moderation for sensitive naming/health assertions. No health benefit guarantees.

### WEB-025 Poster (P2)
Template-based original quote/poster creation with explicitly verified source lines; user-image handling with privacy and rights checks; client-side composition where possible; abuse prevention.

### WEB-026 Community (P2)
Moderation, blocking/reporting, rate limits, consent, minimum-age handling and escalation procedures must exist before release. Do not ship unmoderated peer-to-peer groups.

### WEB-027 AI assistant (Later)
Online-only questions answered from approved corpus with real citations, tradition differences, verified abstention and privacy-aware conversation history. No autonomous claim to spiritual authority. Release gated on RAG evaluation suite.

---

## 9. CMS product requirements

### 9.1 CMS personas / permissions
| Role | Draft | Edit draft | Review | Approve | Publish | Users/roles | Audit |
|---|---|---|---|---|---|---|---|
| Contributor | Own | Own | No | No | No | No | Own |
| Editor | Yes | Editorial | Submit | No | No | No | Limited |
| Religious reviewer | Review notes | Requested correction | Religion | No | No | No | Relevant |
| Publisher | Yes | Yes | View | Yes | Yes | No | Relevant |
| Super admin | Admin | Admin | Override with reason | Override with reason | Yes | Yes | Full |

Roles are policy templates; enforce permissions in NestJS for **each request and resource**. Prevent approving one's own draft where independence is required; all exceptions need reason-coded audit entries.

### 9.2 Admin screen inventory
| ID | `/admin` route | Purpose | P |
|---|---|---|---|
| CMS-001 | `/admin/login` | Secure login | P0 |
| CMS-002 | `/admin` | Editorial dashboard, queues, warnings | P0 |
| CMS-003 | `/admin/content` | Filtered drafts/published records | P0 |
| CMS-004 | `/admin/content/new` | Choose content type | P0 |
| CMS-005 | `/admin/content/:id/edit` | Language-specific structured editor | P0 |
| CMS-006 | `/admin/review` | Review queue | P0 |
| CMS-007 | `/admin/review/:id` | Source-by-source review | P0 |
| CMS-008 | `/admin/media` | Media library, licenses, uploads | P0 |
| CMS-009 | `/admin/sources` | Canonical references/editions | P0 |
| CMS-010 | `/admin/seo` | Titles, snippets, redirects, canonical | P0 |
| CMS-011 | `/admin/publishing` | Scheduling, preview, rollout | P0 |
| CMS-012 | `/admin/audit` | Immutable editorial actions | P0 |
| CMS-013 | `/admin/reports` | Corrections/complaints | P0 |
| CMS-014 | `/admin/users` | Staff invites, roles, deactivation | P0 |
| CMS-015 | `/admin/settings` | Feature flags, branding and navigation | P1 |
| CMS-016 | `/admin/ai/jobs` | Ingestion status and failures | P1 |
| CMS-017 | `/admin/ai/evals` | Retrieval/generation evaluation | Later |
| CMS-018 | `/admin/analytics` | Search, traffic and article utility | P1 |

### 9.3 Editorial state machine
`DRAFT → EDITORIAL_REVIEW → RELIGIOUS_REVIEW → APPROVED → SCHEDULED/PUBLISHED → ARCHIVED`; `CHANGES_REQUESTED` is a return path; `UNPUBLISHED` is an urgent safety state. State transitions are explicit API operations checked against role, ownership, prerequisite review and current revision.

### 9.4 Publication prerequisites
- Exact content type and locale; unique slug; title and full article body.
- Rights ownership, license or attribution for text/audio/image; source edition if quoted.
- At least one reviewer approval for factual/ritual explanations; separate review for sensitive topics.
- Sources have provenance and passage/edition/page/URL locator as applicable.
- SEO summary, metadata and accessibility text; broken link check; spam and duplicate review.
- For temple/calendar, `checked_at` and `review_due_at` timestamps.
- On publish: immutable published snapshot, audit entry, search reindex job, cache invalidation, sitemap update and optional AI indexing job. Failures must be retryable and observable.

### 9.5 Correction / rollback
**Urgent unpublish** must invalidate web cache and search results where possible and prevent newly generated RAG answers from citing the withdrawn version. A published revision remains audit-traceable but not public. Purge CDN cache where configured; handle delayed crawler reindexing transparently. Maintain revision history and source link change log.

### 9.6 Security policies
MFA for publishers/admins; rate limiting, session expiration, CSRF defense for browser credential mode, audit logging, secure secrets, signed media uploads, malware/media validation, image proxy safety, server-side RBAC, strict Content Security Policy, noindex private routes, protection against preview token replay, and separation of draft vs published CDN cache keys.

---

## 10. PWA scope and technical contract

**MVP PWA:** web manifest, installability, minimal shell caching, offline fallback, and opt-in caching of selected approved public articles. Do not try to match Flutter features immediately.

| Resource | Strategy | Constraints |
|---|---|---|
| JS/CSS app assets | Precache versioned static bundles | Invalidate on deploy |
| Approved static articles | Stale-while-revalidate or network-first as appropriate | Cap count and storage; expose saved timestamp |
| Public thumbnails | Bounded cache | Respect rights and device storage |
| Unpublished drafts/CMS | **Never cache offline** | Online-only and no-store |
| Authenticated API | Network only | No shared cache; protect response headers |
| Account, bookmarks and Jap | P1 explicit local stores only | No background-sync assumptions; foreground retry |
| AI chat | Network only | Display clear unavailable state offline |

**Cross-browser behavior:** test Chrome Android, Safari iOS standalone mode and desktop. Background Sync support is not guaranteed; foreground recovery and explicit status are mandatory. Handle storage eviction and offline navigation failures.

**Offline content invalidation:** when a public page is unpublished for safety/copyright, purge online caches immediately; offline devices must receive a withdrawal on their next successful reconnection. Explain that offline cached content may remain until the device reconnects; do not promise remote deletion of unreachable devices.

---

## 11. Frontend UI and brand-system specification

### Responsive breakpoints
Mobile-first 320–767 px; tablet 768–1023 px; desktop ≥1024 px. The CMS primarily targets ≥1024 px while remaining usable for urgent review on mobile where feasible. Minimum touch targets 44 × 44 CSS px where practical, accessible focus indicators and keyboard alternatives.

### Component library
Header, bottom navigation for PWA utility, hero, search combobox, content-card grid, source-reference drawer, reviewer badge with real metadata, related-content rails, audio mini-player, save action, install education prompt, share dialog, rich-text editor, review comparison, media picker, approval modal and toasts.

### Content page template
1. Title and content type → 2. Original scripture/term (when applicable) → 3. Pronunciation/transliteration → 4. Plain-language meaning → 5. Tradition/source context → 6. Source references with actual locators → 7. Optional practice CTA → 8. Related reviewed items → 9. Author/reviewer/update metadata → 10. Correction report.

### Accessibility
Use semantic HTML, per-locale `lang`, appropriate `dir`, Devanagari-optimized fonts, sufficient contrast, audio transcripts, reduced-motion options, accessible Jap controls, announcements for async status, and WCAG 2.2 AA as an engineering target.

---

## 12. SEO and content distribution

### SEO architecture
- Next.js App Router server-rendered and incrementally regenerated public pages; no JS requirement for content visibility.
- Separate `/hi` and `/en` URLs, reciprocal `hreflang` only for actually translated pages.
- Metadata title/description, canonical, Open Graph and valid Article/BreadcrumbList schema where appropriate; do not add misleading FAQ/rating markup.
- XML sitemap generated from **published, approved, indexable** records; `robots.txt` protects uninteresting routes but is *not* a security control.
- 301 redirects on slug changes; zero 404s for canonical internal links; pagination and category consolidation.
- Review content performance with Search Console; editorial corrections outrank content-volume targets.
- Do not build hundreds of machine-generated near-duplicate pages simply to rank.

### Initial editorial clusters (proposed, not verified keywords)
1. **Mantra meaning:** Maha Mrityunjaya, Om Namah Shivaya, Panchakshari, Shiva Tandava context.
2. **Names and meanings:** curated 108 names, transliteration variations and sources.
3. **Katha/Charcha:** Shiva-Parvati narratives, specific topics, tradition differences.
4. **Pilgrimage:** 12 Jyotirlinga and Panch Kedar with genuinely useful verification links.

### Initial publication inventory
Plan **20–30 carefully reviewed cornerstone pages** plus required index and legal pages for the beta. Scale only when editorial review capacity exists. A larger corpus is not inherently better.

### Discovery/retention strategy
Search/short educational videos → canonical explanation page → useful action (pronunciation / save / start Jap) → voluntary PWA install or Flutter app download. Shareable links carry appropriate metadata; track only privacy-respecting events. Test app-download CTAs, don't overwhelm public pages.

---

## 13. API and backend integration

**NestJS is the only business backend.** Next.js server components may act as a presentation/BFF layer for secure cookie handling, but must not own content publishing logic or direct DB writes.

**Existing API contract (from prior backend PRD, subject to formal re-baselining after PostgreSQL migration):**
- `GET /api/v1/home`, `/search`, `/search/suggest`, `/mantras`, `/mantras/:slug`, `/shiva-names`, `/shiva-names/:id`, `/charcha`, `/stories`, `/temples`, `/treks`.
- `GET/PATCH /api/v1/me`, `/me/preferences`, `/me/bookmarks`, `PUT/DELETE /me/bookmarks/:type/:id`.
- `POST /api/v1/jap/sessions`, `GET /jap/sessions`, `/jap/summary`, `POST /jap/sync` **only if web Jap releases**.
- Auth request/verify/refresh/logout/logout-all per final identity decision.
- CMS admin routes require new granular endpoints for worklist, version history, review transitions, media metadata, source registry, publishing, unpublish, audit and corrections; these must be specified in OpenAPI before implementation.

**Cross-client invariants:** stable content IDs and slugs, published content-version IDs, locale and permission-aware DTOs, no public draft serialization, UUID client session idempotency, timestamp timezone strategy, source citation IDs, ETags/content revalidation events. Generate a TypeScript client for Next.js and a Dart client for Flutter from OpenAPI.

**Web-only PWA local sync:** only after consent and backend guest-migration contract. Do not silently merge local Jap histories across devices.

---

## 14. Content schema and provenance

**Canonical content tables (illustrative entities, not full migration SQL):** `content_items`, `content_localizations`, `content_versions`, `content_sections`, `source_references`, `citation_links`, `review_events`, `publication_events`, `correction_reports`, `media_assets`, `media_licenses`, `redirects`, `seo_metadata`, `audit_events`, `feature_flags`.

**Key content fields:** stable UUID; type; locale; status; display title; slug; short summary; text/body blocks; mantra original text; transliteration; traditions; source IDs; author/editor/reviewer; creation and review dates; published_version_id; `checked_at`/`review_due_at` for volatile facts; licensing; primary image/audio object keys; accessibility metadata.

**Version model:** immutable version records; one currently published version per locale, conditional publishing with optimistic locking, rollback through new publication event, reindex only approved text. In the future, AI `document_chunks` reference canonical `content_version_id` and source citation IDs so a stale version can be excluded from retrieval immediately.

**Data separation:** draft/review data only authenticated and authorized; user memories and Sankalp details must never enter public search indexes; passwords/secret tokens must never enter AI prompts, traces or analytics.

---

## 15. AI/RAG/Evals readiness

### R1 content pipeline (no live chatbot)
1. Editor creates a source-backed article → 2. reviewers approve → 3. NestJS publishes immutable version → 4. job saved in PostgreSQL → 5. Python worker extracts and normalizes approved text → 6. embedding/indexing stores vector metadata under approved version → 7. evaluators run regression questions → 8. version becomes AI-retrievable only when policy permits.

### Later RAG flow
User question → NestJS auth and scope → internal FastAPI → Hindi/English normalization and alias search → hybrid keyword + vector retrieval → source/version filters → optional rerank → grounding prompt → answer with *resolved* citation IDs → NestJS returns content-safe response. If insufficient evidence, abstain and link relevant verified material.

### Evaluation dataset and release gate
Curate 200–300 cases across literal mantra text, meaning, sources, Hindi/Hinglish/English variants, differing traditions, unanswerable questions, prompt injection, stale Yatra guidance and multi-turn context. Track Recall@k, precision, cited-document validity, faithfulness, abstention, latency and token cost. Thresholds are **proposed hypotheses**, not measured capabilities; require expert/human review before production.

### Memory
- **Knowledge memory:** approved content and source versions, shared.
- **Conversation memory:** owner-scoped conversation turns and optional short summaries, time-limited.
- **Explicit user memory:** opt-in saved language and content preferences only, with view/edit/delete controls.
- **Never auto-ingest** private Sankalp, religious belief inferences or sensitive disclosures into long-term personalization.

---

## 16. Security, privacy and trust

- Guest-first reading. Require auth only where durable cross-device state is necessary.
- Cookies HttpOnly/Secure/SameSite according to app design; CSRF protection when applicable; short-lived sessions; MFA for privileged CMS roles.
- Authorization checks in NestJS for each action; prevent IDOR and cross-tenant/user leaks.
- Separate public and admin cache behaviors; `no-store` for sensitive endpoints; no draft content in static builds.
- R2 upload through signed URLs, server-verified MIME/size/hash/ownership and malware scanning appropriate to file types.
- Public report-correction form with anti-abuse controls, tracking, processing SLA and a visible changes log where appropriate.
- Rate-limit login, search, uploads and AI; prevent SEO crawler abuse without unnecessarily blocking legitimate indexing.
- Retention and deletion policy specified before account launch; restore-tested DB/media backups; auditable staff events.
- Privacy-conscious analytics, explicit cookie/consent implementation when required, no unnecessary IP/raw chat retention.
- Travel details carry last-checked dates; no implication of real-time safety. Panchang calculations use approved source/convention, not LLM guesses.

---

## 17. Technical stack and monorepo structure

| Layer | Decision | Reason |
|---|---|---|
| Web + CMS + PWA | Next.js App Router, React, TypeScript | SEO and one application |
| Styling | Tailwind CSS + accessible component primitives | Design consistency and delivery speed |
| Forms | React Hook Form + Zod | Structured CMS validation |
| Server state | Native server fetch/Next.js caching first; TanStack Query only where necessary | Avoid excess client complexity |
| Editor | TipTap or comparable schema-capable rich text editor | Controlled blocks, sources, multilingual fields |
| Public content/API | Shared NestJS REST/OpenAPI | No duplicate business backend |
| Core backend | NestJS modular monolith | Auth, domain logic, publishing, audit |
| DB | Managed PostgreSQL; pgvector later | Relational records and AI metadata |
| Storage | Cloudflare R2 + CDN | Signed uploads, audio, images |
| AI jobs | Python/Pydantic + pytest, batch/on demand | RAG ingestion and Evals |
| Error reporting | Sentry or equivalent | Runtime visibility |
| SEO telemetry | Search Console + privacy-respecting events | Discovery and usefulness |
| Deployment | One Next.js deployment, one NestJS API deployment, managed DB/R2 | Contained fixed costs |

```text
shivsadhana/                     # internal repository codename until clearance
├── apps/
│   ├── web/                     # Next.js public + admin + PWA
│   │   ├── app/[locale]/
│   │   │   ├── (public)/
│   │   │   ├── (account)/
│   │   │   └── admin/
│   │   ├── features/{mantras,names,katha,yatra,search,cms,pwa}/
│   │   ├── components/{ui,content,admin}/
│   │   ├── lib/{api,auth,seo,i18n}/
│   │   ├── manifest.ts
│   │   └── public/sw.js
│   ├── mobile/                  # separate Flutter app
│   └── api/                     # NestJS modular monolith
├── services/ai-engine/          # Python: ingestion, evaluation, later FastAPI
├── packages/api-contracts/     # OpenAPI generated clients/contracts
├── infrastructure/{docker,deploy,backups}/
└── docs/{prd,architecture,design,security}/
```

**Deployment caveat:** one Next.js *codebase/deployment* does not mean all website pages are PWA-cached or all admin APIs are public. Keep request-level isolation and distinct layout/runtime behavior.

---

## 18. Screen-by-screen CMS workflows

### CMS-002 Dashboard
Queue by status and severity; source verification deadlines; scheduled releases; failed reindex/caching jobs; open correction reports; role-restricted actions. **Accept:** no cross-role data leaks, bad counters fall back safely.

### CMS-005 Content editor
Content-type-driven fields; autosave draft; editor locks/optimistic conflict handling; original scripture plus translation separated; inline source/edition selection; alternate-language tabs; preview; accessibility warnings; submit for review. **Accept:** invalid source fields prevent submission; simultaneous edit conflict is visible; no publish from contributor role.

### CMS-007 Review screen
Before/after diff, exact scripture citations, reviewer checklist, disagreement notes, request changes, approve to next stage with signing identity. **Accept:** every state transition is audited; unpublished preview token expires.

### CMS-008 Media library
Signed upload, alt text, attribution/license dates, rendition metadata, rights expiry; transcode status. **Accept:** oversized/invalid uploads rejected; public media assets only published after validation.

### CMS-011 Publishing
Scheduled time in explicit timezone, locale selection, destination, approval prerequisites, preview link, rollback/unpublish and status confirmations. **Accept:** idempotent publish; source version pinned; CDN invalidation and indexing retry on failure.

### CMS-013 Correction and reports
Severity, source evidence, impact analysis, assignee, deadline, user-facing correction response. **Accept:** urgent inaccurate content can be hidden immediately from current online output, with offline caveats.

### CMS-017 AI evals (later)
Dataset version, retriever version, model/prompt version, grouped pass/fail scores, citation inspection, regression comparisons and release decision. **Accept:** results reproducible and sanitized; no unredacted personal chats in eval datasets.

---

## 19. Non-functional requirements and launch gates

| Category | Initial target / gate |
|---|---|
| Accessibility | WCAG 2.2 AA design/test target; semantic Hindi/English pages |
| Performance | Core Web Vitals monitored on real devices; establish measured budgets per route; avoid promising fixed 100 Lighthouse |
| Availability | Define hosting SLO after vendor decision; monitor home, content, search and admin health |
| Public SEO | No unpublished indexing; sitemap/canonical/hreflang audit; structured data validated |
| Search correctness | Curated multilingual query set, ≥85% task success target |
| CMS security | Role/ownership tests for every mutation; admin response never publicly cached |
| Publishing | Source-backed review + audit + versioning + emergency unpublish |
| PWA | Installability tested; selective article cache; clear offline fallback; no offline admin |
| Offline sync | Not shipped until idempotency and guest-claim tests pass |
| Data integrity | Schema migrations with rollback plan; restored database/media smoke tested |
| Content rights | No third-party audio/image/publication without rights record |
| AI | No user-facing RAG until groundedness/citation/abstention eval gates pass |
| Privacy | Retention/deletion/export, role access, tracking-consent decisions documented |

---

## 20. Core test scenarios

1. A search visitor can read a complete reviewed Hindi mantra page with blocked JavaScript.
2. `om namah shivay`, Hindi spelling and common Latin variants point to the same approved mantra.
3. Hindi/English pages correctly link with `hreflang`; untranslated English pages do not appear.
4. Contributor cannot publish, approve own record or access another role's queue.
5. Editor attaches scripture passage and edition; reviewer can distinguish original text from interpretation.
6. Published content shows version, reviewer/date and functional source links.
7. Unpublishing content immediately removes it from online API, sitemap and further RAG retrieval; CDN purges retry.
8. PWA reopens selected approved article while offline; status and cache date shown.
9. Offline admin pages are inaccessible and no protected response is in service-worker caches.
10. A media upload cannot publish an unlicensed or invalid asset.
11. Site can be restored from independently held database and R2 inventory/backup records.
12. No claim of live trek/weather status is shown without a verified live feed.
13. Optional web Jap counter continues without network, exceeds target when allowed and does not duplicate synced session.
14. AI question with no supporting passages abstains with clear limitations after feature launch.
15. Brand is not launched until professional clearance, registration checks and user comprehension tests are signed off.

---

## 21. Rollout and delivery sequence

### Sprint 0 — product validation and brand
Competitive audit, naming clearance, user research, priority-ordered page designs, editable brand tokens, editorial team staffing, source/license standards.

### Sprint 1 — foundations
Next.js design system, locales, SEO routes, NestJS contract re-baseline, CMS auth/RBAC, database schema/migrations, signed media policy, CI/CD and staging.

### Sprint 2 — editorial pipeline
Source registry, draft editor, review workflow, publication snapshots, preview, audit and emergency unpublish, caching invalidation.

### Sprint 3 — public knowledge
Home, search, mantra, names, Charcha, Katha, Jyotirlinga and Panch Kedar; 20–30 reviewed cornerstone pages; QA.

### Sprint 4 — PWA and launch readiness
Manifest, selective cache, offline fallback, Search Console/sitemaps, real-device accessibility/performance testing, restore drill, content corrections process.

### Sprint 5 — controlled beta
Small user cohort, search task tests, launch dashboard, content revision loop, app install CTA experiments, security and editorial metrics.

### After validation
Basic web Jap and bookmarks, calendar, audio and more knowledge. AI retrieval internal tests and Evals before public assistant. Community/commerce only if independent demand demonstrated.

---

## 22. Go-to-market and initial operating plan

### Product promise to test
`शिव ज्ञान से साधना तक।` — reviewable source-linked knowledge, calm voluntary Jap and practical pilgrimage learning in one ecosystem.

### Launch content
Prioritize unique explanatory value, not keyword quantity: 8–10 mantra explanations, 5–8 names/meaning clusters, 4–6 Charcha/Katha topics, 4–6 pilgrimage guides, plus editorial policy and trust pages. Counts are illustrative and must align with review capacity.

### Acquisition
- Organic SEO from well-structured Hindi articles and accessible fast pages.
- Short original pronunciation/context clips with source-linked landing pages.
- Faith/community educators and reading-group feedback with permission, not spammy unsolicited sharing.
- Lightweight share cards linking back to the actual sourced page.
- App installation only at useful transitions (repeat practice, offline needs), not aggressive popups.

### Instrumentation
Events: `search_performed`, `search_result_selected`, `source_reference_opened`, `pronunciation_played`, `related_content_opened`, `jap_started`, `jap_completed`, `pwa_install_prompt`, `pwa_installed` where measurable, `app_store_cta_clicked`, `content_report_submitted`. Avoid sending raw private Sankalp to analytics.

### Review cadence
Weekly content-quality review, biweekly UX learnings, monthly SEO technical audit and quarterly trust/privacy review. Stop low-value features if user evidence is weak.

---

## 23. Open decisions and decision owners

| Decision | Recommended default | Owner / gate |
|---|---|---|
| Public brand | ShivAnvaya **provisional only** | Founder + trademark professional before launch |
| Domain | Check `.com`/`.in` at accredited registrar | Founder before DNS/SEO launch |
| App store naming | Master brand if cleared | Founder + app-store review |
| PWA Jap | P1, not MVP | Product + backend + QA |
| Hindi/English parity | Hindi-first; translate cornerstone content selectively | Content lead |
| CMS reviewer availability | Dedicated review assignment per content type | Editorial lead |
| Panchang provider | Only source-verified locale-aware provider | Religious reviewer + backend |
| AI model/embeddings | Select based on eval quality/cost | AI lead |
| RAG memory | Explicit opt-in and deletion | Privacy/product lead |
| Monetization | No ads or paid ritual operations in R1 | Founder after beta research |
| ORM | Compare Drizzle vs Prisma on required queries | Backend lead |
| Hosting vendor | Compare real production features and TCO | Engineering lead |

---

## Appendix A. Prior PRD traceability

The former Website PRD's feature groups are retained or deliberately staged:
- Home/discovery, mantra, names, Charcha, Katha, Jyotirlinga and Panch Kedar → **R1**.
- Calendar, Rudraksha/Bhasma, baby names, audio, poster and local groups → **R1.2/R2** depending on quality/moderation readiness.
- CMS workflows, reviewer rights, source metadata and localization → **R1 blocking foundation**.
- Flutter primary offline Jap/Sankalp and 45 mobile screens → **separate mobile PRD**; web PWA intentionally smaller.
- Prior Node/MongoDB API names may still be used as logical endpoints, but database implementation must be migrated/re-baselined before coding PostgreSQL models.

## Appendix B. Public research sources and limits (accessed 12 November 2026)

1. Existing Shiva app: https://play.google.com/store/apps/details?id=com.bhaktipath.shivsadhana
2. Existing Apple listing: https://apps.apple.com/gb/app/shiv-sadhana-om-namah-shivay/id6773645440
3. Existing `shivsadhana.com`: https://shivsadhana.com/about/
4. ShivBodh Trust: https://shivbodhtrust.org/
5. Official trademark search: https://www.ipindia.gov.in/pages/e-services and https://www.ipindia.gov.in/trade-marks-before-you-apply-search-existing-trademarks
6. Google useful-content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
7. Google multilingual URLs: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
8. Google domain SEO: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
9. Next.js App Router: https://nextjs.org/docs/app
10. Next.js PWA: https://nextjs.org/docs/app/guides/progressive-web-apps

**Research caveat:** Search engine results are not comprehensive, do not determine trademark similarity, and do not confirm live domain registrations, app-name clearance or social availability. No official trademark query result for ShivAnvaya has been certified in this document. No claim of uniqueness or legal ownership is being made.

---

## Appendix C. Launch approval checklist

- [ ] Final name cleared and pronunciation tested
- [ ] Domain, app names and social handles actually acquired/reserved
- [ ] Logo/trademark review complete
- [ ] CMS RBAC + MFA + audit verified
- [ ] Source attribution and rights policy approved
- [ ] 20–30 cornerstone pages reviewed
- [ ] No unpublished/private page indexed or cached
- [ ] Search/transliteration regression suite passes
- [ ] PWA on-device offline tests pass
- [ ] Emergency unpublish and cache invalidation tested
- [ ] Database and media restore rehearsed
- [ ] Privacy, legal and user-reporting pages published
- [ ] Analytics / Search Console / incident monitoring active
- [ ] Launch beta sign-off by editorial, product, engineering and security
