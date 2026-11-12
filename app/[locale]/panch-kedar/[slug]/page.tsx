import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { YatraDetail } from "@/components/yatra-views";
import { panchKedar } from "@/lib/yatra";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return panchKedar.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = panchKedar.find((item) => item.slug === slug);
  // Trek and route details stay out of the index until verified (PRD §8 WEB-013).
  return { title: entry?.name ?? "पंच केदार", robots: { index: false, follow: true } };
}

export default async function PanchKedarDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = panchKedar.find((item) => item.slug === slug);
  if (!entry) notFound();
  return <YatraDetail basePath="/hi/panch-kedar" backLabel="पंच केदार सूची" entry={entry} />;
}
