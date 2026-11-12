import type { Metadata } from "next";
import Link from "next/link";
import { shivaNames } from "@/lib/content";

export const metadata: Metadata = {
  title: "शिव नाम",
  description: "शिव नामों की नमूना सूची — अर्थ और संदर्भ समीक्षा के बाद प्रकाशित होंगे।",
  robots: { index: false, follow: true },
};

const letters = [...new Set(shivaNames.map((item) => item.letter))];

export default function ShivaNamesPage() {
  return <main className="listing-page wrap">
    <nav className="breadcrumbs" aria-label="ब्रेडक्रम्ब"><Link href="/hi">होम</Link><span aria-hidden="true">/</span><span>शिव नाम</span></nav>
    <span className="section-kicker">ज्ञान संग्रह · नाम</span>
    <h1>शिव नाम</h1>
    <p className="listing-intro">शिव के नामों को उनके अर्थ, रूप और परंपरा के साथ समझने का संग्रह। यहाँ दिख रहे नाम केवल इंटरफ़ेस नमूने हैं; अर्थ और स्रोत-संदर्भ संपादकीय समीक्षा के बाद प्रकाशित होंगे।</p>

    <div className="name-index-tools">
      <p><strong>{shivaNames.length}</strong> नमूना प्रविष्टियाँ <span>·</span> १०८ नामों का संग्रह अभी तैयार किया जा रहा है</p>
      <nav className="letter-index" aria-label="वर्ण के अनुसार जाएँ">
        <span>वर्ण चुनें</span>{letters.map((letter) => <a key={letter} href={`#letter-${letter}`} aria-label={`${letter} से शुरू होने वाले नाम`}>{letter}</a>)}
      </nav>
    </div>

    <div className="name-list">
      {letters.map((letter) => <section className="name-group" id={`letter-${letter}`} key={letter} aria-labelledby={`heading-${letter}`}>
        <h2 id={`heading-${letter}`}>{letter}</h2>
        <div className="name-grid">{shivaNames.filter((item) => item.letter === letter).map((item) => <article className="name-card" key={item.id}>
          <div className="name-card-title"><div><h3>{item.name}</h3><p>{item.romanization}</p></div><span aria-hidden="true">ॐ</span></div>
          <p className="name-pending">अर्थ और संदर्भ की समीक्षा लंबित</p>
          <Link href={item.href}>प्रविष्टि देखें <span aria-hidden="true">↗</span></Link>
        </article>)}</div>
      </section>)}
    </div>

    <aside className="editorial-note"><strong>संपादकीय स्थिति</strong><p>इस नमूने में नामों के अर्थ, व्युत्पत्ति या शास्त्रीय स्रोत का दावा नहीं किया गया है। प्रकाशित प्रविष्टियों में मूल संदर्भ और संस्करण जहाँ उपलब्ध होंगे, वहीं जोड़े जाएँगे।</p></aside>
  </main>;
}
