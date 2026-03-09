'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

type CoachCard = {
  name: string;
  role: string;
  credential: string;
  image: string;
  description: string;
};

type AcademyCoachesCarouselProps = {
  coaches: readonly CoachCard[];
};

export function AcademyCoachesCarousel({ coaches }: AcademyCoachesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;

    if (Math.abs(deltaX) > 40) {
      setActiveIndex(prev => {
        if (deltaX < 0) {
          return Math.min(prev + 1, coaches.length - 1);
        }

        return Math.max(prev - 1, 0);
      });
    }

    touchStartX.current = null;
  };

  return (
    <div className="md:hidden">
      <div className="w-full overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div
          className="flex w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {coaches.map((coach, index) => (
            <div key={coach.name} className="w-full min-w-full shrink-0">
              <article
                className={`flex h-full flex-col rounded-[30px] border px-5 py-6 shadow-[0_24px_65px_rgba(0,0,0,0.22)] ${
                  index === 1
                    ? 'border-[var(--accent)]/22 bg-[linear-gradient(180deg,rgba(239,68,68,0.12),rgba(255,255,255,0.04))]'
                    : 'border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]'
                }`}
              >
                <div className="mb-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                  <div className="relative aspect-[4/4.4] w-full">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="min-h-[6.5rem]">
                  <p className="text-[0.58rem] uppercase tracking-[0.4em] text-[var(--accent)]">{coach.credential}</p>
                  <h3 className="mt-3 text-3xl font-black text-white">{coach.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-white/80">{coach.role}</p>
                </div>
                <div className="mt-4 h-px w-14 bg-gradient-to-r from-[var(--accent)]/80 to-transparent" />
                <p className="mt-4 min-h-[4.5rem] text-sm leading-relaxed text-white/65">{coach.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {coaches.map((coach, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={coach.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${coach.name}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive ? 'w-8 bg-[var(--accent)]' : 'w-2.5 bg-white/25'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
