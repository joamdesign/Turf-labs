import { Fragment, useRef, type CSSProperties } from 'react';
import { hero, proofPoints } from '../../../content/homepage';
import { useLoadReveal } from '../../../hooks/useLoadReveal';
import { useScrollProgress } from '../../../hooks/useScrollProgress';
import { Button } from '../../ui/Button';
import { BottleStage } from './BottleStage';
import { ProofStrip } from './ProofStrip';
import './Hero.css';

/**
 * The subheadline is on screen at load, so its entrance is scheduled rather than triggered.
 * Timed to land once the bottle has settled: copy done (1150ms) + the bottle's 250ms offset
 * + ~70% of its 1900ms slide. This is a cap — see useLoadReveal; the first scroll wins.
 */
const HERO_BODY_DELAY = 2730;

/**
 * Section 01 — Hero + proof strip.
 * Copy left (cols 1–8), subheadline right (cols 9–12) anchored to the CTA baseline, the
 * 1-gallon bottle centred and layered between the headline lines: the upper lines read over
 * its shoulder, the lower lines disappear behind its body, and the base runs down into the
 * proof strip. On load the bottle slides up between those layers; the proof pills reveal as
 * the strip enters view and then loop horizontally.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollProgress(sectionRef, { distance: 900 });
  const bodyRevealed = useLoadReveal(HERO_BODY_DELAY);

  return (
    <section
      ref={sectionRef}
      className="hero"
      aria-labelledby="hero-heading"
      data-section="01"
      data-screenshot="01-hero"
      data-screenshot-from-top=""
    >
      <div className="container grid hero__layout">
        <div className="hero__copy">
          <p className="hero__label">
            <span className="hero__label-dot" aria-hidden="true" />
            {hero.label}
          </p>
          <h1 id="hero-heading" className="hero__headline">
            {hero.headlineLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {/* Lines 1–3 sit in front of the bottle (over its shoulder); lines 4–5 behind its body. */}
                <span
                  className={`hero__line hero__line--${index < 3 ? 'front' : 'back'}`}
                  style={{ '--line': index } as CSSProperties}
                >
                  {/* Outer span clips; inner span rises out of it on first load. */}
                  <span className="hero__line-inner">{line}</span>
                </span>
              </Fragment>
            ))}
          </h1>
          <Button href={hero.cta.href} arrow className="hero__cta">
            {hero.cta.label}
          </Button>
        </div>

        <p className={`hero__subheadline text-reveal${bodyRevealed ? ' is-revealed' : ''}`}>
          {hero.subheadline}
        </p>
      </div>

      <BottleStage image={hero.product} />
      <ProofStrip items={proofPoints} />
    </section>
  );
}
