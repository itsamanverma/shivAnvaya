import type { Metadata } from "next";
import Link from "next/link";
import { searchCatalog } from "@/lib/search";

export const metadata: Metadata = {
  title: "खोजें",
  robots: { index: false, follow: true },
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const query = q.trim().slice(0, 100);
  const results = searchCatalog(query);

  return <main className="listing-page wrap">
    <span className="section-kicker">ज्ञान संग्रह</span><h1>खोजें</h1>
    <form action="/hi/search" className="search-form search-page-form" role="search">
      <label className="visually-hidden" htmlFor="search-query">खोज शब्द</label><span aria-hidden="true">⌕</span>
      <input id="search-query" name="q" defaultValue={query} placeholder="मंत्र, नाम, कथा या तीर्थ खोजें…" />
      <button type="submit">खोजें</button>
    </form>
    {query ? <><p className="listing-intro">“{query}” के लिए {results.length} परिणाम</p>
      {results.length ? <div className="mantra-grid listing-grid">{results.map((item) => <article className="mantra-card" key={item.href}>
        <span className="mantra-label">{item.type}</span><h2>{item.title}</h2><p>{item.excerpt}</p><Link href={item.href}>परिचय देखें <span aria-hidden="true">→</span></Link>
      </article>)}</div> : <p className="empty-state">इस शुरुआती नमूने में कोई मेल खाता परिणाम नहीं मिला। खोज को छोटा करके फिर प्रयास करें।</p>}
    </> : <p className="listing-intro">शुरुआत के लिए कोई विषय लिखें, जैसे “ॐ नमः शिवाय”।</p>}
    <p className="content-note">यह खोज अभी केवल इस इंटरफ़ेस नमूने में शामिल मंत्रों और शिव नामों तक सीमित है। पूर्ण खोज NestJS API और स्वीकृत सामग्री से जुड़ेगी।</p>
  </main>;
}
