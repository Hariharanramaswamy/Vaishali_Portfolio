import { useEffect, useRef } from 'react';

/**
 * Attach an IntersectionObserver to every element with class `.reveal` or `.tr`
 * inside the given root (defaults to document). Adds `is-in` when visible.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animated = document.querySelectorAll('.reveal, .tr');

    if (!reduce && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('is-in');
              io.unobserve(en.target);
            }
          });
        },
        { rootMargin: '0px 0px -6% 0px', threshold: 0.08 }
      );
      animated.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      animated.forEach((el) => el.classList.add('is-in'));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
