"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const footerCopy = {
  EN: {
    tagline: 'Structured practice. Open to all.',
    contact: 'Contact',
    experiences: 'Experiences',
    community: 'Community',
    copyrightLabel: 'Msport Driving Range',
    quickLinks: { about: 'About', facilities: 'Facilities', contact: 'Contact' },
    experiencesLinks: [
      { href: '/contact', label: 'Contact' },
      { href: '/simulators', label: 'Simulators' },
      { href: '/academy', label: 'Academy' },
      { href: '/locations/msport-plus', label: 'Msport+' }
    ],
    communityLinks: [
      { href: '/#membership', label: 'Membership' },
      { href: '/news', label: 'News' },
      { href: '/locations/msport-plus', label: 'Msport+' },
      { href: 'tel:+66874199199', label: 'Concierge' }
    ]
  },
  TH: {
    tagline: 'ซ้อมอย่างมีระบบ เปิดรับทุกคน',
    contact: 'ติดต่อ',
    experiences: 'ประสบการณ์',
    community: 'คอมมูนิตี้',
    copyrightLabel: 'Msport Driving Range',
    quickLinks: { about: 'เกี่ยวกับ', facilities: 'สิ่งอำนวยความสะดวก', contact: 'ติดต่อ' },
    experiencesLinks: [
      { href: '/contact', label: 'ติดต่อ' },
      { href: '/simulators', label: 'ซิมูเลเตอร์' },
      { href: '/academy', label: 'อะคาเดมี' },
      { href: '/locations/msport-plus', label: 'Msport+' }
    ],
    communityLinks: [
      { href: '/#membership', label: 'สมาชิก' },
      { href: '/news', label: 'ข่าวสาร' },
      { href: '/locations/msport-plus', label: 'Msport+' },
      { href: 'tel:+66874199199', label: 'คอนเซียร์จ' }
    ]
  },
  KO: {
    tagline: '체계적인 연습. 누구나 환영합니다.',
    contact: '문의',
    experiences: '경험',
    community: '커뮤니티',
    copyrightLabel: 'Msport Driving Range',
    quickLinks: { about: '소개', facilities: '시설', contact: '문의' },
    experiencesLinks: [
      { href: '/contact', label: '문의' },
      { href: '/simulators', label: '시뮬레이터' },
      { href: '/academy', label: '아카데미' },
      { href: '/locations/msport-plus', label: 'Msport+' }
    ],
    communityLinks: [
      { href: '/#membership', label: '멤버십' },
      { href: '/news', label: '뉴스' },
      { href: '/locations/msport-plus', label: 'Msport+' },
      { href: 'tel:+66874199199', label: '컨시어지' }
    ]
  },
  ZH: {
    tagline: '系统化练习，欢迎每一位球手。',
    contact: '联系',
    experiences: '体验',
    community: '社区',
    copyrightLabel: 'Msport Driving Range',
    quickLinks: { about: '关于', facilities: '设施', contact: '联系' },
    experiencesLinks: [
      { href: '/contact', label: '联系' },
      { href: '/simulators', label: '模拟器' },
      { href: '/academy', label: '学院' },
      { href: '/locations/msport-plus', label: 'Msport+' }
    ],
    communityLinks: [
      { href: '/#membership', label: '会员' },
      { href: '/news', label: '新闻' },
      { href: '/locations/msport-plus', label: 'Msport+' },
      { href: 'tel:+66874199199', label: '礼宾服务' }
    ]
  },
  JA: {
    tagline: '構造化された練習を、すべてのゴルファーへ。',
    contact: 'お問い合わせ',
    experiences: '体験',
    community: 'コミュニティ',
    copyrightLabel: 'Msport Driving Range',
    quickLinks: { about: '概要', facilities: '施設', contact: 'お問い合わせ' },
    experiencesLinks: [
      { href: '/contact', label: 'お問い合わせ' },
      { href: '/simulators', label: 'シミュレーター' },
      { href: '/academy', label: 'アカデミー' },
      { href: '/locations/msport-plus', label: 'Msport+' }
    ],
    communityLinks: [
      { href: '/#membership', label: 'メンバーシップ' },
      { href: '/news', label: 'ニュース' },
      { href: '/locations/msport-plus', label: 'Msport+' },
      { href: 'tel:+66874199199', label: 'コンシェルジュ' }
    ]
  }
} as const;

export default function Footer() {
  const { language } = useLanguage();
  const copy = footerCopy[language];

  return (
    <footer className="bg-[#1B1B1A] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 py-14 space-y-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-5">
            <Image src="/images/Msport%20logo.png" alt="Msport Driving Range logo" width={150} height={50} className="w-28 h-auto" />
            <p className="text-sm text-white/75 max-w-xs">{copy.tagline}</p>
            <div className="flex items-center gap-3">
              <SocialIcon href="https://www.instagram.com/MSPORT_COMPLEX" label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/msportdrivingrange" label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@MSPORTCOMPLEX2023" label="TikTok">
                <TikTokIcon className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          <div className="space-y-4 text-sm text-white/70">
            <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/55">{copy.contact}</p>
            <address className="not-italic space-y-1">
              <p>Msport Driving Range</p>
              <p>188 Moo 3, San Klang</p>
              <p>San Kamphaeng, Chiang Mai 50130</p>
            </address>
            <div className="space-y-1">
              <Link href="tel:+66874199199" className="block hover:text-white transition-colors">
                +66 87 419 9199
              </Link>
              <Link href="mailto:msportcomplex@hotmail.com" className="block hover:text-white transition-colors">
                msportcomplex@hotmail.com
              </Link>
            </div>
          </div>

          <FooterColumn title={copy.experiences} links={copy.experiencesLinks} />
          <FooterColumn title={copy.community} links={copy.communityLinks} />
        </div>

        <div className="border-t border-white/10 pt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-white/55">
          <p>© {new Date().getFullYear()} {copy.copyrightLabel}</p>
          <div className="flex flex-wrap gap-4">
            {[
              { href: '/about', label: copy.quickLinks.about },
              { href: '/facilities', label: copy.quickLinks.facilities },
              { href: '/contact', label: copy.quickLinks.contact }
            ].map(link => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: readonly { href: string; label: string }[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="space-y-4">
      <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/55">{title}</p>
      <ul className="space-y-3 text-sm">
        {links.map(link => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 after:block after:h-[1px] after:w-0 after:bg-white/60 after:transition-all after:duration-300 hover:after:w-full"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

type SocialIconProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

const SocialIcon = ({ href, label, children }: SocialIconProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-white/70 hover:text-white transition-all"
    aria-label={`Follow on ${label}`}
  >
    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-white/15 hover:border-white/40">
      {children}
    </span>
  </Link>
);

const TikTokIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    role="img"
  >
    <path
      d="M216 88.2c-18.7-4.3-33.4-16.9-38.9-32.8V164a64 64 0 1 1-64-64 64.8 64.8 0 0 1 16 2.1v35.6a28 28 0 1 0 16 25V12h35.1a56.2 56.2 0 0 0 2.9 16c5.8 18.4 22.1 32.7 39.9 35.4Z"
      fill="currentColor"
    />
  </svg>
);
