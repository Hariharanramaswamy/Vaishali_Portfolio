const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="py-[clamp(36px,5vw,58px)]">
      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)]">
        {/* Bottom bar */}
        <div className="flex justify-between gap-5 flex-wrap">
          <p className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-text-secondary m-0">
            © {YEAR} Vaishali R — Chennai, India
          </p>
          <nav aria-label="Footer" className="flex gap-5 flex-wrap">
            {[
              { href: '#about', label: 'About' },
              { href: '#work', label: 'Work' },
              { href: '#design', label: 'Design' },
              { href: '#resume', label: 'Resume' },
              { href: '#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-text-secondary hover:text-purple transition-colors duration-[250ms]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
