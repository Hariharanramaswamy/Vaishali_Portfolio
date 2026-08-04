import Img from './shared/Img';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-[clamp(40px,6vw,84px)_0_clamp(50px,7vw,96px)] overflow-hidden"
      style={{ paddingBlock: 'clamp(40px,6vw,84px) clamp(50px,7vw,96px)' }}
    >
      {/* Background blobs + grid */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-0"
        style={{ inset: '-10% -10% auto -10%', height: '130%' }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'linear-gradient(to right,rgba(223,197,254,.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(223,197,254,.06) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 60% 55% at 70% 20%,#000 40%,transparent 85%)',
          }}
        />
        {/* Blob A */}
        <div
          className="absolute rounded-full opacity-55"
          style={{
            width: 560, height: 560, top: -180, right: -120,
            filter: 'blur(60px)',
            background: 'radial-gradient(circle at 30% 30%,rgba(223,197,254,.55),rgba(223,197,254,0) 70%)',
          }}
        />
        {/* Blob B */}
        <div
          className="absolute rounded-full opacity-55"
          style={{
            width: 420, height: 420, top: 120, right: 280,
            filter: 'blur(60px)',
            background: 'radial-gradient(circle at 60% 40%,rgba(180,140,224,.35),rgba(180,140,224,0) 70%)',
          }}
        />
      </div>

      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)] relative z-[1]">
        {/* Two-column hero grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-[clamp(32px,6vw,80px)] items-start">
          {/* Left: copy */}
          <div>
            <h2 className="sr-only">Building brands through strategy, storytelling, design and execution.</h2>
            <h1 className="mb-[24px] max-w-[28ch] text-[clamp(2.1rem,4vw,3.5rem)]">
              <span className="tr"><span>Building brands through strategy,</span></span>
              <span className="tr"><span style={{ '--d': '120ms' }}>storytelling, design</span></span>
              <span className="tr"><span style={{ '--d': '240ms' }}>and execution.</span></span>
            </h1>

            <p
              className="reveal text-[clamp(1.02rem,1.35vw,1.14rem)] text-text-secondary max-w-[60ch] mb-0"
              style={{ '--d': '340ms' }}
            >
              I'm Vaishali R, a Brand Marketing and Marketing Communications professional with 4+ years of experience creating campaigns, executing events, building communities and designing meaningful brand experiences.
            </p>

            <div
              className="reveal flex flex-row flex-wrap gap-3 mt-7"
              style={{ '--d': '460ms' }}
            >
              <a
                href="#work"
                className="btn inline-flex items-center gap-[10px] px-[26px] py-[14px] border border-purple rounded-pill text-[0.92rem] font-medium tracking-[-0.01em] bg-purple text-on-accent shadow-[0_8px_24px_-10px_rgba(223,197,254,.55)] hover:bg-purple-hover hover:border-purple-hover hover:shadow-[0_10px_30px_-8px_rgba(223,197,254,.7)] hover:-translate-y-px transition-all duration-[250ms]"
              >
                View Featured Work
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-[14px] h-[14px] flex-none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="https://www.behance.net/vaishaliramaswamy"
                target="_blank"
                rel="noopener"
                className="btn inline-flex items-center gap-[10px] px-[26px] py-[14px] border border-border rounded-pill text-[0.92rem] font-medium tracking-[-0.01em] bg-card text-text-primary shadow-sm hover:border-purple hover:text-purple hover:bg-purple-tint transition-all duration-[250ms]"
              >
                Explore Behance
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-[14px] h-[14px] flex-none">
                  <path d="M5 11l6-6M6 5h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="assets/resume.pdf"
                download="Vaishali_R_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-[10px] px-[26px] py-[14px] border border-border rounded-pill text-[0.92rem] font-medium tracking-[-0.01em] bg-card text-text-primary shadow-sm hover:border-purple hover:text-purple hover:bg-purple-tint transition-all duration-[250ms]"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="relative max-md:hidden" style={{ position: 'relative' }}>
            {/* Orb */}
            <svg
              className="reveal absolute z-0 pointer-events-none w-[200px] h-[200px] right-[-46px] bottom-[-56px] opacity-90"
              style={{ '--d': '180ms' }}
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="orbGrad" cx="35%" cy="30%" r="75%">
                  <stop offset="0%" stopColor="#F3E9FF"/>
                  <stop offset="45%" stopColor="#DFC5FE"/>
                  <stop offset="100%" stopColor="#8F6BC4"/>
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="92" fill="url(#orbGrad)"/>
              <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1"/>
            </svg>

            <figure
              className="reveal relative m-0 overflow-hidden bg-card border border-border-soft rounded-lg shadow-glow"
              style={{ '--d': '240ms' }}
            >
              <Img
                src="assets/images/img.jpeg"
                width={900}
                height={1200}
                fetchPriority="high"
                decoding="async"
                alt="Vaishali R, Brand Marketing and Marketing Communications professional based in Chennai"
                className="w-full object-cover object-top transition-transform duration-[1100ms] hover:scale-[1.035]"
                style={{ aspectRatio: '3/4' }}
              />
              <figcaption className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-text-secondary px-4 py-[14px] border-t border-border-soft bg-card/90 backdrop-blur-[6px]">
                Chennai, India — Brand Marketing &amp; Communications
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Portrait for mobile (shown below copy) */}
        <figure className="reveal md:hidden relative m-0 overflow-hidden bg-card border border-border-soft rounded-lg shadow-glow max-w-[400px] mt-8" style={{ '--d': '240ms' }}>
          <Img
            src="assets/images/img.jpeg"
            width={900}
            height={1200}
            fetchPriority="high"
            decoding="async"
            alt="Vaishali R, Brand Marketing and Marketing Communications professional based in Chennai"
            className="w-full object-cover"
            style={{ aspectRatio: '3/4' }}
          />
          <figcaption className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-text-secondary px-4 py-[14px] border-t border-border-soft bg-card/90 backdrop-blur-[6px]">
            Chennai, India — Brand Marketing &amp; Communications
          </figcaption>
        </figure>


      </div>
    </section>
  );
}
