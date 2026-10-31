import { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/CTASection';
import { SERVICES, PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'CNC Machining Services & Industrial Components | Velani Metal Industries',
  description: 'Explore CNC turning, CNC milling, precision machining services and industrial components including pulleys, shafts and custom engineered parts.',
};

export default function ProductsServicesPage() {
  const categoryKeys = Object.keys(PRODUCT_CATEGORIES) as Array<keyof typeof PRODUCT_CATEGORIES>;
  
  // Custom ordering: pulleys, machined, elevator, transmission, custom
  const order = ['pulleys', 'machined', 'elevator', 'transmission', 'custom'];
  const orderedCategories = categoryKeys.sort((a, b) => order.indexOf(a) - order.indexOf(b));

  return (
    <main>
      <HeroSection
        title="CNC Machining Services & Industrial Components"
        subtitle="Precision manufacturing services and engineered components for industrial applications"
        primaryCTA={{ label: 'Request a Quote', href: '/contact/' }}
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading title="Our CNC Machining Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                service={{ title: service.title, description: service.description }}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-surface-50 py-16">
        <div className="container-max">
          <div className="mb-16 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Product Portfolio</h2>
             <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Precision engineered components manufactured to exact specifications.</p>
          </div>
          
          <div className="space-y-16">
            {orderedCategories.map(categoryKey => {
              const categoryProducts = PRODUCTS.filter(p => p.category === categoryKey);
              if (categoryProducts.length === 0) return null;
              
              return (
                <section key={categoryKey} id={categoryKey} className="scroll-mt-24">
                  <SectionHeading title={PRODUCT_CATEGORIES[categoryKey]} />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {categoryProducts.map((product, index) => (
                      <ProductCard
                        key={index}
                        product={product}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading title="CNC Machining Job Work" />
          <div className="max-w-3xl mt-8">
            <p className="text-lg text-slate-700 mb-6">
              In addition to our standard product offerings, Velani Metal Industries provides comprehensive CNC machining job work services. We partner with businesses across various sectors to manufacture components based on their specific drawings or physical samples.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              Our advanced CNC turning and milling capabilities, combined with our commitment to quality, make us a reliable partner for both batch production and specialized prototype development. We manage the machining process from material sourcing to final inspection, ensuring the components seamlessly integrate into your assemblies.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Discuss Your Job Work Requirements
            </Link>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Manufacture Your Components?"
        description="Send us your requirements, and our team will provide a tailored manufacturing solution."
        primaryCTA={{ label: 'Contact Us Today', href: '/contact/' }}
      />
    </main>
  );
}
