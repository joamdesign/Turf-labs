import { useEffect, useState } from 'react';
import { isStaticMode } from './useStaticMode';

/**
 * Reveal for content that is already on screen when the page loads, so it cannot use an
 * intersection trigger the way `useInView` content does.
 *
 * `delayMs` is a cap, not a wait. A plain `animation-delay` holds the element at opacity 0
 * for its full duration whether or not anyone is still looking — scroll during that window
 * and the entrance plays to an empty viewport, so the copy reads as having been skipped.
 * The first scroll therefore reveals immediately: once the reader has started moving, the
 * load choreography has lost its audience and holding the text back only hides it.
 *
 * Static capture and reduced motion start revealed.
 */
export function useLoadReveal(delayMs: number) {
  const [revealed, setRevealed] = useState(() => isStaticMode());

  useEffect(() => {
    if (isStaticMode()) return;

    let timer = 0;
    const fire = () => {
      setRevealed(true);
      window.clearTimeout(timer);
      window.removeEventListener('scroll', fire);
    };

    timer = window.setTimeout(fire, delayMs);
    window.addEventListener('scroll', fire, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', fire);
    };
  }, [delayMs]);

  return revealed;
}
