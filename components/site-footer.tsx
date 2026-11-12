import Link from "next/link";
import { brand } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-brand">{brand.devanagari} <span>· {brand.name}</span></p>
          <p>{brand.tagline}</p>
        </div>
        <div className="footer-links">
          <Link href="/hi/about">हमारे बारे में</Link>
          <Link href="/hi/sources">स्रोत नीति</Link>
          <Link href="/hi/help">सहायता</Link>
        </div>
        <small>यहाँ परंपरा और व्याख्या को स्रोतों सहित समझने का प्रयास है।</small>
      </div>
    </footer>
  );
}
