import Link from "next/link";
import Image from "next/image";
import { SITE_IMAGES } from "@/lib/constants";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  backgroundImage?: string;
  imageAlt?: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage = SITE_IMAGES.hero,
  imageAlt = "Velani Precision CNC Machining Facility",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[580px] md:min-h-[640px] flex items-center justify-center bg-navy-900 overflow-hidden">
      {/* Workshop Background Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-105"
        />
        {/* Gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/60" />
      </div>

      <div className="container-max relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Industrial Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-steel-700/30 border border-steel-400/40 backdrop-blur-sm text-white text-[11px] sm:text-xs md:text-sm font-semibold mb-6 tracking-[0.12em] uppercase shadow-lg">
          <span className="relative flex w-2 h-2 shrink-0">
            <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-70 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
          </span>
          Precision CNC Manufacturing
          <span className="opacity-60">•</span>
          Ahmedabad, Gujarat
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-5xl mx-auto tracking-tight drop-shadow-sm">
          {title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-surface-200 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          {primaryCTA && (
            <Link
              href={primaryCTA.href}
              className="btn-primary w-full sm:w-auto shadow-xl shadow-accent/20"
            >
              {primaryCTA.label}
            </Link>
          )}
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="btn-secondary w-full sm:w-auto"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}