import { useEffect, useState } from 'react';
import { isStaticMode } from './useStaticMode';

/** True once the window has scrolled past `threshold` px. Always false in static capture mode. */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isStaticMode()) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > threshold);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
    };
  }, [threshold]);

  return scrolled;
}
