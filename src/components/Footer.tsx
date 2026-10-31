import Link from 'next/link';
import Image from 'next/image';
import { SITE, NAV_LINKS, SERVICES } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-surface-200 border-t border-[#1c3a6a]/60">
      {/* Main Footer Container */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          
          {/* Section 1: Company Profile & Factory Location (Full width on mobile/tablet, 4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none">
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white p-1.5 shadow-md border border-white/20 transition-transform group-hover:scale-105 shrink-0">
                <Image
                  src="/velani-logo.webp"
                  alt="Velani Metal Industries Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-sm sm:text-base tracking-wider leading-none">
                  VELANI METAL INDUSTRIES
                </span>
                <span className="text-[10px] font-bold text-accent tracking-[0.14em] uppercase mt-1">
                  Precision CNC Machining
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-surface-300 leading-relaxed">
              Dedicated to high-precision CNC Turning, CNC Milling, and custom industrial component manufacturing based in Narol, Ahmedabad since 1980.
            </p>

            {/* Factory Location Card */}
            <div className="bg-[#0f2240]/60 border border-[#1c3a6a]/60 rounded-xl p-3.5 sm:p-4 space-y-2 mt-3">
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-accent/15 text-accent shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>Factory Location</span>
              </div>

              <address className="not-italic text-xs text-surface-300 leading-relaxed space-y-0.5 pl-8">
                <p>{SITE.address.line1}</p>
                <p>{SITE.address.line2}</p>
                <p>Narol, Ahmedabad – 382405, Gujarat, India</p>
              </address>

              <div className="pl-8 pt-1">
                <a
                  href={SITE.mapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover font-semibold text-xs transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Links Section (Side-by-side 2-col grid on mobile, 5 cols on desktop) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-5">
            {/* Col 2A - Quick Links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3 sm:mb-4 pb-1 border-b border-navy-700/50 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-surface-300 hover:text-white transition-colors inline-flex items-center gap-1.5 py-1 group"
                    >
                      <span className="text-accent/60 group-hover:text-accent group-hover:translate-x-0.5 transition-all text-xs font-mono">›</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2B - Our Capabilities */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3 sm:mb-4 pb-1 border-b border-navy-700/50 inline-block">
                Capabilities
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                {SERVICES.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="/products-services/"
                      className="text-surface-300 hover:text-white transition-colors inline-flex items-center gap-1.5 py-1 group"
                    >
                      <span className="text-accent/60 group-hover:text-accent group-hover:translate-x-0.5 transition-all text-xs font-mono">›</span>
                      <span className="line-clamp-1">{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Direct Contact (Full width on mobile, 3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3 sm:mb-4 pb-1 border-b border-navy-700/50 inline-block">
              Direct Contact
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {/* Phone Card */}
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0f2240]/40 border border-[#1c3a6a]/50 hover:border-accent/40 hover:bg-[#0f2240]/80 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-surface-400 block font-semibold">Phone Inquiry</span>
                  <span className="text-xs font-bold text-white group-hover:text-accent transition-colors truncate block">
                    {SITE.phone}
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0f2240]/40 border border-[#1c3a6a]/50 hover:border-accent/40 hover:bg-[#0f2240]/80 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-surface-400 block font-semibold">Email Address</span>
                  <span className="text-xs font-bold text-white group-hover:text-accent transition-colors truncate block">
                    {SITE.email}
                  </span>
                </div>
              </a>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="pt-1">
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl text-xs font-bold transition-all shadow-sm active:scale-98"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 1.861.855 2.796.855 3.18 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.768-5.768-5.768zm0-2c4.281 0 7.768 3.486 7.768 7.768 0 4.281-3.487 7.767-7.768 7.768-1.341 0-2.604-.347-3.71-.955l-4.321 1.132 1.157-4.218c-.689-1.157-1.074-2.502-1.074-3.926 0-4.282 3.487-7.768 7.768-7.768z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-surface-400">
          <p>© {new Date().getFullYear()} Velani Metal Industries. All rights reserved.</p>
          <p>
            Website developed by{' '}
            <a
              href="https://infoytechsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-200 hover:text-white font-medium underline transition-colors"
            >
              Infoy Tech Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
