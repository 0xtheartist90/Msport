'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type RangeMetric = {
  value: string;
  label: string;
  detail: string;
};

type USPSectionProps = {
  metrics: RangeMetric[];
  campusLabel?: string;
};

export function USPSection({ metrics, campusLabel }: USPSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 20 });
  const [isActive, setIsActive] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [displayValues, setDisplayValues] = useState(() =>
    metrics.map(metric => {
      const numericValue = Number(metric.value.replace(/[^\d]/g, ''));
      const suffix = metric.value.replace(/[\d]/g, '');

      return numericValue ? `0${suffix}` : metric.value;
    })
  );
  const revealDelayClasses = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-5'];

  const metricLinks: Record<string, string> = {
    '8': '/about',
    '68': '/contact',
    '10+': '/facilities',
    '3': '/simulators',
    '7': '/academy'
  };

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
    if (!isActive) {
      setIsActive(true);
    }
  };

  const handleLeave = () => {
    setPosition({ x: 50, y: 20 });
    setIsActive(false);
  };

  useEffect(() => {
    const gridNode = gridRef.current;
    if (!gridNode) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(gridNode);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEnteredView) return;

    const duration = 3200;
    const start = window.performance.now();
    let frameId = 0;

    const targets = metrics.map(metric => {
      const numericValue = Number(metric.value.replace(/[^\d]/g, ''));
      const suffix = metric.value.replace(/[\d]/g, '');

      return { numericValue, suffix, fallback: metric.value };
    });

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValues(
        targets.map(target => {
          if (!target.numericValue) return target.fallback;

          const currentValue = Math.max(0, Math.round(target.numericValue * easedProgress));

          return `${currentValue}${target.suffix}`;
        })
      );

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [hasEnteredView, metrics]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#1B1B1A] text-white border-t border-white/5 overflow-hidden"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute h-[220px] w-[300px] rounded-full bg-[radial-gradient(circle,_rgba(185,28,28,0.5)_0%,_rgba(13,13,11,0)_60%)] blur-[70px]"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: 'translate(-50%, -50%)',
            opacity: isActive ? 1 : 0,
            transition: 'opacity 300ms ease'
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10 py-16">
        {campusLabel && (
          <p className="mb-10 label-accent text-center lg:text-left">{campusLabel}</p>
        )}
        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric, index) => {
          const href = metricLinks[metric.value];
          const delayClass = revealDelayClasses[index % revealDelayClasses.length];

          const card = (
            <article
              className="relative overflow-hidden rounded-[30px] px-8 py-10 bg-gradient-to-b from-white/12 via-white/6 to-transparent border border-white/12 shadow-[0_35px_90px_rgba(0,0,0,0.45)] flex min-h-[240px] h-full flex-col gap-7 transition-all duration-500 ease-out transform-gpu group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-[0_45px_120px_rgba(0,0,0,0.55)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0%,_transparent_55%)] animate-pulse" />
              </div>
              <div className="absolute inset-x-[-40%] top-[-120%] h-[260%] rotate-6 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />

              <div className="min-h-[4.75rem]">
                <p className="text-[clamp(3.2rem,5.8vw,4.7rem)] font-black tracking-tight text-white leading-none transition-transform duration-500 group-hover:-translate-y-1">
                  {displayValues[index] ?? metric.value}
                </p>
              </div>
              <div className="mt-auto min-h-[7.5rem] space-y-4">
                <p className="text-lg font-semibold text-white/90 uppercase tracking-[0.08em] transition-colors duration-300 group-hover:text-white">
                  {metric.label}
                </p>
                <div className="h-[1px] w-16 bg-gradient-to-r from-[#b91c1c] via-[#ef4444] to-transparent transition-all duration-500 group-hover:w-20" />
                <p className="text-sm text-white/70 transition-opacity duration-500 group-hover:text-white/85">{metric.detail}</p>
              </div>

              <div className="absolute inset-0 border border-white/0 rounded-[30px] group-hover:border-white/15 transition-colors duration-500 pointer-events-none" aria-hidden="true" />
            </article>
          );

          if (href) {
            return (
              <Link
                key={metric.label}
                href={href}
                className={`group block h-full rounded-[30px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 reveal reveal-up ${delayClass}`}
              >
                {card}
              </Link>
            );
          }

          return (
            <div key={metric.label} className={`group block h-full reveal reveal-up ${delayClass}`}>
              {card}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
