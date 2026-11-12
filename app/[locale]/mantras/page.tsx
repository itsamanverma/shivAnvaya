import type { Metadata } from "next";
import Link from "next/link";
import { featuredMantras } from "@/lib/content";

export const metadata: Metadata = {
  title: "शिव मंत्र संग्रह",
  description: "शिव मंत्रों के पाठ, उच्चारण, अर्थ और संदर्भ को स्रोतों सहित समझें।",
  robots: { index: false, follow: true },
};

export default function MantrasPage() {
  return <main className="listing-page wrap">
    <span className="section-kicker">ज्ञान संग्रह · मंत्र</span><h1>शिव मंत्र</h1>
    <p className="listing-intro">मंत्र के मूल पाठ, उच्चारण, अर्थ और परंपरा को अलग-अलग समझें। सामग्री स्रोत समीक्षा के बाद प्रकाशित होगी।</p>
    <div className="mantra-grid listing-grid">{featuredMantras.map((mantra) => <article className="mantra-card" key={mantra.href}>
      <span className="mantra-label">{mantra.label}</span><h2>{mantra.title}</h2><p className="transliteration">{mantra.transliteration}</p><p>{mantra.meaning}</p>
      <Link href={mantra.href}>अर्थ और संदर्भ पढ़ें <span aria-hidden="true">→</span></Link>
    </article>)}</div>
  </main>;
}
