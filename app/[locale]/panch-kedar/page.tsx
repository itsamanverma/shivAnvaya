import type { Metadata } from "next";
import { YatraIndex } from "@/components/yatra-views";
import { panchKedar } from "@/lib/yatra";

export const metadata: Metadata = {
  title: "पंच केदार",
  description: "पंच केदार परंपरा और पाँच स्थलों का परिचय।",
};

export default function PanchKedarIndexPage() {
  return (
    <YatraIndex
      basePath="/hi/panch-kedar"
      kicker="तीर्थ परिचय"
      title="पंच केदार"
      description="पंच केदार परंपरा और स्थलों का परिचय। मौसमी रास्ते और यात्रा सुरक्षा के बारे में बिना सत्यापित ताज़ा जानकारी के दावा नहीं किया जाएगा।"
      entries={panchKedar}
    />
  );
}
