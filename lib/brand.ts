/** Centralized while the ShivAnvaya name is pending formal clearance. */
export const brand = {
  name: "ShivAnvaya",
  devanagari: "शिवान्वय",
  provisional: true,
  tagline: "शिव ज्ञान से साधना तक।",
  description:
    "शिव पर स्रोतों सहित ज्ञान, मंत्रों के अर्थ और शांत, स्वैच्छिक साधना का साथी।",
  defaultLocale: "hi",
  // Add a locale here only when translated, reviewed pages exist for it.
  locales: ["hi"] as const,
  // Domain is not cleared (PRD §2.3). Set NEXT_PUBLIC_SITE_URL at deploy time; the fallback is local only.
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
};
