const CELLS = [
  {
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    title: 'Brand Marketing',
    body: 'I help brands communicate clearly through campaigns, ideas, and consistent messaging across different platforms',
  },
  {
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 5h16v11H8.5L4 19.5V5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Marketing Communications',
    body: 'I create marketing content for social media, websites, events, presentations, and internal communication',
  },
  {
    wide: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 12.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Employer Branding',
    body: 'I work on campaigns that improve employee engagement and strengthen company culture, like the ONE11 anniversary campaign',
  },
  {
    wide: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="16" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M3.5 19c.6-2.6 2.4-4 4.5-4s3.9 1.4 4.5 4M12.5 19c.6-2.6 2.4-4 4.5-4s3.9 1.4 4.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Community Marketing',
    body: 'I help grow creative communities by planning events, creating campaigns, and bringing people together.',
  },
  {
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3.5" y="5" width="17" height="15" rx="1.6" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Event Marketing',
    body: 'From planning to execution, I coordinate events, manage vendors, create marketing materials, and ensure everything runs smoothly.',
  },
  {
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 17.5L9.5 9l4 5.5L16 11l4 6.5H4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    title: 'Visual Design',
    body: 'I create designs that support marketing, whether it\'s social media, presentations, websites, or campaign creatives.',
  },
  {
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M4 7.5l8 4.5 8-4.5M12 12v9" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
    title: '3D Design',
    body: 'I use 3D illustrations and animations to make products and marketing campaigns more engaging and visually appealing.',
  },
];

export default function WhatIDo() {
  return (
    <section aria-labelledby="wid-h" className="py-[clamp(88px,12vw,168px)]">
      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)]">
        {/* Section header — Swiss two-column */}
        <div
          className="reveal grid grid-cols-[180px_1fr] max-sm:grid-cols-1 gap-[clamp(20px,4vw,60px)] items-start mb-[clamp(40px,6vw,74px)]"
        >
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-text-secondary pt-3 border-t border-text-primary max-sm:border-0 max-sm:pt-0">
            01 / What I Do
          </p>
          <div>
            <h2 id="wid-h" className="max-w-[20ch]">Seven disciplines, one way of working.</h2>
            <p className="mt-[18px] max-w-[56ch] text-text-secondary">
              From planning campaigns to designing visuals, these are the areas I work across to build better brand experiences.
            </p>
          </div>
        </div>

        {/* Uniform 3-column grid */}
        <div className="reveal grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {CELLS.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-card border border-border-soft rounded-xl p-8 flex flex-col gap-5 transition-all duration-300 hover:bg-card-hover hover:border-purple-tint-strong hover:-translate-y-[3px] hover:shadow-card"
            >
              <span
                aria-hidden="true"
                className="text-purple flex items-center justify-center w-11 h-11 rounded-lg bg-purple-tint [&_svg]:w-[22px] [&_svg]:h-[22px] flex-none"
              >
                {icon}
              </span>
              <div>
                <h4 className="mb-2 text-[1rem] font-semibold">{title}</h4>
                <p className="text-[0.93rem] text-text-secondary m-0 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
