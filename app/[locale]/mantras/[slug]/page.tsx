import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredMantras } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featuredMantras.map(({ href }) => ({ slug: href.split("/").at(-1)! }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mantra = featuredMantras.find((item) => item.href.endsWith(`/${slug}`));
  return {
    title: mantra?.title ?? "मंत्र",
    robots: { index: false, follow: true },
  };
}

export default async function MantraDetailPage({ params }: Props) {
  const { slug } = await params;
  const mantra = featuredMantras.find((item) => item.href.endsWith(`/${slug}`));
  if (!mantra) notFound();

  return <main className="detail-page wrap">
    <Link className="back-link" href="/hi/mantras">← मंत्र संग्रह</Link>
    <article className="detail-article">
      <span className="section-kicker">{mantra.label} · परिचय</span><h1>{mantra.title}</h1><p className="transliteration">{mantra.transliteration}</p>
      {mantra.verse ? (
        <div className="mantra-verse">॥ {mantra.verse} ॥</div>
      ) : (
        <div className="mantra-verse editorial-placeholder">मूल पाठ की संपादकीय समीक्षा के बाद यहाँ दिखाया जाएगा।</div>
      )}
      <section><h2>सरल अर्थ</h2><p>{mantra.meaning}</p></section>
      <section className="editorial-placeholder"><h2>परंपरा और स्रोत</h2><p>इस मंत्र के पाठ, परंपरा और सटीक संदर्भ की संपादकीय समीक्षा जारी है। सत्यापित स्रोत जुड़ने तक यहाँ कोई शास्त्रीय उद्धरण या निश्चित दावा नहीं जोड़ा गया है।</p></section>
      <p className="review-status"><span aria-hidden="true">◷</span> समीक्षा लंबित · यह पृष्ठ अभी प्रकाशित सामग्री नहीं है</p>
      <Link className="button button-primary" href="/hi/mantras">अन्य मंत्र देखें</Link>
    </article>
  </main>;
}
