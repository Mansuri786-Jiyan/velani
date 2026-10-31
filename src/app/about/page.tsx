import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE_IMAGES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Velani Metal Industries | CNC Manufacturer in Ahmedabad",
  description:
    "Learn about Velani Metal Industries, established in 1980 by Praful Velani, specializing in precision CNC machining and industrial component manufacturing in Ahmedabad.",
};

const manufacturingSteps = [
  {
    step: "01",
    title: "Customer Drawings & Technical Specs",
    description:
      "We work directly from 2D engineering drawings, CAD files, and technical specifications provided by customers to establish clear dimensional and finishing requirements.",
  },
  {
    step: "02",
    title: "Samples & Reference Components",
    description:
      "When engineering drawings are unavailable, our machining specialists measure and evaluate physical samples to reproduce components with precise accuracy.",
  },
  {
    step: "03",
    title: "Dimensional Tolerances & Clearances",
    description:
      "Components are machined to tight dimensional tolerances, ensuring reliable fitment and seamless operation in mechanical and power transmission assemblies.",
  },
  {
    step: "04",
    title: "Material Selection & Standards",
    description:
      "We process appropriate industrial raw materials suitable for mechanical strength, wear resistance, and the specific application environment.",
  },
  {
    step: "05",
    title: "CNC Machining Operations",
    description:
      "Optimized CNC turning and CNC milling setups with calibrated tooling and high-precision cutting parameters to achieve dimensional repeatability.",
  },
  {
    step: "06",
    title: "Quality Verification & Consistency",
    description:
      "Systematic dimensional checks and visual inspection conducted throughout production runs to ensure every component conforms to specifications.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <HeroSection
        title="About Velani Metal Industries"
        subtitle="Precision CNC Machining & Industrial Component Manufacturing in Ahmedabad — Built on over four decades of engineering legacy."
        primaryCTA={{ label: "Contact Us", href: "/contact/" }}
        secondaryCTA={{
          label: "Explore Products",
          href: "/products-services/",
        }}
        backgroundImage={SITE_IMAGES.workshopOverview}
      />

      {/* Company Overview with Image */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-steel-50 border border-steel-200 text-steel-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Established 1980 • Ahmedabad
              </div>
              <SectionHeading
                title="Engineering Precision Since 1980"
                subtitle="Dedicated to high-accuracy CNC turning, CNC milling and custom industrial component manufacturing."
              />
              <div className="space-y-6 text-lg text-navy-800 leading-relaxed">
                <p>
                  Velani Metal Industries is an established industrial
                  manufacturing company based in Narol, Ahmedabad, Gujarat.
                  Established in 1980 in Vatva, Ahmedabad, the company has
                  evolved through decades of technical commitment into a
                  specialized precision CNC machining and industrial components
                  manufacturer.
                </p>
                <p>
                  Our manufacturing approach is centered around
                  customer-specified dimensions, engineering tolerances, and
                  mechanical requirements. By combining CNC turning, CNC
                  milling, and custom job work, we deliver reliable
                  manufacturing solutions ranging from industrial pulleys and
                  transmission shafts to specialized custom-machined parts.
                </p>
                <p>
                  Operating from Ahmedabad&apos;s industrial hub, we are
                  committed to transparent engineering communication, thorough
                  quality verification, and reliable delivery schedules for all
                  manufacturing batches and contract machining work.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-200">
              <img
                src={SITE_IMAGES.qualityInspection}
                alt="Precision Engineering and Quality Inspection at Velani Metal Industries"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-xs uppercase tracking-wider text-accent font-bold mb-1">
                    Quality Assurance
                  </div>
                  <div className="text-xl font-bold">
                    Rigorous Dimensional Inspection
                  </div>
                  <p className="text-sm text-surface-200 mt-1">
                    Every component verified against engineering drawings and
                    technical tolerances
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Premium Heritage & Leadership Section (Single Photo + Story Layout) */}
      <section className="section-padding bg-surface-50 border-t border-b border-surface-200">
        <div className="container-max">
          <SectionHeading
            title="Our Heritage & Leadership"
            subtitle="Founded on strong engineering principles and driven by two generations of technical expertise."
            centered
          />

          <div className="mt-12 bg-white rounded-3xl border border-surface-200 shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Viral Velani Photo Card */}
              <div className="lg:col-span-5 relative bg-gradient-to-br from-navy-950 via-navy-900 to-steel-900 flex flex-col justify-end p-8 min-h-[460px]">
                {/* Photo Background */}
                <img
                  src="/images/about/viral-velani.webp"
                  alt="Viral Velani - Managing Director, Velani Metal Industries"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />

                {/* Gradient shade over photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent pointer-events-none" />

                {/* Badge top left */}
                <div className="absolute top-6 left-6 z-10 bg-navy-900/90 backdrop-blur-md border border-navy-700 px-3.5 py-1.5 rounded-full text-xs font-bold text-accent shadow-md">
                  Second Generation Leadership
                </div>

                {/* Person details overlay at bottom */}
                <div className="relative z-10 text-white">
                  <span className="text-xs uppercase font-bold tracking-widest text-accent block mb-1">
                    Managing Director
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Viral Velani
                  </h3>
                  <p className="text-sm font-medium text-surface-200 mt-1">
                    B.E. (Mechanical), MBA
                  </p>
                  <p className="text-xs text-surface-300 mt-2">
                    Leading Precision CNC Operations &amp; Manufacturing
                  </p>
                </div>
              </div>

              {/* Right Column: Complete Heritage & Journey Description */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-steel-50 border border-steel-200 text-steel-700 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Over 40 Years of Manufacturing Roots
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 leading-tight">
                  Two Generations of Technical Rigor &amp; CNC Modernization
                </h3>

                {/* Timeline / Highlights */}
                <div className="space-y-6">
                  {/* Founder Milestone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-0.5">
                      🏛️
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                          Established 1980
                        </span>
                        <h4 className="text-lg font-bold text-navy-900">
                          Praful Velani{" "}
                          <span className="text-sm font-normal text-gray-500">
                            (Founder)
                          </span>
                        </h4>
                      </div>
                      <p className="text-xs font-semibold text-accent mb-1.5">
                        B.E. (Mechanical &amp; Electrical)
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Business was established by{" "}
                        <strong>Praful Velani</strong> in 1980 in Vatva,
                        Ahmedabad. With dual degrees in Mechanical and
                        Electrical engineering, he built the company&apos;s
                        technical cornerstone, specializing in machine
                        components and dependable industrial drive solutions.
                      </p>
                    </div>
                  </div>

                  {/* Second Generation Milestone */}
                  <div className="flex items-start gap-4 pt-4 border-t border-surface-200">
                    <div className="w-12 h-12 rounded-xl bg-steel-500/10 border border-steel-500/30 text-steel-600 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-0.5">
                      ⚙️
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-steel-700 bg-steel-100 px-2 py-0.5 rounded">
                          Modern Era
                        </span>
                        <h4 className="text-lg font-bold text-navy-900">
                          Viral Velani{" "}
                          <span className="text-sm font-normal text-gray-500">
                            (Managing Director)
                          </span>
                        </h4>
                      </div>
                      <p className="text-xs font-semibold text-accent mb-1.5">
                        B.E. (Mechanical), MBA
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Currently managed by second-generation leader{" "}
                        <strong>Viral Velani</strong>. Bringing together core
                        mechanical engineering and modern management, he
                        spearheads the modernization into high-precision CNC
                        turning, CNC milling, and precision engineering job work
                        across India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Approach */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            title="Our Manufacturing Approach"
            subtitle="A systematic engineering workflow designed to ensure dimensional accuracy, material compliance, and repeat consistency."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {manufacturingSteps.map((step, index) => (
              <div
                key={index}
                className="bg-surface-50 p-8 rounded-xl shadow-sm border border-surface-200 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="text-4xl font-extrabold text-surface-200/80 absolute top-4 right-6 pointer-events-none">
                  {step.step}
                </div>
                <div className="w-10 h-10 rounded-lg bg-steel-600/10 text-steel-600 font-bold flex items-center justify-center mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Manufacture */}
      <section className="section-padding bg-surface-50">
        <div className="container-max">
          <SectionHeading
            title="What We Manufacture"
            subtitle="Explore our comprehensive range of precision-machined industrial components"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-white rounded-xl border border-surface-200 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-steel-600 font-bold mb-2">
                  Power Transmission & Lifts
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Industrial & Elevator Pulleys
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Precision-manufactured V Groove, Flat Belt, Poly-V, Taper
                  Lock, and Elevator traction pulleys with accurate groove
                  geometry and dynamic balance.
                </p>
              </div>
              <Link
                href="/products-services/#pulleys"
                className="text-accent font-semibold text-sm hover:text-accent-hover inline-flex items-center"
              >
                View Pulleys <span className="ml-2">&rarr;</span>
              </Link>
            </div>

            <div className="p-8 bg-white rounded-xl border border-surface-200 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-steel-600 font-bold mb-2">
                  Precision Machining
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  CNC Turned & Milled Parts
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Cylindrical turned parts, stepped shafts, bushings, adapters,
                  slots, pockets, and complex geometries machined to customer
                  drawings.
                </p>
              </div>
              <Link
                href="/products-services/#machined"
                className="text-accent font-semibold text-sm hover:text-accent-hover inline-flex items-center"
              >
                View Machined Parts <span className="ml-2">&rarr;</span>
              </Link>
            </div>

            <div className="p-8 bg-white rounded-xl border border-surface-200 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-steel-600 font-bold mb-2">
                  Drive Systems
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Transmission Components
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Precision-ground transmission shafts and taper lock bushes
                  designed for reliable torque transmission and easy mounting.
                </p>
              </div>
              <Link
                href="/products-services/#transmission"
                className="text-accent font-semibold text-sm hover:text-accent-hover inline-flex items-center"
              >
                View Transmission Parts <span className="ml-2">&rarr;</span>
              </Link>
            </div>

            <div className="p-8 bg-white rounded-xl border border-surface-200 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-steel-600 font-bold mb-2">
                  Engineered to Order
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Custom Components
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Custom CAM components, pillow bearing housings, tube mill
                  parts, and application-specific mechanical assemblies.
                </p>
              </div>
              <Link
                href="/products-services/#custom"
                className="text-accent font-semibold text-sm hover:text-accent-hover inline-flex items-center"
              >
                View Custom Components <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Discuss Your Component Requirement"
        description="Contact us with your drawings, specifications, or physical samples for precision CNC machining and manufacturing in Ahmedabad."
        primaryCTA={{ label: "Contact Us", href: "/contact/" }}
        secondaryCTA={{
          label: `Call Us: ${SITE.phone}`,
          href: `tel:${SITE.phoneRaw}`,
        }}
      />
    </main>
  );
}
