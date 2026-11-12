import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { shivaNames } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return shivaNames.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = shivaNames.find((item) => item.slug === slug);
  return {
    title: entry?.name ?? "शिव नाम",
    robots: { index: false, follow: true },
  };
}

export default async function ShivaNameDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = shivaNames.find((item) => item.slug === slug);
  if (!entry) notFound();

  return <main className="detail-page wrap">
    <nav className="breadcrumbs" aria-label="ब्रेडक्रम्ब"><Link href="/hi">होम</Link><span aria-hidden="true">/</span><Link href="/hi/shiva-names">शिव नाम</Link><span aria-hidden="true">/</span><span>{entry.name}</span></nav>
    <article className="detail-article name-detail">
      <span className="section-kicker">शिव नाम · प्रविष्टि</span>
      <h1>{entry.name}</h1>
      <p className="transliteration">{entry.romanization}</p>
      <div className="name-detail-summary"><span aria-hidden="true">ॐ</span><p>इस नाम का अर्थ और परंपरा संबंधी विवरण स्रोत-समीक्षा पूरी होने पर यहाँ जोड़ा जाएगा।</p></div>
      <section><h2>अर्थ और प्रयोग</h2><p>इस नमूना पृष्ठ पर अर्थ या व्युत्पत्ति का दावा नहीं किया गया है।</p></section>
      <section className="editorial-placeholder"><h2>स्रोत और परंपरा</h2><p>समीक्षा लंबित। प्रकाशित रूप में स्रोत, संस्करण और सटीक locator शामिल होंगे; विभिन्न परंपराओं में भेद होने पर उन्हें अलग से स्पष्ट किया जाएगा।</p></section>
      <p className="review-status"><span aria-hidden="true">◷</span> संपादकीय समीक्षा लंबित · यह पृष्ठ अनुक्रमण के लिए उपलब्ध नहीं है</p>
      <Link className="button button-primary" href="/hi/shiva-names">शिव नाम सूची पर लौटें</Link>
    </article>
  </main>;
}
