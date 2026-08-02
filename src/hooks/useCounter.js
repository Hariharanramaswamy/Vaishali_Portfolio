import { useEffect, useRef } from 'react';

/**
 * Animated counter hook.
 * Returns a ref to attach to the element that should display the count.
 * Starts counting when the element enters the viewport.
 */
export function useCounter(to, suffix = '') {
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = ref.current;
    if (!el) return;

    if (reduce) {
      el.textContent = to + suffix;
      return;
    }

    if (!('IntersectionObserver' in window)) {
      el.textContent = to + suffix;
      return;
    }

    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          let t0 = null;
          function tick(ts) {
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / 1100, 1);
            const e = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(to * e) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          co.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    co.observe(el);
    return () => co.disconnect();
  }, [to, suffix]);

  return ref;
}
