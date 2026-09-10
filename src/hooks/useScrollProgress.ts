import { useEffect, type RefObject } from 'react';
import { isStaticMode } from './useStaticMode';

type Options = {
  /** Scroll distance in px over which progress runs 0 → 1. Defaults to element height minus viewport height. */
  distance?: number;
  /** CSS custom property written onto the element each frame. */
  property?: string;
};

/**
 * Writes a 0..1 scroll progress for `ref` into a CSS custom property, throttled to
 * animation frames. Reading the value in CSS keeps React out of the per-frame path.
 */
export function useScrollProgress(ref: RefObject<HTMLElement>, options: Options = {}): void {
  const { distance, property = '--scroll-progress' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (isStaticMode()) {
      el.style.setProperty(property, '0');
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const travel = distance ?? Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      el.style.setProperty(property, progress.toFixed(4));
      el.dispatchEvent(new CustomEvent<number>('scrollprogress', { detail: progress }));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ref, distance, property]);
}
