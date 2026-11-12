import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const sections: Record<string, { title: string; kicker: string; description: string; status: string; next?: { label: string; href: string } }> = {
  "shiv-charcha": { title: "शिव ज्ञान", kicker: "परंपरा और विचार", description: "शिव से जुड़ी परंपराओं, विचारों और कथाओं का सरल परिचय—विविध मतों को सम्मानपूर्वक रखते हुए।", status: "विषय सूची और समीक्षा किए हुए लेख तैयार किए जा रहे हैं।", next: { label: "मंत्रों से शुरुआत करें", href: "/hi/mantras" } },
  sources: { title: "स्रोत और संपादकीय तरीका", kicker: "विश्वास का आधार", description: "हम मूल पाठ, परंपरा, व्याख्या और यात्रा-संबंधी जानकारी को अलग-अलग पहचान देंगे। जहाँ संदर्भ ज्ञात हों, वहाँ पाठक को स्रोत और उपलब्ध locator तक पहुँच मिलेगी।", status: "स्रोत नीति का यह प्रारंभिक पृष्ठ है; पूर्ण समीक्षा प्रक्रिया अभी निर्धारित की जा रही है।" },
  about: { title: "हमारे बारे में", kicker: "ShivAnvaya", description: "शिव ज्ञान को समझने और निजी साधना से जोड़ने का एक हिंदी-प्रथम डिजिटल अनुभव।", status: "ShivAnvaya नाम अभी प्रस्तावित है और औपचारिक clearance के अधीन है।" },
  help: { title: "सहायता और सुधार", kicker: "हमसे संपर्क करें", description: "प्रकाशित सामग्री में गलती दिखे तो स्रोत और पृष्ठ का विवरण देकर सुधार की सूचना दें।", status: "संपर्क और correction-report सुविधा CMS API तय होने के बाद जोड़ी जाएगी।" },
};

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  // Placeholder sections are not indexed until their content is reviewed (PRD §8 WEB-007).
  const indexable = section === "sources" || section === "about";
  return { title: sections[section]?.title ?? "पृष्ठ", robots: { index: indexable, follow: true } };
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const content = sections[section];
  if (!content) notFound();
  return <main className="listing-page wrap section-placeholder">
    <span className="section-kicker">{content.kicker}</span><h1>{content.title}</h1>
    <p className="listing-intro">{content.description}</p>
    <div className="editorial-placeholder"><p>{content.status}</p></div>
    {content.next && <Link className="button button-primary" href={content.next.href}>{content.next.label} <span aria-hidden="true">↗</span></Link>}
  </main>;
}
