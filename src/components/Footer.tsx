"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const footerCopy = {
  EN: {
    tagline: 'Structured practice. Open to all.',
    contact: 'Contact',
    copyrightLabel: 'Msport Driving Range'
  },
  TH: {
    tagline: 'ซ้อมอย่างมีระบบ เปิดรับทุกคน',
    contact: 'ติดต่อ',
    copyrightLabel: 'Msport Driving Range'
  },
  KO: {
    tagline: '체계적인 연습. 누구나 환영합니다.',
    contact: '문의',
    copyrightLabel: 'Msport Driving Range'
  },
  ZH: {
    tagline: '系统化练习，欢迎每一位球手。',
    contact: '联系',
    copyrightLabel: 'Msport Driving Range'
  },
  JA: {
    tagline: '構造化された練習を、すべてのゴルファーへ。',
    contact: 'お問い合わせ',
    copyrightLabel: 'Msport Driving Range'
  }
} as const;

export default function Footer() {
  const { language } = useLanguage();
  const copy = footerCopy[language];

  return (
    <footer className="bg-[#1B1B1A] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 text-center lg:px-8 md:py-14 md:space-y-6 md:text-left">
        <div className="grid gap-6 md:grid-cols-[auto_minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,0.95fr)] md:items-start md:gap-8">
          <div className="flex justify-center md:justify-start">
            <Image src="/images/Home/Msport%20logo.png" alt="Msport Driving Range logo" width={150} height={50} className="w-24 h-auto md:w-28" />
          </div>

          <div className="space-y-4 lg:space-y-5">
            <p className="mx-auto max-w-xs text-[0.82rem] leading-relaxed text-white/75 md:mx-0 md:text-sm">{copy.tagline}</p>
            <div className="flex items-center justify-center gap-3 md:justify-start">
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

          <div className="space-y-3 text-[0.82rem] text-white/70 md:space-y-4 md:text-sm">
            <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/55">Address</p>
            <address className="not-italic">
              <div className="flex items-start justify-center gap-3 text-left md:justify-start">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/45" aria-hidden="true" />
                <div className="space-y-1">
                  <p>Msport Driving Range</p>
                  <p>188 Moo 3, San Klang</p>
                  <p>San Kamphaeng, Chiang Mai 50130</p>
                </div>
              </div>
            </address>
          </div>

          <div className="space-y-3 text-[0.82rem] text-white/70 md:space-y-4 md:text-sm">
            <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/55">{copy.contact}</p>
            <div className="space-y-2">
              <Link href="tel:+66874199199" className="flex items-center justify-center gap-3 hover:text-white transition-colors md:justify-start">
                <Phone className="h-4 w-4 shrink-0 text-white/45" aria-hidden="true" />
                <span>+66 87 419 9199</span>
              </Link>
              <Link href="mailto:msportcomplex@hotmail.com" className="flex items-center justify-center gap-3 hover:text-white transition-colors md:justify-start">
                <Mail className="h-4 w-4 shrink-0 text-white/45" aria-hidden="true" />
                <span>msportcomplex@hotmail.com</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-3 text-[0.78rem] text-white/55 md:pt-4 md:text-sm">
          <p>© {new Date().getFullYear()} {copy.copyrightLabel}</p>
        </div>
      </div>
    </footer>
  );
}

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
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 hover:border-white/40 md:h-8 md:w-8">
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
