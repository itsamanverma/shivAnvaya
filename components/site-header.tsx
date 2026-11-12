import Link from "next/link";
import { brand } from "@/lib/brand";
import { primaryNavigation } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link className="brand-lockup" href="/hi" aria-label={`${brand.devanagari} — मुख्य पृष्ठ`}>
          <span className="brand-mark" aria-hidden="true">शि</span>
          <span className="brand-copy">
            <strong>{brand.devanagari}</strong>
            <span>{brand.name}</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="मुख्य नेविगेशन">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link className="header-search" href="/hi/search" aria-label="खोजें">
          <span aria-hidden="true">⌕</span><span className="search-label">खोजें</span>
        </Link>
      </div>
      <nav className="mobile-nav" aria-label="मुख्य नेविगेशन">
        {primaryNavigation.slice(0, 4).map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}
