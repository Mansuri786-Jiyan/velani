'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon?: string;
    image?: string;
  };
  href?: string;
  ctaText?: string;
}

export default function ServiceCard({ service, href, ctaText }: ServiceCardProps) {
  const [hasImageError, setHasImageError] = useState(false);

  // Agar custom href nahi diya, to direct contact enquiry link banayega
  const targetHref = href || `/contact/?service=${encodeURIComponent(service.title)}`;
  const label = ctaText || 'Send Enquiry';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-surface-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden group">
      {/* Service Image Banner */}
      {service.image && !hasImageError ? (
        <div className="relative h-44 overflow-hidden bg-surface-100 border-b border-surface-200">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={() => setHasImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/20 to-transparent pointer-events-none" />
          {service.icon && (
            <div className="absolute bottom-3 left-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center text-xl shadow-md">
              {service.icon}
            </div>
          )}
        </div>
      ) : null}

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        {(!service.image || hasImageError) && service.icon && (
          <div className="text-3xl mb-4 text-steel-600">{service.icon}</div>
        )}
        <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-steel-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
          {service.description}
        </p>

        <Link
          href={targetHref}
          className="text-accent font-semibold text-sm hover:text-accent-hover transition-colors inline-flex items-center mt-auto group/link"
        >
          {label}
          <svg
            className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}