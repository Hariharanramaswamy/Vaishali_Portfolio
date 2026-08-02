const STEPS = [
  { n: '01', title: 'Intern', body: 'Visual Design — where the career started.' },
  { n: '02', title: 'Associate', body: 'Design ownership extending into brand and campaign work.' },
  { n: '03', title: 'Senior Associate', body: 'Brand Marketing, marketing communications and event execution at M2P Fintech.' },
];

export default function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-h" className="py-[clamp(88px,12vw,168px)]">
      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)]">
        {/* Two-column layout: label | content */}
        <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-[clamp(20px,4vw,60px)] items-start">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-text-secondary pt-3 border-t border-text-primary max-sm:border-0 max-sm:pt-0">
            07 / Resume
          </p>

          <div className="reveal">
            <h2 id="resume-h" className="mb-[34px] max-w-[16ch]">A Journey of Growth</h2>

            <ol className="list-none m-0 p-0 border-t border-border">
              {STEPS.map(({ n, title, body }) => (
                <li
                  key={n}
                  className="grid grid-cols-[64px_1fr] gap-[clamp(16px,3vw,34px)] px-2 py-5 border-b border-border items-baseline rounded-sm transition-colors duration-300 hover:bg-card"
                >
                  <span className="font-mono text-[0.72rem] tracking-[0.14em] text-purple">{n}</span>
                  <div>
                    <h4 className="m-0">{title}</h4>
                    <p className="mt-[5px] mb-0 text-[0.92rem] text-text-secondary">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href="assets/resume.pdf"
              download
              className="inline-flex items-center gap-[10px] px-[26px] py-[14px] border border-purple rounded-pill text-[0.92rem] font-medium tracking-[-0.01em] bg-purple text-on-accent shadow-[0_8px_24px_-10px_rgba(223,197,254,.55)] hover:bg-purple-hover hover:border-purple-hover hover:shadow-[0_10px_30px_-8px_rgba(223,197,254,.7)] hover:-translate-y-px transition-all duration-[250ms] mt-8"
            >
              Download Resume
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-[14px] h-[14px] flex-none">
                <path d="M8 3v8m0 0L4.5 7.5M8 11l3.5-3.5M3 13h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
