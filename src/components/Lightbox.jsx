import { useEffect, useRef } from 'react';
import Img from './shared/Img';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext, onSetIndex }) {
  const closeRef = useRef(null);
  const prevFocusRef = useRef(null);

  // Focus trap + keyboard nav
  useEffect(() => {
    prevFocusRef.current = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prevFocusRef.current?.focus();
    };
  }, [onClose, onPrev, onNext]);

  const img = images[currentIndex];
  if (!img) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(6,6,8,0.96)] p-[clamp(16px,4vw,48px)]"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close */}
      <button
        ref={closeRef}
        aria-label="Close viewer"
        onClick={onClose}
        className="absolute top-[18px] right-[18px] w-[42px] h-[42px] rounded-pill bg-[rgba(255,255,255,0.04)] border border-[rgba(223,197,254,0.25)] text-white text-[1.1rem] flex items-center justify-center hover:border-purple hover:bg-purple-tint transition-all duration-[250ms]"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        aria-label="Previous image"
        onClick={onPrev}
        className="absolute top-1/2 left-[14px] -translate-y-1/2 w-[42px] h-[42px] rounded-pill bg-[rgba(255,255,255,0.04)] border border-[rgba(223,197,254,0.25)] text-white text-[1.1rem] flex items-center justify-center hover:border-purple hover:bg-purple-tint transition-all duration-[250ms]"
      >
        ‹
      </button>

      {/* Next */}
      <button
        aria-label="Next image"
        onClick={onNext}
        className="absolute top-1/2 right-[14px] -translate-y-1/2 w-[42px] h-[42px] rounded-pill bg-[rgba(255,255,255,0.04)] border border-[rgba(223,197,254,0.25)] text-white text-[1.1rem] flex items-center justify-center hover:border-purple hover:bg-purple-tint transition-all duration-[250ms]"
      >
        ›
      </button>

      {/* Image */}
      <figure className="m-0 flex flex-col items-center">
        <Img
          src={img.src}
          alt={img.alt || ''}
          width={1100}
          height={800}
          className="max-w-[min(1100px,92vw)] max-h-[82vh] object-contain rounded-md"
        />
        {img.caption && (
          <figcaption className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-text-secondary text-center mt-4">
            {img.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
