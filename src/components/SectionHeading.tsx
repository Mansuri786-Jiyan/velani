interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      <div className={`w-[60px] h-1 bg-steel-600 mb-6 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-surface-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
