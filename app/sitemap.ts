import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

/**
 * Only indexable, non-placeholder pages belong here (PRD §12). Detail pages for mantras,
 * names and pilgrimage stay out until a reviewer approves them and they are served from the approved content API.
 */
const indexablePaths = ["/hi", "/hi/mantras", "/hi/shiva-names", "/hi/jyotirlinga", "/hi/panch-kedar", "/hi/sources", "/hi/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.map((path) => ({
    url: `${brand.siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/hi" ? 1 : 0.6,
  }));
}
