import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PwaRegister } from "@/components/pwa-register";
import { brand } from "@/lib/brand";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6f2638",
};

export const metadata: Metadata = {
  title: {
    default: `${brand.devanagari} — शिव ज्ञान, मंत्र अर्थ और साधना`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  openGraph: {
    type: "website",
    locale: "hi_IN",
    siteName: brand.name,
    title: `${brand.devanagari} — शिव ज्ञान से साधना तक`,
    description: brand.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi" dir="ltr">
      <body>
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
