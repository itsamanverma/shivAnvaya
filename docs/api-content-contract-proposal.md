# ShivAnvaya Web API and Content Contract (Proposal)

**Status:** Draft for product and NestJS review; not an approved API contract.  
**Scope:** Public Next.js experience and future protected CMS. The NestJS service remains the authority for content, identity, authorization and publication.  
**Related source:** `ShivAnvaya_Brand_Strategy_and_Website_CMS_PWA_PRD_v2.md`, especially §§9, 13–14, 16 and 18.

## 1. Contract principles

- The public web application reads approved content through the NestJS API. It does not query PostgreSQL or write business data directly.
- Stable UUIDs identify content independently of locale and slug. A published content version is immutable; corrections create a later version.
- A public response may contain only a currently published, indexable version. Draft, review notes, private user data and unpublished source records never appear in public DTOs.
- A source citation carries a resolvable source record and locator. A title alone is not evidence of a citation.
- Locale is explicit. An untranslated locale returns `404`; it does not silently serve another language.
- The API returns structured content blocks rather than executable HTML. The web app renders a supported block allowlist.
- Search is retrieval-only in R1. It does not return generated answers.

## 2. Base conventions

| Concern | Proposal |
|---|---|
| Base path | `/api/v1` |
| Content identifiers | UUID strings, stable across localization |
| Locale | BCP 47 language tag, initially `hi`; add `en` only with reviewed translations |
| Time | ISO 8601 UTC timestamps; travel/calendar facts additionally carry `checkedAt` and `reviewDueAt` where applicable |
| Pagination | Opaque `nextCursor`; default page size 20, maximum 100 |
| Cache | Public approved GET responses may use `ETag` and `Cache-Control`; admin/auth responses use `private, no-store` |
| Errors | RFC 9457 `application/problem+json`; do not expose stack traces or internal review notes |

## 3. Public API surface

| Method and path | Purpose | Cache / indexing |
|---|---|---|
| `GET /home?locale=hi` | CMS-selected published homepage slots and featured content IDs | Public cache; homepage indexable |
| `GET /search?q=…&locale=hi&type=…&cursor=…` | Reviewed published results only | Short public cache or no-store; result URLs noindex |
| `GET /search/suggest?q=…&locale=hi` | Alias/transliteration suggestions | Rate-limited; noindex |
| `GET /mantras?locale=hi&cursor=…` | Published mantra index | Public cache; indexable |
| `GET /mantras/{slug}?locale=hi` | Published mantra detail | Public cache; indexable |
| `GET /shiva-names?locale=hi&cursor=…` | Published name index | Public cache; indexable |
| `GET /shiva-names/{slug}?locale=hi` | Published name detail | Public cache; indexable |
| `GET /charcha?locale=hi&cursor=…` | Published topic index | Public cache; indexable |
| `GET /charcha/{slug}?locale=hi` | Published topic detail | Public cache; indexable |
| `GET /stories?locale=hi&cursor=…` | Published Katha index | Public cache; indexable |
| `GET /stories/{slug}?locale=hi` | Published Katha detail | Public cache; indexable |
| `GET /temples?group=jyotirlinga&locale=hi` | Published Jyotirlinga overview/list | Public cache; indexable |
| `GET /temples/{slug}?locale=hi` | Published temple detail | Public cache; indexable; volatile logistics are dated |
| `GET /treks?group=panch-kedar&locale=hi` | Published Panch Kedar overview/list | Public cache; indexable |
| `GET /treks/{slug}?locale=hi` | Published trek/temple detail | Public cache; logistics carry review dates |
| `GET /pages/{slug}?locale=hi` | Approved trust, legal and help pages | Per-page indexing policy |

Routes are proposals based on the PRD's logical endpoint names. NestJS must confirm route names, authorization guards, pagination and response envelopes before clients are generated.

## 4. Public DTO proposal

### Content summary

```json
{
  "id": "uuid",
  "type": "mantra",
  "locale": "hi",
  "slug": "om-namah-shivaya",
  "title": "…",
  "summary": "…",
  "canonicalPath": "/hi/mantras/om-namah-shivaya",
  "publishedVersionId": "uuid",
  "updatedAt": "2026-11-12T12:00:00Z",
  "indexable": true
}
```

### Content detail

```json
{
  "id": "uuid",
  "type": "mantra",
  "locale": "hi",
  "slug": "om-namah-shivaya",
  "title": "…",
  "summary": "…",
  "publishedVersionId": "uuid",
  "sections": [
    { "id": "uuid", "kind": "original_text", "heading": "मूल पाठ", "text": "…" },
    { "id": "uuid", "kind": "transliteration", "heading": "उच्चारण", "text": "…" },
    { "id": "uuid", "kind": "meaning", "heading": "सरल अर्थ", "text": "…" },
    { "id": "uuid", "kind": "tradition_context", "heading": "परंपरा", "text": "…" }
  ],
  "citations": [
    {
      "id": "uuid",
      "sourceId": "uuid",
      "sourceTitle": "…",
      "sourceType": "scripture",
      "edition": "…",
      "locator": "…",
      "url": null,
      "accessedAt": null
    }
  ],
  "editorial": {
    "authorDisplayName": "…",
    "reviewerDisplayName": "…",
    "reviewedAt": "2026-11-12T12:00:00Z",
    "interpretationNote": null
  },
  "related": [],
  "seo": {
    "title": "…",
    "description": "…",
    "canonicalPath": "/hi/mantras/om-namah-shivaya",
    "indexable": true,
    "alternateLocales": []
  }
}
```

`kind` is a versioned allowlist, not an arbitrary component name. Missing citation details remain `null` and must not be fabricated. Reviewer fields may be omitted from public output if the editorial policy decides to identify reviewers by role only.

### Search response

```json
{
  "query": "om namah shivay",
  "locale": "hi",
  "items": [
    {
      "content": { "id": "uuid", "type": "mantra", "locale": "hi", "slug": "…", "title": "…", "summary": "…", "canonicalPath": "…", "publishedVersionId": "uuid", "updatedAt": "…", "indexable": true },
      "matchedAlias": "om namah shivay",
      "matchType": "transliteration"
    }
  ],
  "nextCursor": null
}
```

Search must normalize Devanagari and known transliteration variants, apply locale and publication filters before ranking, escape user input, and rate-limit requests. `matchedAlias` is optional and should be returned only when useful to explain the match.

## 5. CMS API surface requiring OpenAPI review

All routes below require authenticated sessions, role checks in NestJS, audit events, and `Cache-Control: private, no-store`. These names are placeholders until the backend team aligns them with existing conventions.

- `GET /admin/worklist?status=&type=&cursor=` — role-filtered editorial queue.
- `POST /admin/content` and `PATCH /admin/content/{id}` — create/update draft only; optimistic concurrency via `If-Match` or explicit revision token.
- `GET /admin/content/{id}/versions` — authorized version history and diffs.
- `POST /admin/content/{id}/submit-review` — contributor transition with validation.
- `POST /admin/content/{id}/review` — reviewer decision (`approve`, `request_changes`, or `reject`) with required note where applicable.
- `POST /admin/content/{id}/publish` — editor/admin publish or schedule, pinned to an approved version and locale.
- `POST /admin/content/{id}/unpublish` — urgent hide with reason, idempotency key and cache/index invalidation state.
- `GET|POST /admin/sources` and `PATCH /admin/sources/{id}` — source registry and source metadata.
- `POST /admin/media/upload-intents` — signed upload intent; server validates ownership, type, size and license before publication.
- `POST /corrections` — public correction intake with anti-abuse controls; must not reveal whether a private case exists.
- `PATCH /admin/corrections/{id}` — restricted case handling, assignment and resolution; never return internal notes publicly.
- `GET /admin/audit?entityId=` — restricted immutable audit history.

The API must enforce separation of duties: contributors cannot publish or approve their own changes; reviewers cannot bypass required review; every transition records actor, timestamp, prior state and next state.

## 6. Publication state and cache invariants

1. Public endpoints resolve only `publishedVersionId` for the requested locale.
2. Draft, review, scheduled and unpublished records return `404` from public content routes, including when the caller guesses an ID or slug.
3. Publish is conditional on the current approved revision; stale revision attempts return `409` with a safe conflict problem detail.
4. Unpublish removes the content from public API results, sitemaps, related-content lists and future retrieval indexes. CDN invalidation can retry, but the API must stop serving the version immediately.
5. A slug change creates/updates a redirect record. The server returns canonical path metadata; the web app does not invent a redirect target.
6. Public cache keys include locale, content ID/version and publication state. Admin/auth responses are never shared-cacheable.
7. PWA cache policy is a separate allowlist; API headers alone do not authorize caching a response in the service worker.

## 7. Error envelope proposal

```json
{
  "type": "about:blank",
  "title": "Conflict",
  "status": 409,
  "detail": "The content changed since it was opened.",
  "code": "CONTENT_REVISION_CONFLICT",
  "requestId": "…"
}
```

Do not include stack traces, credentials, draft text, private correction details or internal source review discussion in public error responses.

## 8. Decisions needed before code generation

- Confirm API base URL and whether the NestJS service already has a versioned OpenAPI document.
- Confirm auth/session model for CMS, MFA policy and role names.
- Confirm exact state machine and role-to-transition matrix from PRD §9.
- Confirm citation/source fields, public reviewer attribution and licensing requirements with editorial owners.
- Confirm locale fallback policy (proposal: no fallback for missing translation).
- Confirm pagination, filters, sorting and error conventions against existing backend conventions.
- Agree cache invalidation signaling for Next.js and CDN; agree service-worker cache allowlist separately.
- Review this proposal with backend, product and editorial owners, then publish generated TypeScript/Dart clients from the approved OpenAPI contract.
