import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { SITE, SITE_IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact CNC Machining Manufacturer in Ahmedabad | Velani Metal Industries',
  description:
    'Contact Velani Metal Industries for CNC machining services, industrial components and manufacturing enquiries in Ahmedabad, Gujarat.',
};

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        title="Contact Velani Metal Industries"
        subtitle="Get in touch for CNC machining services, component manufacturing enquiries, technical drawing review and quotations."
        backgroundImage={SITE_IMAGES.hero}
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">Send Your Requirement</h2>
                <p className="text-gray-600">
                  Fill in the form below with your component details or attach technical drawings (PDF, DWG, DXF, STEP) for a prompt technical review.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right Column - Contact Info & Live Map (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Company Info Box */}
              <div className="bg-surface-50 p-6 sm:p-8 rounded-2xl border border-surface-200">
                <h3 className="text-xl font-bold text-navy-900 tracking-wide mb-4">
                  {SITE.name}
                </h3>

                <div className="space-y-5 text-sm sm:text-base">
                  <div>
                    <span className="text-xs uppercase font-bold text-steel-600 block mb-1">Factory Location</span>
                    <p className="text-navy-800 leading-relaxed font-medium">
                      {SITE.address.line1}<br />
                      {SITE.address.line2}<br />
                      {SITE.address.line3}<br />
                      {SITE.address.line4}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-surface-200">
                    <span className="text-xs uppercase font-bold text-steel-600 block mb-1">Direct Phone</span>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      className="text-navy-900 hover:text-accent font-semibold text-lg transition-colors inline-block"
                    >
                      {SITE.phone}
                    </a>
                  </div>

                  <div className="pt-2 border-t border-surface-200">
                    <span className="text-xs uppercase font-bold text-steel-600 block mb-1">Email Enquiries</span>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-navy-900 hover:text-accent font-semibold transition-colors inline-block"
                    >
                      {SITE.email}
                    </a>
                  </div>

                  <div className="pt-2 border-t border-surface-200">
                    <span className="text-xs uppercase font-bold text-steel-600 block mb-1.5">Quick WhatsApp</span>
                    <a
                      href={SITE.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map Box */}
              <div className="rounded-2xl overflow-hidden border border-surface-200 shadow-md bg-surface-100 flex flex-col">
                <div className="h-72 w-full relative">
                  <iframe
                    title="Velani Metal Industries Location Map"
                    src={SITE.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4 bg-white border-t border-surface-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-gray-600 text-center sm:text-left">
                    <span className="font-bold text-navy-900 block">VELANI METAL INDUSTRIES</span>
                    4/A, Sardar Patel Industrial Estate, B/H Gujarat Petrol Pump, Narol - Vatva Rd, Ahmedabad – 382405
                  </div>
                  <a
                    href={SITE.mapsDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs py-2 px-4 whitespace-nowrap w-full sm:w-auto text-center"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call CTA */}
      <section className="py-16 gradient-navy text-white text-center">
        <div className="container-max px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prefer to Discuss Over a Call?</h2>
          <p className="text-base sm:text-lg text-surface-200 mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to discuss your component specifications, material grades, and production requirements.
          </p>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center gap-3 shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call {SITE.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
