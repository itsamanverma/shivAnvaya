import { featuredMantras, shivaNames } from "@/lib/content";

export type SearchResult = {
  title: string;
  type: string;
  excerpt: string;
  href: string;
};

/**
 * Normalizes a query or indexed text for matching:
 * - lowercases (Latin) and applies Unicode NFD so Latin diacritics (ā, ś, ṃ, ṇ) become plain letters,
 * - strips Latin combining marks and the Devanagari nukta (़) so ड़ and ड match,
 * - maps Devanagari danda/double-danda and ASCII punctuation to spaces,
 * - collapses whitespace.
 * Devanagari vowel signs and virama are kept so Devanagari queries still match Devanagari text.
 */
export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-़ͯ]/g, "")
    .toLocaleLowerCase("hi-IN")
    .replace(/[।॥\-_.,;:!?'"()[\]{}/\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

type Entry = SearchResult & { haystack: string };

const index: Entry[] = [
  ...featuredMantras.map((item) => ({
    title: item.title,
    type: item.label,
    excerpt: item.meaning,
    href: item.href,
    haystack: normalizeSearchText(
      [item.title, item.transliteration, item.meaning, item.label, ...item.aliases].join(" "),
    ),
  })),
  ...shivaNames.map((item) => ({
    title: item.name,
    type: "शिव नाम",
    excerpt: item.note,
    href: item.href,
    haystack: normalizeSearchText([item.name, item.romanization, ...item.aliases].join(" ")),
  })),
];

/**
 * Returns entries whose normalized text contains every query token.
 * Token-based matching lets "om namah shivay" and "ॐ नमः शिवाय" reach the same entry
 * without requiring exact phrase order. Results are ordered by number of matched tokens
 * found in the title, so title hits rank first.
 */
export function searchCatalog(query: string): SearchResult[] {
  const tokens = normalizeSearchText(query).split(" ").filter(Boolean);
  if (tokens.length === 0) return [];

  return index
    .filter((entry) => tokens.every((token) => entry.haystack.includes(token)))
    .map((entry) => ({
      entry,
      titleHits: tokens.filter((token) => normalizeSearchText(entry.title).includes(token)).length,
    }))
    .sort((a, b) => b.titleHits - a.titleHits)
    .map(({ entry }) => ({ title: entry.title, type: entry.type, excerpt: entry.excerpt, href: entry.href }));
}
