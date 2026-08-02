const CONTACT_LINKS = [
  {
    k: 'Email',
    v: 'vaishaliramesh06@gmail.com',
    href: 'mailto:vaishaliramesh06@gmail.com',
    external: false,
  },
  {
    k: 'LinkedIn',
    v: 'linkedin.com/in/vaishaliramaswamy',
    href: 'https://www.linkedin.com/in/vaishaliramaswamy/',
    external: true,
  },
  {
    k: 'Behance',
    v: 'behance.net/vaishaliramaswamy',
    href: 'https://www.behance.net/vaishaliramaswamy',
    external: true,
  },
  {
    k: 'Wellfound',
    v: 'wellfound.com/u/vaishali-r-6',
    href: 'https://wellfound.com/u/vaishali-r-6',
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-h"
      className="py-[clamp(88px,12vw,168px)] relative"
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-0"
        style={{
          left: '50%',
          top: '-10%',
          width: 900,
          height: 520,
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at center,rgba(223,197,254,.14),rgba(223,197,254,0) 68%)',
        }}
      />

      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)] relative z-[1]">
        <p className="reveal font-mono text-[0.72rem] tracking-[0.16em] uppercase text-purple block mb-[clamp(18px,3vw,30px)]">
          08 / Contact
        </p>
        <h2
          id="contact-h"
          className="reveal text-[clamp(2.4rem,6.4vw,5rem)] max-w-[14ch] mb-[34px] leading-[1.02]"
        >
          Let's Build Something Meaningful.
        </h2>

        <ul className="reveal list-none m-0 p-0 border-t border-border">
          {CONTACT_LINKS.map(({ k, v, href, external }) => (
            <li key={k}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'me noopener' } : {})}
                className="grid grid-cols-[120px_1fr_auto] max-sm:grid-cols-1 gap-[clamp(14px,3vw,32px)] max-sm:gap-1 items-baseline px-3 py-5 border-b border-border rounded-sm transition-[color,padding-left,background] duration-[250ms] hover:text-purple hover:pl-5 hover:bg-purple-tint"
              >
                <span className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-text-secondary">{k}</span>
                <span className="text-[clamp(1rem,1.8vw,1.24rem)] font-display tracking-[-0.02em] break-all">{v}</span>
                <span className="font-mono text-[0.9rem] text-text-secondary" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
