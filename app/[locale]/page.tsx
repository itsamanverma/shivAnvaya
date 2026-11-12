import Link from "next/link";
import { featuredMantras } from "@/lib/content";

const pathways = [
  { number: "०१", title: "मंत्र का अर्थ समझें", text: "मूल पाठ, उच्चारण, अर्थ और उपलब्ध स्रोत एक साथ।", href: "/hi/mantras", icon: "ॐ" },
  { number: "०२", title: "शिव परंपराओं को जानें", text: "कथाएँ, नाम और विचार—संदर्भ और विविधता के साथ।", href: "/hi/shiv-charcha", icon: "ज्ञान" },
  { number: "०३", title: "तीर्थ की जानकारी लें", text: "ज्योतिर्लिंग और पंच केदार का परिचय; यात्रा विवरण पर तारीख सहित।", href: "/hi/jyotirlinga", icon: "तीर्थ" },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const hindi = locale === "hi";

  return (
    <main>
      <section className="hero-section">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> {hindi ? "शिव ज्ञान · संदर्भ के साथ" : "Shiva knowledge · with context"}</span>
            <h1>{hindi ? <>शिव को समझें।<br /><em>भाव से साधना करें।</em></> : <>Understand Shiva.<br /><em>Practice with purpose.</em></>}</h1>
            <p className="hero-description">{hindi ? "मंत्रों के अर्थ, शिव परंपराओं और तीर्थों को स्पष्ट भाषा और संदर्भों के साथ जानें। अपनी साधना को सहज और निजी रखें।" : "Explore mantra meanings, Shaiva traditions and pilgrimage with clear explanations and references. Keep your practice simple and personal."}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/hi/mantras">मंत्रों को जानें <span aria-hidden="true">↗</span></Link>
              <Link className="button button-quiet" href="/hi/sources">हमारी स्रोत नीति पढ़ें</Link>
            </div>
            <div className="trust-line"><span aria-hidden="true">✳</span> परंपरा और व्याख्या को अलग-अलग पहचानें</div>
          </div>
          <div className="hero-art" aria-label="शिव से प्रेरित शांत, अमूर्त रेखाचित्र" role="img">
            <div className="art-halo" />
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-mountain mountain-back" /><div className="art-mountain mountain-front" />
            <div className="art-lingam"><span /></div>
            <div className="art-water" />
            <div className="art-caption"><span>मंत्र परिचय</span><strong>॥ ॐ नमः शिवाय ॥</strong><small>मंत्र का अर्थ और संदर्भ जानें</small></div>
            <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✧</span>
          </div>
        </div>
        <div className="hero-bottom wrap"><span>ज्ञान</span><i /> <span>समझ</span><i /> <span>साधना</span><span className="hero-bottom-note">बिना दबाव, अपनी गति से</span></div>
      </section>

      <section className="search-section wrap" aria-labelledby="search-title">
        <div className="search-intro"><span className="section-kicker">खोज और जानें</span><h2 id="search-title">आप किस विषय को समझना चाहते हैं?</h2></div>
        <form action={`/hi/search`} className="search-form" role="search">
          <label className="visually-hidden" htmlFor="site-search">मंत्र, नाम, कथा या तीर्थ खोजें</label>
          <span aria-hidden="true">⌕</span><input id="site-search" name="q" placeholder="मंत्र, नाम, कथा या तीर्थ खोजें…" /><button type="submit">खोजें</button>
        </form>
        <div className="popular-searches"><span>लोकप्रिय:</span><Link href="/hi/mantras/om-namah-shivaya">ॐ नमः शिवाय</Link><Link href="/hi/jyotirlinga">ज्योतिर्लिंग</Link><Link href="/hi/shiva-names">शिव के नाम</Link></div>
      </section>

      <section className="pathways-section">
        <div className="wrap">
          <div className="section-heading"><div><span className="section-kicker">आपकी जिज्ञासा से शुरुआत</span><h2>शिव से जुड़ने के तीन रास्ते</h2></div><p>हर विषय को उपयोगी, सहज और यथासंभव स्रोतों से जुड़ा रखने का प्रयास।</p></div>
          <div className="pathway-grid">
            {pathways.map((item) => <Link className="pathway-card" href={item.href} key={item.number}>
              <div className="pathway-card-top"><span>{item.number}</span><span className="pathway-icon">{item.icon}</span></div>
              <h3>{item.title}</h3><p>{item.text}</p><span className="card-link">देखें <span aria-hidden="true">↗</span></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="mantra-section wrap">
        <div className="section-heading"><div><span className="section-kicker">एक मंत्र, संदर्भ सहित</span><h2>मंत्र संग्रह से</h2></div><Link className="text-link" href="/hi/mantras">सभी मंत्र देखें <span aria-hidden="true">↗</span></Link></div>
        <div className="mantra-grid">{featuredMantras.map((mantra) => <article className="mantra-card" key={mantra.href}>
          <span className="mantra-label">{mantra.label}</span><h3>{mantra.title}</h3><p className="transliteration">{mantra.transliteration}</p><p>{mantra.meaning}</p>
          <Link href={mantra.href}>अर्थ और संदर्भ पढ़ें <span aria-hidden="true">→</span></Link>
        </article>)}</div>
        <p className="content-note">यह शुरुआती इंटरफ़ेस नमूना है। मंत्रों के पाठ और व्याख्याएँ संपादकीय समीक्षा तथा स्रोत सत्यापन के बाद ही प्रकाशित होंगी।</p>
      </section>

      <section className="source-note-section"><div className="wrap source-note"><span className="source-note-mark" aria-hidden="true">“</span><div><span className="section-kicker">विश्वास का आधार</span><h2>जहाँ स्रोत ज्ञात हों, वहाँ उनका पता भी मिले।</h2><p>हम पाठ, परंपरा और अपनी व्याख्या में फर्क स्पष्ट करेंगे। मतभेद हों तो उन्हें सम्मानपूर्वक बताएँगे।</p></div><Link className="button button-outline" href="/hi/sources">संपादकीय तरीका</Link></div></section>
    </main>
  );
}
