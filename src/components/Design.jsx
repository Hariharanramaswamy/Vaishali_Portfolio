export default function Design() {
  return (
    <section id="design" aria-labelledby="design-h" className="py-[clamp(88px,12vw,168px)]">
      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)]">
        {/* Section header — shead */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-[clamp(20px,4vw,60px)] items-start mb-[clamp(40px,6vw,74px)]">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-text-secondary pt-3 border-t border-text-primary max-sm:border-0 max-sm:pt-0">
            05 / Design
          </p>
          <div>
            {/*
              design-statement — large gradient-text heading
              Note: margin-bottom:0 is intentional (matches original override)
            */}
            <h2
              id="design-h"
              className="max-w-[22ch] font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.12] tracking-[-0.03em] m-0"
            >
              My creative portfolio spans{' '}
              <em className="design-gradient-text">
                branding, product visuals and 3D explorations.
              </em>
            </h2>
          </div>
        </div>

        {/*
          Bug fix: removed stray `padding-left: 0` inline style from the wrapper div.
          The inner shead is used here purely to align the CTA button in the right column.
        */}
        <div className="reveal">
          <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-[clamp(20px,4vw,60px)] items-start">
            {/* Empty left column placeholder (keeps alignment with shead above) */}
            <span aria-hidden="true" />
            {/* CTA button */}
            <a
              href="https://www.behance.net/vaishaliramaswamy"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[10px] px-[26px] py-[14px] border border-purple rounded-pill text-[0.92rem] font-medium tracking-[-0.01em] bg-purple text-on-accent shadow-[0_8px_24px_-10px_rgba(223,197,254,.55)] hover:bg-purple-hover hover:border-purple-hover hover:shadow-[0_10px_30px_-8px_rgba(223,197,254,.7)] hover:-translate-y-px transition-all duration-[250ms] w-fit"
            >
              Explore Behance
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-[14px] h-[14px] flex-none">
                <path d="M5 11l6-6M6 5h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
