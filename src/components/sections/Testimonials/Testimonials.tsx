import { useCallback, useState, type KeyboardEvent } from 'react';
import { testimonials } from '../../../content/homepage';
import { useInView } from '../../../hooks/useInView';
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from '../../../icons';
import './Testimonials.css';

/**
 * Section 06 — What users say.
 * Layout from the reference: headline and a rounded image in the left column, the copy on the
 * right. The right column is a carousel showing one testimonial at a time with previous/next
 * arrows and a position counter; arrow keys work while the carousel has focus.
 */
export function Testimonials() {
  const heading = useInView<HTMLHeadingElement>(0.4);
  const panel = useInView<HTMLDivElement>(0.4);
  const [index, setIndex] = useState(0);
  const count = testimonials.items.length;
  const current = testimonials.items[index];

  const go = useCallback((delta: number) => setIndex((i) => (i + delta + count) % count), [count]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(-1);
    }
  };

  return (
    <section className="reviews" aria-labelledby="reviews-heading" data-section="06" data-screenshot="06-reviews">
      <div className="container grid reviews__layout">
        <div className="reviews__aside">
          <h2
            ref={heading.ref}
            id="reviews-heading"
            className={`reviews__headline text-reveal${heading.inView ? ' is-revealed' : ''}`}
          >
            {testimonials.headline}
          </h2>
          <div className="reviews__media">
            {/* Swaps with the quote; keyed so the crossfade re-runs on each change. */}
            <img key={index} src={current.image.src} alt={current.image.alt} width={880} height={660} decoding="async" />
          </div>
        </div>

        <div
          ref={panel.ref}
          className={`reviews__carousel text-reveal${panel.inView ? ' is-revealed' : ''}`}
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
          onKeyDown={onKeyDown}
        >
          <div className="reviews__stage" aria-live="polite">
            <figure key={index} className="review" aria-label={`Testimonial ${index + 1} of ${count}`}>
              <p className="review__rating" aria-label={`${current.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} size={20} className={i < current.rating ? 'review__star' : 'review__star review__star--empty'} />
                ))}
              </p>
              <blockquote className="review__quote">
                <p>{current.quote}</p>
              </blockquote>
              <figcaption className="review__attribution">
                <span className="review__name">{current.name}</span>
                <span className="review__location">{current.location}</span>
              </figcaption>
            </figure>
          </div>

          <div className="reviews__controls">
            <button type="button" className="reviews__arrow" onClick={() => go(-1)} aria-label="Previous testimonial">
              <ArrowLeftIcon />
            </button>
            <button type="button" className="reviews__arrow" onClick={() => go(1)} aria-label="Next testimonial">
              <ArrowRightIcon />
            </button>
            <p className="reviews__counter" aria-hidden="true">
              <span className="reviews__counter-current">{index + 1}</span> / {count}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
