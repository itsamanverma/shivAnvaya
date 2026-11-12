import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

// robots.txt is not a security control (PRD §12). Private surfaces also send noindex and no-store headers.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api"] }],
    sitemap: `${brand.siteUrl}/sitemap.xml`,
  };
}
