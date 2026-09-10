import { problem } from '../../../content/homepage';
import { useInView } from '../../../hooks/useInView';
import { ReactiveTicker } from '../../ui/ReactiveTicker';
import './TheProblem.css';

/**
 * Section 02 — The problem.
 * Full-width reactive ticker headline, then a centred explanation and a bold takeaway.
 * Sits on the page gradient as it fades from Light Blue toward Grey 100.
 * The explanation rises into place when it first enters view, on the same weighted curve
 * as the hero headline.
 */
export function TheProblem() {
  const heading = useInView<HTMLDivElement>(0.4);
  const copy = useInView<HTMLParagraphElement>(0.4);
  const takeaway = useInView<HTMLParagraphElement>(0.4);

  return (
    <section className="problem" aria-labelledby="problem-heading" data-section="02" data-screenshot="02-problem">
      {/* ReactiveTicker does not forward a ref, so the reveal goes on a wrapper. */}
      <div ref={heading.ref} className={`text-reveal${heading.inView ? ' is-revealed' : ''}`}>
        <ReactiveTicker
          id="problem-heading"
          text={problem.headline}
          lines={problem.headlineLines}
          scroll={false}
          revealImage="/images/turf-blades.jpg"
          revealRadius={150}
          className="problem__headline"
        />
      </div>
      <div className="container problem__body">
        <p ref={copy.ref} className={`problem__copy text-reveal${copy.inView ? ' is-revealed' : ''}`}>
          {problem.body}
        </p>
        <p ref={takeaway.ref} className={`problem__takeaway text-reveal${takeaway.inView ? ' is-revealed' : ''}`}>
          {problem.takeaway}
        </p>
      </div>
    </section>
  );
}
