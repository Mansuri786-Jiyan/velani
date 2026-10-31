import SectionHeading from './SectionHeading';
import { INDUSTRIES } from '@/lib/constants';

export default function IndustrySection() {
  return (
    <section className="section-padding bg-surface-50">
      <div className="container-max">
        <SectionHeading title="Industries & Applications" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {INDUSTRIES.map((industry, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-surface-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-surface-50 text-steel-600 flex items-center justify-center rounded-full text-3xl mb-6">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">{industry.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
