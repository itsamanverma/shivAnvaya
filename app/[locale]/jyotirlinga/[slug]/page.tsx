import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { YatraDetail } from "@/components/yatra-views";
import { jyotirlingas } from "@/lib/yatra";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jyotirlingas.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = jyotirlingas.find((item) => item.slug === slug);
  // Detail pages stay out of the index until a reviewer approves the content (PRD §8 WEB-011).
  return { title: entry?.name ?? "ज्योतिर्लिंग", robots: { index: false, follow: true } };
}

export default async function JyotirlingaDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = jyotirlingas.find((item) => item.slug === slug);
  if (!entry) notFound();
  return <YatraDetail basePath="/hi/jyotirlinga" backLabel="ज्योतिर्लिंग सूची" entry={entry} />;
}
