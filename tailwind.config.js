/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:                  'var(--bg)',
        'bg-soft':           'var(--bg-soft)',
        card:                'var(--card)',
        'card-hover':        'var(--card-hover)',
        'text-primary':      'var(--text-primary)',
        'text-secondary':    'var(--text-secondary)',
        'text-tertiary':     'var(--text-tertiary)',
        purple:              'var(--purple)',
        'purple-light':      'var(--purple-light)',
        'purple-hover':      'var(--purple-hover)',
        'purple-deep':       'var(--purple-deep)',
        'purple-tint':       'var(--purple-tint)',
        'purple-tint-strong':'var(--purple-tint-strong)',
        border:              'var(--border)',
        'border-soft':       'var(--border-soft)',
        success:             'var(--purple)',
        'on-accent':         'var(--on-accent)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        body:    ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        sm:   '10px',
        md:   '16px',
        lg:   '24px',
        pill: '999px',
      },
      maxWidth: {
        container: '1240px',
      },
      spacing: {
        'gap-section': 'clamp(20px,4vw,60px)',
        'sy':          'clamp(88px,12vw,168px)',
        'gutter':      'clamp(22px,5vw,56px)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        glow: 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(.22,.61,.36,1)',
      },
    },
  },
  plugins: [],
};
