import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ProductCard from '@/components/ProductCard';
import IndustrySection from '@/components/IndustrySection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import { SITE_IMAGES, SITE, CAPABILITIES, PRODUCTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'CNC Machining & Industrial Components Manufacturer in Ahmedabad | Velani Metal Industries',
  description:
    'Velani Metal Industries provides CNC machining, CNC turning, CNC milling and industrial component manufacturing services in Ahmedabad, Gujarat.',
};

export default function HomePage() {
  const whyVelaniFeatures = [
    {
      title: 'Manufacturing Approach',
      description: 'Manufactured strictly according to customer engineering drawings, physical samples, and technical specifications.',
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'CNC Machining Capability',
      description: 'Advanced CNC turning and CNC milling setups delivering precision geometries, smooth finishes, and consistent tolerances.',
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Diverse Component Range',
      description: 'Extensive component spectrum including industrial pulleys, transmission shafts, bushings, and custom-machined mechanical parts.',
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Technical Review',
      description: 'Comprehensive engineering drawing analysis and feasibility review before machine setup to ensure zero production ambiguities.',
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Quality Verification',
      description: 'Systematic multi-stage dimensional verification and surface checks throughout machining cycles to maintain required tolerances.',
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Delivery Commitment',
      description: 'Reliable production schedules and proactive communication ensuring your production lines and project milestones stay on time.',
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection
        title="Precision CNC Machining & Industrial Components Manufacturer in Ahmedabad"
        subtitle="Velani Metal Industries manufactures precision CNC turned parts, CNC milled components, industrial pulleys, elevator components and custom engineering parts for mission-critical industrial applications."
        primaryCTA={{ label: 'Request a Quote', href: '/contact/' }}
        secondaryCTA={{ label: 'Explore Our Products', href: '/products-services/' }}
        backgroundImage={SITE_IMAGES.hero}
      />

      {/* 2. Precision Engineering Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-steel-50 border border-steel-200 text-steel-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Engineering Excellence Since 1980
            </div>
            <SectionHeading
              title="Precision Engineering for Industrial Applications"
              subtitle="Manufacturing customized engineering components with high-precision CNC machinery and proven technical expertise."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-navy-800 leading-relaxed text-base">
            <div className="bg-surface-50 p-8 rounded-xl border border-surface-200 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Drawing-Based Precision Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                At Velani Metal Industries, manufacturing is strictly aligned with your exact design parameters. Whether you supply detailed 2D CAD engineering drawings, 3D STEP models, or physical production samples, our team ensures every critical dimension, geometric tolerance, and surface finish requirement is met.
              </p>
              <p className="text-gray-600">
                Operating from our manufacturing unit in Narol, Ahmedabad, we serve machine builders, OEMs, and heavy industrial operations with consistent batch-to-batch repeatability and meticulous inspection.
              </p>
            </div>

            <div className="bg-surface-50 p-8 rounded-xl border border-surface-200 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Reliable Turnkey & Contract Machining</h3>
              <p className="text-gray-600 mb-4">
                Our workshop is equipped with versatile CNC turning centers and CNC milling machinery capable of handling diverse industrial grades of raw material including mild steel, alloy steel, stainless steel, aluminum, and brass.
              </p>
              <p className="text-gray-600">
                From high-torque power transmission pulleys to intricate custom shafts and bearing blocks, we deliver dependable components designed for durability, seamless mechanical fitment, and continuous industrial duty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities */}
      <section className="section-padding bg-surface-50">
        <div className="container-max">
          <SectionHeading
            title="Core Capabilities"
            subtitle="Specialized precision CNC turning, milling, and custom manufacturing services"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {CAPABILITIES.map((capability, index) => (
              <ServiceCard key={index} service={capability} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industrial Components Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <SectionHeading
                title="Industrial Components"
                subtitle="Precision manufactured components engineered for demanding industrial power transmission and mechanical systems"
              />
            </div>
            <Link
              href="/products-services/"
              className="mt-4 md:mt-0 inline-flex items-center text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
            >
              View Full Catalog <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products-services/"
              className="btn-primary inline-flex items-center px-8 py-3.5 text-base"
            >
              View All Products & Services <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Velani Metal Industries */}
      <section className="section-padding bg-surface-50 border-t border-b border-surface-200">
        <div className="container-max">
          <SectionHeading
            title="Why Velani Metal Industries"
            subtitle="The core values, engineering standards, and execution rigor that distinguish our manufacturing approach."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whyVelaniFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-xl border border-surface-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-lg bg-steel-50 border border-steel-100 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries & Applications */}
      <IndustrySection />

      {/* 7. CNC Machining Job Work in Ahmedabad */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="bg-gradient-to-r from-navy-900 to-navy-950 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-block px-3 py-1 rounded bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/30">
                Job Work & Contract Manufacturing
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
                CNC Machining Job Work in Ahmedabad
              </h2>
              <p className="text-surface-200 text-base sm:text-lg leading-relaxed mb-6">
                Looking for dependable CNC turning, CNC milling, or component machining job work in Ahmedabad? Velani Metal Industries undertakes specialized contract manufacturing based on customer raw materials, forged blanks, or complete turnkey raw material sourcing.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact/"
                  className="btn-primary"
                >
                  Discuss Your Requirement
                </Link>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="btn-secondary"
                >
                  Call +91 92272 80524
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Manufacturing Process */}
      <ProcessSection />

      {/* 9. Final CTA */}
      <CTASection
        title="Ready to Discuss Your Manufacturing Requirement?"
        description="Contact our engineering team with your drawings, specifications, or sample components for prompt technical review and quotation."
        primaryCTA={{ label: 'Request a Quote', href: '/contact/' }}
        secondaryCTA={{ label: `Call Us: ${SITE.phone}`, href: `tel:${SITE.phoneRaw}` }}
      />
    </main>
  );
}