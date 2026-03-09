'use client';

import { Children, type ReactNode, useEffect, useMemo, useState } from 'react';

type MobilePagedGridCarouselProps = {
    children: ReactNode;
    itemsPerPage: number;
    pageClassName: string;
    className?: string;
};

export function MobilePagedGridCarousel({
    children,
    itemsPerPage,
    pageClassName,
    className = ''
}: MobilePagedGridCarouselProps) {
    const slides = useMemo(() => Children.toArray(children), [children]);
    const pages = useMemo(() => {
        const grouped: ReactNode[][] = [];

        for (let index = 0; index < slides.length; index += itemsPerPage) {
            grouped.push(slides.slice(index, index + itemsPerPage));
        }

        return grouped;
    }, [itemsPerPage, slides]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    useEffect(() => {
        setActiveIndex(current => Math.min(current, Math.max(pages.length - 1, 0)));
    }, [pages.length]);

    if (pages.length === 0) {
        return null;
    }

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchStartX(event.touches[0]?.clientX ?? null);
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX === null) {
            return;
        }

        const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
        const deltaX = touchStartX - touchEndX;

        if (Math.abs(deltaX) > 40) {
            setActiveIndex(current => {
                if (deltaX > 0) {
                    return Math.min(current + 1, pages.length - 1);
                }

                return Math.max(current - 1, 0);
            });
        }

        setTouchStartX(null);
    };

    return (
        <div className={className}>
            <div className='overflow-hidden touch-pan-y' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <div
                    className='flex w-full transition-transform duration-500 ease-out'
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {pages.map((page, pageIndex) => (
                        <div key={pageIndex} className='w-full min-w-full'>
                            <div className={pageClassName}>{page}</div>
                        </div>
                    ))}
                </div>
            </div>
            {pages.length > 1 ? (
                <div className='mt-4 flex items-center justify-center gap-2'>
                    {pages.map((_, pageIndex) => (
                        <button
                            key={pageIndex}
                            type='button'
                            aria-label={`Go to slide ${pageIndex + 1}`}
                            aria-pressed={activeIndex === pageIndex}
                            onClick={() => setActiveIndex(pageIndex)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                activeIndex === pageIndex ? 'w-6 bg-[var(--accent)]' : 'w-2.5 bg-[#C9BBA7]'
                            }`}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
}
