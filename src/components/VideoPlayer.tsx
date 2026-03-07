"use client";

import { useEffect, useRef, useState } from 'react';
import type { VideoHTMLAttributes } from 'react';

export type VideoPlayerProps = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  sourceType?: string;
  observe?: boolean;
};

export default function VideoPlayer({
  src,
  sourceType,
  observe = true,
  className,
  playsInline = true,
  muted = true,
  loop = true,
  autoPlay = true,
  ...props
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasAttemptedPlay, setHasAttemptedPlay] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (!observe) {
      videoEl.play().catch(() => undefined);
      
return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => undefined);
            setHasAttemptedPlay(true);
          } else if (hasAttemptedPlay) {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, [observe, hasAttemptedPlay]);

  const type = sourceType ?? (src.toLowerCase().endsWith('.mp4') ? 'video/mp4' : 'video/webm');

  return (
    <video
      ref={videoRef}
      className={className}
      playsInline={playsInline}
      muted={muted}
      loop={loop}
      autoPlay={autoPlay}
      {...props}
    >
      <source src={src} type={type} />
    </video>
  );
}
