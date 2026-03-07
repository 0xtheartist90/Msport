'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

interface ArticleGalleryProps {
  images: string[];
  title: string;
}

export function ArticleGallery({ images, title }: ArticleGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const VISIBLE_COUNT = 3;
  const hasOverflow = images.length > VISIBLE_COUNT;
  const displayedImages = useMemo(() => {
    if (!hasOverflow) {
      return images;
    }

    return Array.from({ length: VISIBLE_COUNT }, (_, offset) => {
      const index = (startIndex + offset) % images.length;
      
return { src: images[index], key: `${images[index]}-${index}` };
    });
  }, [hasOverflow, images, startIndex]);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!hasOverflow) return;
    setStartIndex(prev => {
      if (direction === 'prev') {
        return (prev - 1 + images.length) % images.length;
      }
      
return (prev + 1) % images.length;
    });
  };

  return (
    <>
      <div className="relative">
        {hasOverflow && (
          <>
            <button
              type="button"
              className="absolute left-0 top-1/2 hidden -translate-y-1/2 translate-x-[-120%] rounded-full border border-[#d9d0c2] bg-white px-3 py-2 text-xs tracking-[0.3em] uppercase text-[#7c776b] shadow-lg transition hover:text-[#af5a4a] lg:block"
              onClick={() => handleNavigate('prev')}
            >
              ←
            </button>
            <button
              type="button"
              className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[120%] rounded-full border border-[#d9d0c2] bg-white px-3 py-2 text-xs tracking-[0.3em] uppercase text-[#7c776b] shadow-lg transition hover:text-[#af5a4a] lg:block"
              onClick={() => handleNavigate('next')}
            >
              →
            </button>
          </>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedImages.map(image => {
            const src = typeof image === 'string' ? image : image.src;
            const key = typeof image === 'string' ? image : image.key;

            return (
              <button
                type="button"
                key={key}
                onClick={() => setActiveImage(src)}
                className="relative aspect-[5/3] w-full overflow-hidden rounded-[24px] border border-[#e6dfcf] bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ad6752]/30"
              >
                <Image
                  src={src}
                  alt={`${title} gallery image`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                />
              </button>
            );
          })}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm tracking-[0.35em] uppercase"
            >
              Close
            </button>
            <div className="relative w-full overflow-hidden rounded-[24px] bg-black">
              <Image src={activeImage} alt={`${title} enlarged`} width={1600} height={900} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
