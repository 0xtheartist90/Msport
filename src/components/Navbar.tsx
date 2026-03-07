"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { languageCodes, type LanguageCode } from '@/lib/translations';

const LANGUAGE_FLAGS: Record<LanguageCode, string> = {
  EN: '🇬🇧',
  TH: '🇹🇭',
  KO: '🇰🇷',
  ZH: '🇨🇳',
  JA: '🇯🇵'
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const pathname = usePathname();
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  type NavLink =
    | {
        type: 'link';
        href: string;
        label: string;
        sectionId?: string;
      }
    | {
        type: 'dropdown';
        label: string;
      };

  const navLinks: NavLink[] = useMemo(
    () => [
      { type: 'link', href: '/#home', label: t.nav.links.home, sectionId: 'home' },
      { type: 'link', href: '/about', label: t.nav.links.about },
      { type: 'link', href: '/facilities', label: t.nav.links.facilities },
      { type: 'link', href: '/simulators', label: t.nav.links.simulators },
      { type: 'link', href: '/academy', label: t.nav.links.academy },
      { type: 'dropdown', label: t.nav.links.locations },
      { type: 'link', href: '/news', label: t.nav.links.news }
    ],
    [t.nav.links]
  );

  const sectionIds = ['home'];
  const MIN_ACTIVE_RATIO = 0.2;

  const locationLinks = [
    { href: '/driving-range', label: 'Msport Driving Range', status: 'flagship' as const },
    { href: '/locations/msport-plus', label: 'Msport+', status: 'comingSoon' as const }
  ];

  const languageOptions = languageCodes.map(code => ({
    code,
    label: t.nav.languageNames[code] ?? code
  }));

  useEffect(() => {
    setLocationsOpen(false);
    setLanguageOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let sectionObserver: IntersectionObserver | null = null;
    if (pathname === '/') {
      sectionObserver = new IntersectionObserver(
        entries => {
          let maxRatio = 0;
          let nextSection = '';

          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              return;
            }

            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              nextSection = entry.target.id;
            }
          });

          if (nextSection && maxRatio >= MIN_ACTIVE_RATIO) {
            setActiveSection(prev => (prev === nextSection ? prev : nextSection));
          }
        },
        {
          threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
          rootMargin: '-15% 0px -15% 0px'
        }
      );

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          sectionObserver?.observe(element);
        }
      });
    }

    const animationObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -15% 0px'
      }
    );

    const animatedElements = document.querySelectorAll('.reveal');
    animatedElements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.3) {
        el.classList.add('reveal-visible');
      } else {
        animationObserver.observe(el);
      }
    });

    return () => {
      sectionObserver?.disconnect();
      animationObserver.disconnect();
    };
  }, [pathname]);

  const handleNavClick = (sectionId?: string) => {
    if (!sectionId || pathname !== '/') return;
    setActiveSection(sectionId);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#3A3A36]/8 bg-[#F7F7F5]/88 text-[#3A3A36] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            <Link href="/" className="flex items-center" aria-label="Msport Driving Range Home">
              <Image
                src="/images/logo topnav.png"
                alt="Msport Driving Range logo"
                width={160}
                height={48}
                className="h-9 w-auto sm:h-10"
                style={{ width: 'auto' }}
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map(link => {
                if (link.type === 'dropdown') {
                  const isActiveDropdown = pathname.startsWith('/locations') || pathname === '/driving-range';
                  
return (
                    <div key={link.label} className="relative">
                      <button
                        type="button"
                        onClick={() => setLocationsOpen(prev => !prev)}
                        className={`group inline-flex items-center gap-1 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                          isActiveDropdown
                            ? 'text-[var(--accent)]'
                            : 'text-[#3A3A36] hover:text-[#1C1C1A]'
                        }`}
                        aria-expanded={locationsOpen}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
                        <span
                          className={`absolute left-0 -bottom-[1px] h-px transition-all duration-300 ${
                            isActiveDropdown ? 'w-full bg-[var(--accent)] opacity-100' : 'w-0 bg-[#706C61] opacity-0 group-hover:w-full group-hover:opacity-100'
                          }`}
                        />
                      </button>
                      {locationsOpen && (
                        <div
                          className="absolute left-0 top-full mt-3 w-64 rounded-[24px] border border-[#3A3A36]/12 bg-[#F7F7F5]/96 p-4 shadow-[0_28px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl space-y-3"
                          onMouseLeave={() => setLocationsOpen(false)}
                        >
                          {locationLinks.map(loc => (
                            <Link
                              key={loc.href}
                              href={loc.href}
                              onClick={() => setLocationsOpen(false)}
                              className="block rounded-[18px] border border-transparent px-4 py-3 transition-all duration-300 hover:border-[#3A3A36]/12 hover:bg-white/65"
                            >
                              <p className="text-sm font-semibold text-[#1C1C1A]">{loc.label}</p>
                              <p className="text-[11px] uppercase tracking-[0.35em] text-[#8a887f]">
                                {t.nav.locationStatuses[loc.status]}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                const targetSection = link.sectionId;
                const isHome = pathname === '/';
                const isActiveSection = isHome && targetSection ? activeSection === targetSection : false;
                const isActive = isActiveSection || pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(targetSection)}
                    className={`group relative py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                      isActive
                        ? 'text-[var(--accent)]'
                        : 'text-[#3A3A36] hover:text-[#1C1C1A]'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-[1px] h-px transition-all duration-300 ${
                        isActive ? 'w-full bg-[var(--accent)] opacity-100' : 'w-0 bg-[#706C61] opacity-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden md:block" ref={languageMenuRef}>
                <button
                  type="button"
                  onClick={() => setLanguageOpen(prev => !prev)}
                  className="inline-flex items-center gap-1 rounded-full border border-[#3A3A36]/12 bg-white/65 px-3 py-2 text-[#3A3A36] shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#3A3A36]/20 hover:bg-white"
                  aria-haspopup="true"
                  aria-expanded={languageOpen}
                >
                  <span className="emoji text-base leading-none">{LANGUAGE_FLAGS[language]}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
                </button>
                {languageOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-[22px] border border-[#3A3A36]/12 bg-white/96 p-2 shadow-[0_28px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl space-y-1">
                    {languageOptions.map(option => (
                      <button
                        key={option.code}
                        type="button"
                        onClick={() => {
                          setLanguage(option.code);
                          setLanguageOpen(false);
                        }}
                        className={`w-full rounded-xl px-3 py-2 text-left text-sm font-semibold transition-colors ${
                          language === option.code ? 'bg-[#F7F7F5] text-[var(--accent)]' : 'hover:bg-[#F7F7F5]'
                        }`}
                      >
                        <span className="emoji mr-2 text-base leading-none">{LANGUAGE_FLAGS[option.code]}</span>
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/simulators"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_14px_30px_rgba(185,28,28,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d90b0b]"
              >
                {t.nav.actions.bookBay}
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#3A3A36]/12 bg-white/70 text-[#1C1C1A] shadow-[0_8px_24px_rgba(0,0,0,0.05)] md:hidden"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#EFE9DC] pt-20">
          <div className="flex flex-col items-center justify-center gap-8 p-8">
            <div className="w-full max-w-sm text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8a887f]">{t.nav.languageLabel}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                {languageOptions.map(option => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => setLanguage(option.code)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold tracking-[0.35em] uppercase ${
                      language === option.code ? 'bg-[#1C1C1A] text-white' : 'border border-[#3A3A36]/20 text-[#1C1C1A]'
                    }`}
                  >
                    <span className="emoji mr-2 text-base leading-none">{LANGUAGE_FLAGS[option.code]}</span>
                    {option.code}
                  </button>
                ))}
              </div>
            </div>
            {navLinks.map(link => {
              if (link.type === 'dropdown') {
                return (
                  <div key={link.label} className="w-full max-w-sm">
                    <details className="group">
                      <summary className="text-center text-2xl font-black uppercase tracking-tight cursor-pointer">
                        {link.label}
                      </summary>
                      <div className="mt-4 space-y-3">
                        {locationLinks.map(loc => (
                          <Link
                            key={loc.href}
                            href={loc.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-2xl border border-[#3A3A36]/20 px-4 py-3 text-center"
                          >
                            <p className="text-lg font-semibold">{loc.label}</p>
                            <p className="text-xs uppercase tracking-[0.35em] text-[#8a887f]">{t.nav.locationStatuses[loc.status]}</p>
                          </Link>
                        ))}
                      </div>
                    </details>
                  </div>
                );
              }
              const targetSection = link.sectionId;
              const isHome = pathname === '/';
              const isActiveSection = isHome && targetSection ? activeSection === targetSection : false;
              const isActive = isActiveSection || pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    handleNavClick(targetSection);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-3xl font-black uppercase tracking-tight transition-opacity ${
                    isActive ? 'text-[var(--accent)]' : 'hover:opacity-70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/simulators"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 accent-bg px-8 py-4 rounded-xl font-bold text-lg"
            >
              {t.nav.actions.bookSession}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
