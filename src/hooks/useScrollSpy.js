import { useState, useEffect } from 'react';

/**
 * Watches section IDs via IntersectionObserver and returns the currently-active id.
 */
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActiveId(en.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    return () => spy.disconnect();
  }, [ids]);

  return activeId;
}
