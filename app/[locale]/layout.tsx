import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/brand";

export function generateStaticParams() {
  return brand.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!brand.locales.includes(locale as (typeof brand.locales)[number])) notFound();

  return (
    <div lang={locale} className={`locale-shell locale-${locale}`}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
