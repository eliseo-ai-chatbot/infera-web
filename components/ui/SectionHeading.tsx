interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
