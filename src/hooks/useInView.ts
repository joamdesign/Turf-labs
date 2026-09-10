import { useEffect, useRef, useState } from 'react';
import { isStaticMode } from './useStaticMode';

/**
 * One-shot "has this entered the viewport" flag, for reveal animations.
 *
 * Latches true the first time the element crosses `threshold` and never flips back, so a
 * revealed element stays revealed when it scrolls out again. Static capture mode and
 * prefers-reduced-motion start latched, so the resting layout renders immediately.
 */
export function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => isStaticMode());

  useEffect(() => {
    const el = ref.current;
    if (!el || isStaticMode()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect(); // one-shot
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
