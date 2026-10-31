'use client';

import { useState } from 'react';

interface LeadershipCardProps {
  name: string;
  role: string;
  qualifications: string;
  badge: string;
  initials: string;
  subBadge: string;
  locationOrFocus: string;
  isHeritage?: boolean;
  image?: string;
  children: React.ReactNode;
}

export default function LeadershipCard({
  name,
  role,
  qualifications,
  badge,
  initials,
  subBadge,
  locationOrFocus,
  isHeritage = false,
  image,
  children,
}: LeadershipCardProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(image || '/images/about/viral-velani.webp');
  const [hasError, setHasError] = useState(false);

  // Auto-fallback: agar .webp nahi mili to .jpg ya .png check karega
  const handleImageError = () => {
    if (currentSrc.endsWith('.webp')) {
      setCurrentSrc(currentSrc.replace('.webp', '.jpg'));
    } else if (currentSrc.endsWith('.jpg')) {
      setCurrentSrc(currentSrc.replace('.jpg', '.png'));
    } else if (currentSrc.endsWith('.png')) {
      setCurrentSrc(currentSrc.replace('.png', '.jpeg'));
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Top Banner / Image Area */}
      <div className="relative h-64 sm:h-72 bg-gradient-to-br from-navy-950 via-navy-900 to-steel-900 overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}
        />

        {isHeritage ? (
          /* Founder (Praful Velani) - No photo needed, pure heritage crest */
          <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-navy-800/90 border-2 border-accent/60 flex flex-col items-center justify-center shadow-2xl relative mb-3">
              <div className="absolute -inset-1 rounded-full border border-dashed border-accent/40 animate-pulse pointer-events-none" />
              <svg 
                className="w-7 h-7 text-accent mb-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="text-xl font-extrabold text-white tracking-wider">
                {initials}
              </span>
            </div>
            <span className="text-xs uppercase tracking-widest text-accent font-bold">
              {subBadge}
            </span>
            <span className="text-sm text-surface-200 mt-1 font-medium">
              {locationOrFocus}
            </span>
          </div>
        ) : (
          /* Second Generation (Viral Velani) - Shows your uploaded photo */
          <>
            {!hasError ? (
              <img
                src={currentSrc}
                alt={`${name} - ${role}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                onError={handleImageError}
              />
            ) : (
              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-steel-800/80 border-2 border-steel-400 flex items-center justify-center text-3xl font-bold text-white mb-3 shadow-inner">
                  {initials}
                </div>
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  {subBadge}
                </span>
                <span className="text-sm text-surface-200 mt-1 font-medium">
                  {locationOrFocus}
                </span>
              </div>
            )}
          </>
        )}

        <div className="absolute top-4 right-4 z-20 bg-navy-900/90 backdrop-blur-md border border-navy-700/80 px-3.5 py-1.5 rounded-full text-xs font-bold text-accent shadow-md">
          {badge}
        </div>
      </div>

      {/* Details */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs uppercase font-bold tracking-wider text-steel-600 block mb-1">
            {role}
          </span>
          <h3 className="text-2xl font-bold text-navy-900">
            {name}
          </h3>
          <p className="text-sm font-semibold text-accent mt-0.5">
            {qualifications}
          </p>
        </div>

        <div className="space-y-3 text-sm text-navy-800 leading-relaxed pt-3 border-t border-surface-200 flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
}