const CERTS = [
  {
    done: true,
    full: true,
    status: 'Completed',
    title: 'Google Ads for Beginners',
    issuer: 'Coursera',
    body: 'Fundamentals of Google Ads — campaign setup, keyword targeting, ad creation, bidding strategies and campaign optimisation.',
  },
  {
    done: false,
    full: false,
    status: 'In Progress',
    title: 'Google Ads Search Certification',
    issuer: 'Google',
    body: null,
  },
  {
    done: false,
    full: false,
    status: 'In Progress',
    title: 'Content Marketing',
    issuer: 'HubSpot',
    body: null,
  },
  {
    done: false,
    full: false,
    status: 'In Progress',
    title: 'Email Marketing',
    issuer: 'HubSpot',
    body: null,
  },
  {
    done: false,
    full: false,
    status: 'In Progress',
    title: 'SEO',
    issuer: 'HubSpot',
    body: null,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certs-h" className="py-[clamp(88px,12vw,168px)]">
      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)]">
        {/* Section header */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-[clamp(20px,4vw,60px)] items-start mb-[clamp(40px,6vw,74px)]">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-text-secondary pt-3 border-t border-text-primary max-sm:border-0 max-sm:pt-0">
            06 / Certifications
          </p>
          <div>
            <h2 id="certs-h" className="max-w-[20ch]">Learning never stops.</h2>
            <p className="mt-[18px] max-w-[56ch] text-text-secondary">
              Marketing keeps moving, so alongside hands-on work I'm building formal grounding through recognised certifications.
            </p>
          </div>
        </div>

        {/* Cert grid — 2 columns on md+, 1 on mobile */}
        <div className="reveal grid grid-cols-2 max-sm:grid-cols-1 gap-3">
          {CERTS.map(({ done, full, status, title, issuer, body }) => (
            <article
              key={title}
              className={[
                'bg-card border border-border-soft rounded-md p-[clamp(22px,3vw,30px)] grid gap-2 content-start',
                'transition-all duration-300 hover:border-purple-tint-strong hover:-translate-y-[2px] hover:shadow-card',
                full ? 'col-span-2 max-sm:col-span-1' : '',
              ].join(' ')}
            >
              <p className={[
                'font-mono text-[0.66rem] tracking-[0.14em] uppercase inline-flex items-center gap-2 m-0',
                done ? 'text-purple' : 'text-text-secondary',
              ].join(' ')}>
                <i
                  aria-hidden="true"
                  className={[
                    'w-[7px] h-[7px] rounded-full block',
                    done
                      ? 'bg-purple shadow-[0_0_0_4px_rgba(223,197,254,0.10)]'
                      : 'bg-text-tertiary',
                  ].join(' ')}
                />
                {status}
              </p>
              <h4 className="mt-1 mb-0">{title}</h4>
              <p className="text-[0.9rem] text-text-secondary m-0">{issuer}</p>
              {body && <p className="text-[0.92rem] text-text-secondary mt-[6px] mb-0">{body}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
