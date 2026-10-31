import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTASection({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="section-padding gradient-navy text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }} 
      />
      <div className="container-max relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
        <p className="text-surface-200 max-w-2xl mx-auto text-lg mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href={primaryCTA.href} className="btn-primary">
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link href={secondaryCTA.href} className="btn-secondary text-white border-white hover:bg-white hover:text-navy-900">
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
