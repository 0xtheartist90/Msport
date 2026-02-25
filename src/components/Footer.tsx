import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

const footerNav = {
  shop: [
    { slug: 'shirts', label: 'Apparel' },
    { slug: 'headwear', label: 'Headwear' },
    { slug: 'bags', label: 'Bags' },
    { slug: 'equipment', label: 'Equipment' },
    { slug: 'accessories', label: 'Accessories' },
    { slug: 'secondhand', label: 'Secondhand Finds' }
  ],
  community: [{ href: '#app-teaser', label: 'Join the App' }]
};

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1A] text-[#EFE9DC] text-xs">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-7 space-y-4">
        <div className="grid gap-y-5 lg:gap-y-0 lg:gap-x-24 grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] items-start text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-6 shrink-0 max-w-sm mx-auto lg:mx-0">
            <Image src="/images/LOGO%20White.png" alt="Birdiez white logo" width={200} height={72} className="w-48 h-auto" />

            <div className="space-y-2 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start gap-3">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
                  aria-label="Follow on Instagram"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </Link>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
                  aria-label="Follow on Facebook"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </Link>
              </div>
              <p className="text-xs font-semibold tracking-wide text-[#EFE9DC]">hello@birdiez.club</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 lg:gap-16 justify-center lg:justify-end">
            <div className="min-w-[200px] w-full lg:w-auto">
              <ShopColumn centerOnMobile />
            </div>
            <div className="min-w-[160px] w-full flex justify-center lg:justify-start">
              <FooterColumn title="Community" links={footerNav.community} external compact centerOnMobile />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-white/10 pt-3 text-center">
          <p className="script-accent text-[var(--accent)] tracking-wide">
            Built by players for the community.
          </p>
          <p className="text-[#EFE9DC]/60">&copy; {new Date().getFullYear()} Birdiez</p>
        </div>
      </div>
    </footer>
  );
}

type ShopColumnProps = {
  centerOnMobile?: boolean;
};

const ShopColumn = ({ centerOnMobile }: ShopColumnProps) => {
  const columns: typeof footerNav.shop[] = [];
  for (let i = 0; i < footerNav.shop.length; i += 2) {
    columns.push(footerNav.shop.slice(i, i + 2));
  }

  const alignmentClass = centerOnMobile ? 'text-center lg:text-left' : '';

  return (
    <div className={alignmentClass}>
      <h3 className="font-semibold text-base mb-2">Shop</h3>
      <div className="grid grid-cols-3 gap-3">
        {columns.map((col, colIdx) => (
          <ul key={colIdx} className="space-y-1">
            {col.map(link => (
              <li key={link.slug}>
                <Link
                  href={`/shop?category=${link.slug}`}
                  className="text-[#EFE9DC]/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

type FooterColumnProps = {
  title: string;
  links: { href: string; label: string }[];
  external?: boolean;
  compact?: boolean;
  centerOnMobile?: boolean;
};

const FooterColumn = ({ title, links, external, compact, centerOnMobile }: FooterColumnProps) => {
  const alignmentClass = centerOnMobile ? 'text-center lg:text-left' : '';

  return (
    <div className={alignmentClass}>
      <h3 className={`font-semibold ${compact ? 'text-base' : 'text-lg'} mb-2`}>{title}</h3>
      <ul className={`space-y-1 ${compact ? 'text-xs' : 'text-sm'}`}>
        {links.map(link => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[#EFE9DC]/80 hover:text-white transition-colors"
              target={external && link.href.startsWith('http') ? '_blank' : undefined}
              rel={external && link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
