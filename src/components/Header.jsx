import { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useTheme } from '../hooks/useTheme';

const NAV_IDS = ['home', 'about', 'work', 'communication', 'design', 'certifications', 'resume', 'contact'];
const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Featured Work' },
  { href: '#communication', label: 'Communication' },
  { href: '#design', label: 'Design' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isStuck, setIsStuck] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const activeId = useScrollSpy(NAV_IDS);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 6);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <header
      id="header"
      className={[
        'sticky top-0 z-[90]',
        'bg-[var(--header-bg)] backdrop-blur-[14px] saturate-[1.4]',
        'border-b transition-[border-color,background-color] duration-300',
        isStuck ? 'border-border shadow-sm' : 'border-transparent',
      ].join(' ')}
    >
      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)] flex items-center justify-between gap-6 h-[72px]">
        {/* Brand */}
        <a
          href="#home"
          className="font-display text-[1.02rem] font-medium tracking-[-0.03em] text-text-primary"
        >
          Vaishali R<span className="text-purple">.</span>
        </a>

        {/* Action Controls & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            className="p-2.5 rounded-full border border-border bg-card text-text-primary hover:border-purple hover:text-purple transition-all duration-200 flex items-center justify-center"
          >
            {theme === 'light' ? (
              /* Moon Icon */
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            ) : (
              /* Sun Icon */
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 12a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.22 4.22a1 1 0 011.415 0l.707.707a1 1 0 01-1.414 1.414l-.708-.707a1 1 0 010-1.414zm11.314 11.314a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM4.22 15.78a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zm11.314-11.314a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 6a4 4 0 100 8 4 4 0 000-8z"/>
              </svg>
            )}
          </button>

          {/* Mobile toggle */}
          <button
            id="navToggle"
            aria-expanded={navOpen}
            aria-controls="nav"
            onClick={() => setNavOpen((v) => !v)}
            className="sm:hidden bg-transparent border border-border text-text-primary rounded-pill px-[17px] py-[9px] font-mono text-[0.7rem] tracking-[0.12em] uppercase"
          >
            {navOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Nav */}
        <nav
          id="nav"
          aria-label="Primary"
          className={[
            'fixed sm:static inset-[72px_0_auto_0] sm:inset-auto',
            'sm:flex items-center gap-[26px]',
            'bg-bg/95 sm:bg-transparent',
            'backdrop-blur-[14px] sm:backdrop-blur-none',
            'border-b sm:border-0 border-border',
            'flex-col sm:flex-row items-stretch sm:items-center',
            'px-[clamp(22px,5vw,56px)] sm:px-0 pb-5 sm:pb-0 pt-[6px] sm:pt-0 gap-0 sm:gap-[26px]',
            navOpen ? 'flex' : 'hidden sm:flex',
          ].join(' ')}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.slice(1);
            const isCurrent = activeId === id;
            return (
              <a
                key={href}
                href={href}
                aria-current={isCurrent ? 'true' : undefined}
                onClick={closeNav}
                className={[
                  'relative font-mono text-[0.72rem] tracking-[0.12em] uppercase transition-colors duration-[250ms]',
                  'py-[14px] sm:py-0 border-b sm:border-0 border-border',
                  isCurrent
                    ? 'text-purple after:absolute after:left-0 after:right-0 after:bottom-[-9px] after:h-[2px] after:bg-purple after:rounded-sm'
                    : 'text-text-secondary hover:text-text-primary',
                ].join(' ')}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
