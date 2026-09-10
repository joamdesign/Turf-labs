/**
 * Static capture mode. `?static=1` freezes all motion at its resting state so that
 * automated screenshots are deterministic. prefers-reduced-motion gets the same treatment.
 */
export function isStaticMode(): boolean {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  if (params.has('static')) return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function applyStaticModeAttribute(): void {
  if (isStaticMode()) document.documentElement.setAttribute('data-static', '');
}
