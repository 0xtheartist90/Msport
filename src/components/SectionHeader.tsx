import type { ReactNode } from 'react';

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  animated?: boolean;
  subtitleClassName?: string;
};

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  animated = true,
  subtitleClassName
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  const spacingClass = align === 'center' ? 'mb-6' : 'mb-4';
  const labelClass = animated ? 'reveal reveal-down' : '';
  const titleClass = animated ? 'reveal reveal-up reveal-delay-1' : '';
  const subtitleClass = animated ? 'reveal reveal-up reveal-delay-2' : '';
  const subtitleBaseClass = subtitleClassName ?? 'subtitle-accent';

  return (
    <div className={`${alignmentClass} ${spacingClass} space-y-1.5`}>
      <p className={`section-label ${labelClass}`}>{label}</p>
      <h2 className={`section-title ${titleClass}`}>{title}</h2>
      {typeof subtitle === 'string' && subtitle.trim().length > 0 ? (
        <p className={`${subtitleBaseClass} ${subtitleClass}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
