import type { Metadata } from "next";
import { YatraIndex } from "@/components/yatra-views";
import { jyotirlingas } from "@/lib/yatra";

export const metadata: Metadata = {
  title: "ज्योतिर्लिंग",
  description: "बारह ज्योतिर्लिंगों की सूची और प्रत्येक स्थल का परिचय।",
};

export default function JyotirlingaIndexPage() {
  return (
    <YatraIndex
      basePath="/hi/jyotirlinga"
      kicker="तीर्थ परिचय"
      title="ज्योतिर्लिंग"
      description="बारह ज्योतिर्लिंगों की परंपरा और प्रत्येक स्थान का परिचय। यात्रा संबंधी जानकारी पर समीक्षा की तारीख और स्रोत दिए जाएँगे।"
      entries={jyotirlingas}
    />
  );
}
