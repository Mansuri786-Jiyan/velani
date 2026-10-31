import SectionHeading from './SectionHeading';
import { PROCESS_STEPS } from '@/lib/constants';

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          title="Manufacturing Process"
          subtitle="A structured 6-step manufacturing workflow from technical drawing review to final dimensional inspection."
          centered
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={index}
              className="bg-surface-50 p-6 rounded-xl border border-surface-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center relative group"
            >
              {/* Step Number Circle */}
              <div className="w-12 h-12 bg-steel-600 group-hover:bg-accent text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 shadow-sm transition-colors duration-200">
                0{step.step}
              </div>

              <h3 className="text-base font-bold text-navy-900 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
