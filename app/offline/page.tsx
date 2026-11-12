import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ऑफ़लाइन",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <main lang="hi" className="listing-page wrap">
      <span className="section-kicker">ऑफ़लाइन</span>
      <h1>इंटरनेट उपलब्ध नहीं है</h1>
      <p className="listing-intro">
        यह पृष्ठ अभी सहेजा नहीं गया है। जो पृष्ठ पहले खोले गए थे, वे उपलब्ध हो सकते हैं। जुड़ते ही ताज़ा सामग्री दिखेगी।
      </p>
      <div className="editorial-placeholder">
        <p>ऑफ़लाइन सहेजी गई सामग्री पुरानी हो सकती है। किसी पृष्ठ की सबसे ताज़ा स्थिति के लिए इंटरनेट से जुड़ें।</p>
      </div>
      <Link className="button button-primary" href="/hi">होम पर जाएँ</Link>
    </main>
  );
}
