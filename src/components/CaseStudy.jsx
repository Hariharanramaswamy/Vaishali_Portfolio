import React from 'react';
import Img from './shared/Img';

/**
 * Reusable WorkCols — the 2-column label + content rows within each case study.
 * Uses the shared gap-section token via inline clamp.
 */
function WorkCols({ label, children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-[clamp(20px,4vw,60px)] items-start mb-[clamp(28px,4vw,44px)] last:mb-0">
      <h4 className="font-mono text-[0.72rem] font-medium tracking-[0.16em] uppercase text-text-secondary pt-[5px] max-sm:border-t-0 max-sm:pt-0">
        {label}
      </h4>
      <div>{children}</div>
    </div>
  );
}

/**
 * Responsibility list — two-column on desktop, single on mobile.
 */
function ResponsibilityList({ items }) {
  return (
    <ul className="list-none m-0 p-0 grid grid-cols-2 max-sm:grid-cols-1 gap-y-0 gap-x-[clamp(20px,4vw,50px)]">
      {items.map(({ n, text }) => (
        <li
          key={n}
          className="py-[11px] border-b border-border-soft text-[0.95rem] grid grid-cols-[auto_1fr] gap-3"
        >
          <span className="font-mono text-[0.74rem] text-purple pt-[3px]">{n}</span>
          {text}
        </li>
      ))}
    </ul>
  );
}

/**
 * Results list — 3 columns on desktop, 1 on mobile.
 * Bug fix: at mobile breakpoint, all li get px-0 (not just li+li).
 */
function ResultsList({ items }) {
  return (
    <ul className="list-none m-0 p-0 grid grid-cols-3 max-sm:grid-cols-1 border-t border-border">
      {items.map(({ stat, label }, i) => (
        <li
          key={i}
          className={[
            // Desktop: first item no left pad; subsequent get left border + left pad
            i === 0
              ? 'py-[22px] pr-[clamp(14px,2vw,26px)]'
              : 'py-[22px] pr-[clamp(14px,2vw,26px)] border-l border-border pl-[clamp(18px,3vw,32px)]',
            // Mobile: zero out both sides for all items (bug fix)
            'max-sm:px-0 max-sm:border-l-0 max-sm:border-t max-sm:border-border',
          ].join(' ')}
        >
          <b className="block font-mono font-medium text-[clamp(1.5rem,2.6vw,2rem)] tracking-[-0.03em] leading-[1.1] tabular-nums text-purple">
            {stat}
          </b>
          <span className="block mt-2 text-[0.86rem] text-text-secondary leading-[1.45]">{label}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Skills chips list.
 */
function Chips({ items }) {
  return (
    <ul className="list-none m-0 p-0 flex flex-wrap gap-2">
      {items.map((chip) => (
        <li
          key={chip}
          className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-purple border border-purple-tint-strong bg-purple-tint px-[14px] py-[7px] rounded-pill cursor-default transition-all duration-[250ms] hover:bg-purple-tint-strong hover:border-purple"
        >
          {chip}
        </li>
      ))}
    </ul>
  );
}

/**
 * Gallery — manual slideshow controlled via Prev / Next arrow buttons.
 */
function Gallery({ images, onOpen, galleryOffset }) {
  const [current, setCurrent] = React.useState(0);
  const total = images.length;

  function prev() { setCurrent((c) => (c - 1 + total) % total); }
  function next() { setCurrent((c) => (c + 1) % total); }

  return (
    <div className="relative overflow-hidden pb-1">
      {/* Sliding strip */}
      <div
        className="flex gap-4 transition-transform duration-500 ease-out"
        style={{ transform: `translateX(calc(-${current} * (300px + 16px)))` }}
      >
        {images.map(({ src, alt, caption, ariaLabel, isVideo, type }, localIdx) => (
          <figure
            key={src}
            className="m-0 flex-none w-[300px] overflow-hidden border border-border-soft rounded-xl bg-card group"
          >
            {isVideo || type === 'video' ? (
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                className="w-full object-cover"
                style={{ aspectRatio: '3/2' }}
              />
            ) : (
              <button
                type="button"
                aria-label={ariaLabel}
                onClick={() => onOpen(galleryOffset + localIdx)}
                className="block w-full p-0 border-0 bg-transparent cursor-pointer"
              >
                <Img
                  src={src}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  alt={alt}
                  className="w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                  style={{ aspectRatio: '3/2' }}
                />
              </button>
            )}
            <figcaption className="font-mono text-[0.67rem] tracking-[0.12em] uppercase text-text-secondary px-3 py-[10px] border-t border-border-soft">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Prev / Next navigation arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-2 top-[calc(50%-16px)] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/90 backdrop-blur-md border border-border text-text-primary flex items-center justify-center hover:bg-purple hover:text-on-accent hover:border-purple shadow-lg transition-all duration-200"
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-4.5 h-4.5"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next photo"
        className="absolute right-2 top-[calc(50%-16px)] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/90 backdrop-blur-md border border-border text-text-primary flex items-center justify-center hover:bg-purple hover:text-on-accent hover:border-purple shadow-lg transition-all duration-200"
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-4.5 h-4.5"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-[6px] mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-[6px] rounded-full transition-all duration-300 ${
              i === current ? 'bg-purple w-5' : 'bg-border-soft w-[6px] hover:bg-text-secondary'
            }`}
          />
        ))}
      </div>
    </div>
  );
}


/**
 * Full CaseStudy card.
 */
export default function CaseStudy({ study, onOpenLightbox, galleryOffset }) {
  const {
    caseNo,
    title,
    kicker,
    banner,
    challenge,
    responsibilities,
    gallery,
    results,
    chips,
    reflection,
  } = study;

  return (
    <article className="reveal border-t border-border pt-[clamp(30px,4vw,48px)]">
      {/* Header */}
      <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-[clamp(20px,4vw,60px)] items-start mb-[clamp(28px,4vw,44px)]">
        <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-purple">{caseNo}</p>
        <div>
          <h3 className="mb-3 max-w-[22ch]">{title}</h3>
          <p className="font-mono text-[0.74rem] tracking-[0.1em] uppercase text-text-secondary">{kicker}</p>
        </div>
      </div>

      {/* Banner */}
      <figure className="m-0 mb-[clamp(28px,4vw,48px)] overflow-hidden border border-border-soft rounded-lg bg-card shadow-card group">
        <Img
          src={banner.src}
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          alt={banner.alt}
          className="w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.03]"
          style={{ aspectRatio: '16/9' }}
        />
      </figure>

      {/* Challenge */}
      <WorkCols label="Challenge">
        {challenge.map((p, i) => (
          <p key={i} className="text-text-secondary max-w-[66ch]" dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </WorkCols>

      {/* Responsibilities */}
      <WorkCols label="Responsibilities">
        <ResponsibilityList items={responsibilities} />
      </WorkCols>

      {/* Gallery — only shown when photos are available */}
      {gallery && gallery.length > 0 && (
        <WorkCols label="Gallery">
          <Gallery images={gallery} onOpen={onOpenLightbox} galleryOffset={galleryOffset} />
        </WorkCols>
      )}

      {/* Results */}
      <WorkCols label="Results">
        <ResultsList items={results} />
      </WorkCols>

      {/* Skills */}
      <WorkCols label="Skills Used">
        <Chips items={chips} />
      </WorkCols>

      {/* Reflection */}
      <WorkCols label="Reflection">
        <blockquote className="border-l-2 border-purple pl-[26px] py-[6px] max-w-[62ch] m-0">
          <p className="font-display text-[clamp(1.08rem,1.6vw,1.32rem)] leading-[1.5] tracking-[-0.02em] text-text-primary">
            {reflection}
          </p>
        </blockquote>
      </WorkCols>
    </article>
  );
}
