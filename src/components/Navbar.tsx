'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const totalItems = useCart(state => state.getTotalItems());

  type NavLink = {
    href: string;
    label: string;
    sectionId?: string;
  };

  const navLinks: NavLink[] = [
    { href: '/#home', label: 'Home', sectionId: 'home' },
    { href: '/#about', label: 'About Us', sectionId: 'about' },
    { href: '/#collections', label: 'Collections', sectionId: 'collections' },
    { href: '/#featured', label: 'Featured', sectionId: 'featured' },
    { href: '/#lifestyle', label: 'Lifestyle', sectionId: 'lifestyle' },
    { href: '/#app-teaser', label: 'Community', sectionId: 'app-teaser' },
    { href: '/#location', label: 'Visit Us', sectionId: 'location' },
    { href: '/shop', label: 'Shop' }
  ];

  const sectionIds = ['home', 'about', 'collections', 'featured', 'lifestyle', 'app-teaser', 'location'];
  const MIN_ACTIVE_RATIO = 0.2;

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
      <nav className="sticky top-0 z-50 bg-[#EFE9DC] text-[#706C61] border-b border-[#706C61]/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center" aria-label="Birdiez Home">
              <Image 
                src="/images/LOGO%20TOPNAV.png" 
                alt="Birdiez" 
                width={140} 
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => {
                const targetSection = link.sectionId;
                const isHome = pathname === '/';
                const isShopLink = link.href === '/shop';
                const isActiveSection = isHome && targetSection ? activeSection === targetSection : false;
                const isActiveShop = isShopLink && pathname === '/shop';
                const isActive = isActiveSection || isActiveShop;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(targetSection)}
                    className={`text-sm font-semibold tracking-wide transition-opacity relative group ${
                      isActive ? 'text-[var(--accent)]' : 'hover:opacity-70'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                        isActive ? 'w-full bg-[var(--accent)]' : 'w-0 bg-[#706C61] group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 accent-bg text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              
              <Link
                href="#location"
                className="hidden md:block accent-bg px-6 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition-transform duration-300"
              >
                Reserve
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
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
            {navLinks.map(link => {
              const targetSection = link.sectionId;
              const isHome = pathname === '/';
              const isShopLink = link.href === '/shop';
              const isActiveSection = isHome && targetSection ? activeSection === targetSection : false;
              const isActiveShop = isShopLink && pathname === '/shop';
              const isActive = isActiveSection || isActiveShop;

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
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 accent-bg px-8 py-4 rounded-xl font-bold text-lg"
            >
              Reserve In Store
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
