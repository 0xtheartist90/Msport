"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';

type FacilityGalleryProps = {
  images: string[];
  name: string;
};

const arrowButtonClasses =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d4cec2] bg-white/80 text-sm font-semibold text-[#1F1D19] shadow-sm transition-colors hover:bg-white disabled:opacity-40';

const FacilityGallery = ({ images, name }: FacilityGalleryProps) => {
  const sanitizedImages = useMemo(
    () => images.filter(image => !image.toLowerCase().includes('logo')),
    [images]
  );
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const visibleSlots = 3;

  if (!sanitizedImages.length) {
    return null;
  }

  const prev = () =>
    setIndex(current => (current === 0 ? sanitizedImages.length - 1 : current - 1));
  const next = () =>
    setIndex(current => (current === sanitizedImages.length - 1 ? 0 : current + 1));

  const openModal = (targetIndex: number) => {
    setIndex(targetIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {sanitizedImages.length > 1 ? (
          <button type="button" onClick={prev} aria-label="Previous image" className={arrowButtonClasses}>
            ←
          </button>
        ) : null}
        <div className="grid flex-1 gap-3 md:grid-cols-3">
          {Array.from({ length: Math.min(visibleSlots, sanitizedImages.length) }).map((_, offset) => {
            const imageIndex = (index + offset) % sanitizedImages.length;

            return (
              <button
                key={`${name}-preview-${imageIndex}`}
                type="button"
                onClick={() => openModal(imageIndex)}
                className="relative aspect-video overflow-hidden rounded-xl border border-[#E1DED6] focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                <Image
                  src={sanitizedImages[imageIndex]}
                  alt={`${name} gallery image ${imageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
        {sanitizedImages.length > 1 ? (
          <button type="button" onClick={next} aria-label="Next image" className={arrowButtonClasses}>
            →
          </button>
        ) : null}
      </div>
      {sanitizedImages.length > visibleSlots ? (
        <div className="flex justify-center gap-2 pt-2">
          {sanitizedImages.map((_, dotIndex) => (
            <button
              key={`${name}-dot-${dotIndex}`}
              type="button"
              aria-label={`Go to image ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-2 w-8 rounded-full transition-colors ${dotIndex === index ? 'bg-[var(--accent)]' : 'bg-[#D5D0C5]'}`}
            />
          ))}
        </div>
      ) : null}

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8">
          <button
            type="button"
            aria-label="Close gallery"
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ×
          </button>
          <div className="flex items-center gap-4 w-full max-w-5xl">
            {sanitizedImages.length > 1 ? (
              <button type="button" onClick={prev} aria-label="Previous image" className={arrowButtonClasses}>
                ←
              </button>
            ) : null}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/30">
              <Image
                src={sanitizedImages[index]}
                alt={`${name} gallery image ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
            {sanitizedImages.length > 1 ? (
              <button type="button" onClick={next} aria-label="Next image" className={arrowButtonClasses}>
                →
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FacilityGallery;
