import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

// The name and icon are provisional until brand clearance (PRD §2.3, §23).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brand.name} — ${brand.tagline}`,
    short_name: brand.name,
    description: brand.description,
    id: "/hi",
    start_url: "/hi",
    scope: "/",
    display: "standalone",
    background_color: "#fffaf5",
    theme_color: "#6f2638",
    lang: "hi",
    dir: "ltr",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
