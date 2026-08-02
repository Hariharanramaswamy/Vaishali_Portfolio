import { useState, useEffect, useRef } from 'react';

/**
 * Smooth custom cursor that follows the mouse with lerp.
 * Returns { cursorRef, isOn, isLink } state for rendering.
 */
export function useCursor() {
  const cursorRef = useRef(null);
  const [isOn, setIsOn] = useState(false);
  const [isLink, setIsLink] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (reduce || !isFine) return;

    let x = 0, y = 0, cx = 0, cy = 0;
    let rafId;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      setIsOn(true);
    };

    const onOver = (e) => {
      setIsLink(!!e.target.closest('a, button'));
    };

    function loop() {
      cx += (x - cx) * 0.16;
      cy += (y - cy) * 0.16;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`;
      }
      rafId = requestAnimationFrame(loop);
    }
    loop();

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { cursorRef, isOn, isLink };
}
