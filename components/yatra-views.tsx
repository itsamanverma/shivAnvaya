import Link from "next/link";
import type { YatraEntry } from "@/lib/yatra";

const pendingNote = "यात्रा-संबंधी विवरण, मौसम और खुलने की स्थिति सत्यापित स्रोत और जाँच की तारीख मिलने पर जोड़े जाएँगे।";

export function YatraIndex({
  basePath,
  title,
  kicker,
  description,
  entries,
}: {
  basePath: string;
  title: string;
  kicker: string;
  description: string;
  entries: YatraEntry[];
}) {
  return (
    <main className="listing-page wrap">
      <span className="section-kicker">{kicker}</span>
      <h1>{title}</h1>
      <p className="listing-intro">{description}</p>
      <div className="name-grid listing-grid">
        {entries.map((entry) => (
          <article className="name-card" key={entry.slug}>
            <div className="name-card-title">
              <div>
                <h2>{entry.name}</h2>
                <p>{entry.romanization}</p>
              </div>
              <span aria-hidden="true">{entry.state.charAt(0)}</span>
            </div>
            <p className="name-pending">{entry.state}</p>
            <Link href={`${basePath}/${entry.slug}`}>विवरण देखें <span aria-hidden="true">→</span></Link>
          </article>
        ))}
      </div>
      <p className="content-note">{pendingNote}</p>
    </main>
  );
}

export function YatraDetail({
  basePath,
  backLabel,
  entry,
}: {
  basePath: string;
  backLabel: string;
  entry: YatraEntry;
}) {
  return (
    <main className="detail-page wrap">
      <Link className="back-link" href={basePath}>← {backLabel}</Link>
      <article className="detail-article">
        <span className="section-kicker">{entry.state}</span>
        <h1>{entry.name}</h1>
        <p className="transliteration">{entry.romanization}</p>
        <section className="editorial-placeholder">
          <h2>समीक्षा की स्थिति</h2>
          <p>यह पृष्ठ अभी प्रकाशित सामग्री नहीं है। धार्मिक संदर्भ, स्थान और स्रोत-लिंक समीक्षा के बाद जोड़े जाएँगे।</p>
        </section>
        <p className="review-status"><span aria-hidden="true">◷</span> {pendingNote}</p>
      </article>
    </main>
  );
}
