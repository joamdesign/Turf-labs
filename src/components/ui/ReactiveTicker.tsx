import { useEffect, useRef, type ElementType } from 'react';
import { isStaticMode } from '../../hooks/useStaticMode';
import './ReactiveTicker.css';

type Props = {
  text: string;
  /** Heading level or element for the accessible text. */
  as?: ElementType;
  /** Scroll the text as an infinite ticker (default). With `false` the text sits still, centred. */
  scroll?: boolean;
  /** Explicit line breaks for the static layout; defaults to the whole text on one line. */
  lines?: string[];
  /** Ticker only: phrases per half of the track; each half must be wider than the viewport. */
  repeat?: number;
  /** Cursor influence radius in px for the per-character lift. */
  radius?: number;
  /**
   * Static only: image revealed inside a circle that follows the cursor. The circle eases from
   * `revealRestRadius` to `revealRadius` while the pointer is over the headline.
   */
  revealImage?: string;
  revealRadius?: number;
  revealRestRadius?: number;
  className?: string;
  id?: string;
};

const LIFT = 22; // px, at the cursor
const GROW = 0.3; // scale delta, at the cursor
const EASE = 0.18; // per-frame approach toward the target
const CIRCLE_EASE = 0.16; // per-frame approach for the reveal circle's position and size

/**
 * Headline whose characters lift and grow as the cursor passes near them. The distortion is
 * computed per character every frame from the real pointer position and written straight to
 * the DOM (no React re-renders). Runs either as an infinite ticker with a dot between copies,
 * or as a static centred heading, optionally with a cursor-following circular reveal of an
 * image-filled copy of the text.
 */
export function ReactiveTicker({
  text,
  as: Tag = 'h2',
  scroll = true,
  lines,
  repeat = 3,
  radius = 180,
  revealImage,
  revealRadius = 150,
  revealRestRadius = 0,
  className = '',
  id,
}: Props) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanups: Array<() => void> = [];

    if (scroll) {
      const track = root.querySelector<HTMLElement>('.ticker__track');
      const phrase = root.querySelector<HTMLElement>('.ticker__phrase');
      const unit = root.querySelector<HTMLElement>('.ticker__unit');
      if (track && phrase && unit) {
        // Centre the second phrase so a partial phrase peeks in from the left.
        const place = () => {
          const start = (root.clientWidth - phrase.offsetWidth) / 2 - unit.offsetWidth;
          track.style.setProperty('--ticker-start', `${Math.round(start)}px`);
        };
        place();
        document.fonts?.ready.then(place);
        window.addEventListener('resize', place);
        cleanups.push(() => window.removeEventListener('resize', place));
      }
    }

    // Reveal layer: give every character a slice of one continuous image, so the texture reads
    // as a single photograph behind the whole headline.
    const reveal = root.querySelector<HTMLElement>('.ticker__reveal');
    if (reveal && revealImage) {
      const tile = () => {
        const box = reveal.getBoundingClientRect();
        reveal.querySelectorAll<HTMLElement>('.ticker__char').forEach((char) => {
          const r = char.getBoundingClientRect();
          char.style.backgroundImage = `url(${revealImage})`;
          char.style.backgroundSize = `${box.width}px ${box.height}px`;
          char.style.backgroundPosition = `${box.left - r.left}px ${box.top - r.top}px`;
        });
      };
      tile();
      document.fonts?.ready.then(tile);
      window.addEventListener('resize', tile);
      cleanups.push(() => window.removeEventListener('resize', tile));
    }

    if (!isStaticMode()) {
      const baseChars = Array.from(root.querySelectorAll<HTMLElement>('.ticker__base .ticker__char, .ticker__track .ticker__char'));
      const revealChars = reveal ? Array.from(reveal.querySelectorAll<HTMLElement>('.ticker__char')) : [];
      const current = new Float32Array(baseChars.length);
      let pointer: { x: number; y: number } | null = null;
      let frame = 0;
      // Reveal circle state (root-relative px).
      const circle = { x: 0, y: 0, r: revealRestRadius, tx: 0, ty: 0, tr: revealRestRadius, primed: false };

      const tick = () => {
        frame = 0;
        let settled = true;
        for (let i = 0; i < baseChars.length; i++) {
          let target = 0;
          if (pointer) {
            const rect = baseChars[i].getBoundingClientRect();
            const dx = pointer.x - (rect.left + rect.width / 2);
            const dy = pointer.y - (rect.top + rect.height / 2);
            const d = Math.hypot(dx, dy);
            if (d < radius) {
              const f = 1 - d / radius;
              target = f * f * (3 - 2 * f); // smoothstep
            }
          }
          const next = current[i] + (target - current[i]) * EASE;
          current[i] = Math.abs(next) < 0.002 ? 0 : next;
          if (current[i] !== 0 || target !== 0) settled = false;
          const transform =
            current[i] === 0 ? '' : `translateY(${(-LIFT * current[i]).toFixed(2)}px) scale(${(1 + GROW * current[i]).toFixed(4)})`;
          baseChars[i].style.transform = transform;
          if (revealChars[i]) revealChars[i].style.transform = transform;
        }

        if (reveal) {
          circle.x += (circle.tx - circle.x) * CIRCLE_EASE;
          circle.y += (circle.ty - circle.y) * CIRCLE_EASE;
          circle.r += (circle.tr - circle.r) * CIRCLE_EASE;
          if (Math.abs(circle.tr - circle.r) > 0.2 || Math.abs(circle.tx - circle.x) > 0.2 || Math.abs(circle.ty - circle.y) > 0.2) settled = false;
          else {
            circle.r = circle.tr;
          }
          reveal.style.setProperty('--reveal-x', `${circle.x.toFixed(1)}px`);
          reveal.style.setProperty('--reveal-y', `${circle.y.toFixed(1)}px`);
          reveal.style.setProperty('--reveal-r', `${Math.max(0, circle.r).toFixed(1)}px`);
        }

        if (!settled || pointer) frame = requestAnimationFrame(tick);
      };
      const schedule = () => {
        if (!frame) frame = requestAnimationFrame(tick);
      };
      const onMove = (event: PointerEvent) => {
        pointer = { x: event.clientX, y: event.clientY };
        if (reveal) {
          const box = root.getBoundingClientRect();
          circle.tx = event.clientX - box.left;
          circle.ty = event.clientY - box.top;
          circle.tr = revealRadius;
          if (!circle.primed) {
            // First contact: start the circle under the cursor rather than sliding in from the corner.
            circle.x = circle.tx;
            circle.y = circle.ty;
            circle.primed = true;
          }
        }
        schedule();
      };
      const onLeave = () => {
        pointer = null;
        circle.tr = revealRestRadius;
        schedule();
      };

      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        if (frame) cancelAnimationFrame(frame);
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerleave', onLeave);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [radius, scroll, revealImage, revealRadius, revealRestRadius]);

  const renderChars = (value: string) =>
    Array.from(value).map((char, j) => (
      <span className="ticker__char" key={j}>
        {char}
      </span>
    ));

  const classes = ['ticker', scroll ? 'ticker--scroll' : 'ticker--static', revealImage ? 'ticker--reveal' : '', className]
    .filter(Boolean)
    .join(' ');

  if (!scroll) {
    const renderLines = () =>
      (lines ?? [text]).map((line, i) => (
        <span className="ticker__phrase" key={i}>
          {renderChars(line)}
        </span>
      ));
    return (
      <Tag ref={rootRef} id={id} className={classes}>
        <span className="visually-hidden">{text}</span>
        <span className="ticker__static ticker__base" aria-hidden="true">
          {renderLines()}
        </span>
        {revealImage && (
          <span className="ticker__static ticker__reveal" aria-hidden="true">
            {renderLines()}
          </span>
        )}
      </Tag>
    );
  }

  const units = Array.from({ length: repeat }, (_, i) => i);
  const renderHalf = (key: string) => (
    <div className="ticker__half" key={key}>
      {units.map((i) => (
        <span className="ticker__unit" key={i}>
          <span className="ticker__phrase">{renderChars(text)}</span>
          <span className="ticker__dot" />
        </span>
      ))}
    </div>
  );

  return (
    <Tag ref={rootRef} id={id} className={classes}>
      <span className="visually-hidden">{text}</span>
      <div className="ticker__track" aria-hidden="true">
        {renderHalf('a')}
        {renderHalf('b')}
      </div>
    </Tag>
  );
}
