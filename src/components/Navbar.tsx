'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE, NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const normalizePath = (path: string) => path.replace(/\/$/, '') || '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* 1. Top Utility Contact Bar (Deep Dark Navy #060d19) */}
      <div className="bg-[#060d19] text-gray-300 text-xs border-b border-[#1c3a6a]/40 py-2 px-4 hidden md:block">
        <div className="container-max flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <svg className="w-3.5 h-3.5 text-[#e85d26] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Narol, Ahmedabad, Gujarat
            </span>
            <span className="text-gray-500">•</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <svg className="w-3.5 h-3.5 text-[#e85d26] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Precision CNC Machining Since 1980
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a 
              href={`mailto:${SITE.email}`} 
              className="hover:text-white transition-colors flex items-center gap-1.5 text-gray-300"
            >
              <svg className="w-3.5 h-3.5 text-[#e85d26] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {SITE.email}
            </a>
            <span className="text-gray-500">•</span>
            <a 
              href={`tel:${SITE.phoneRaw}`} 
              className="hover:text-white transition-colors font-medium flex items-center gap-1.5 text-gray-200"
            >
              <svg className="w-3.5 h-3.5 text-[#e85d26] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Solid Navy #0a1628) */}
      <nav 
        className={`w-full bg-[#0a1628] border-b border-[#1c3a6a]/60 transition-all duration-300 ${
          scrolled ? 'py-2.5 shadow-2xl' : 'py-3.5 shadow-md'
        }`}
        aria-label="Main Navigation"
      >
        <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo & Title */}
          <Link 
            href="/" 
            className="flex items-center gap-3.5 group focus:outline-none shrink-0"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white p-1.5 shadow-md border border-white/20 transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/velani-logo.webp"
                alt="Velani Metal Industries Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-base sm:text-lg md:text-xl tracking-wider leading-none">
                VELANI METAL INDUSTRIES
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#e85d26] tracking-[0.14em] uppercase mt-1">
                Precision CNC Machining
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {NAV_LINKS.map((link) => {
              const isActive = normalizePath(pathname) === normalizePath(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-semibold transition-colors relative py-1.5 ${
                    isActive 
                      ? 'text-[#e85d26] font-bold' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e85d26] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center space-x-3.5">
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white text-xs font-semibold transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 1.861.855 2.796.855 3.18 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.768-5.768-5.768zm0-2c4.281 0 7.768 3.486 7.768 7.768 0 4.281-3.487 7.767-7.768 7.768-1.341 0-2.604-.347-3.71-.955l-4.321 1.132 1.157-4.218c-.689-1.157-1.074-2.502-1.074-3.926 0-4.282 3.487-7.768 7.768-7.768z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            <Link 
              href="/contact/" 
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#e85d26] hover:bg-[#d14e1c] text-white font-semibold rounded-lg shadow-md hover:shadow-orange-500/25 transition-all text-sm active:scale-95 whitespace-nowrap"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#e85d26] ml-2"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu (Dark Navy #060d19) */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden bg-[#060d19] border-t border-[#1c3a6a]/60 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = normalizePath(pathname) === normalizePath(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`text-base font-semibold py-2.5 border-b border-gray-800 flex items-center justify-between ${
                      isActive ? 'text-[#e85d26] font-bold' : 'text-gray-200 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#e85d26]" />}
                  </Link>
                );
              })}
              
              <div className="pt-3 flex flex-col space-y-3">
                <Link
                  href="/contact/"
                  className="bg-[#e85d26] hover:bg-[#d14e1c] text-white text-center py-3 text-sm font-semibold rounded-lg shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Request a Quote
                </Link>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="border border-white/20 text-white hover:bg-white/10 text-center py-2.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5"
                  >
                    📞 Call Us
                  </a>
                  <a
                    href={SITE.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2.5 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}