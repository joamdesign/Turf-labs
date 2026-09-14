import { Fragment } from 'react';
import { problem } from '../../../content/homepage';
import { useInView } from '../../../hooks/useInView';
import { Droplets } from './Droplets';
import './TheProblem.css';

/**
 * Section 02 — The problem (V2).
 * Centred Grass Green headline, explanation and bold takeaway, with the grass brush running
 * across the bottom of the section; section 03's card overlaps the grass with rounded corners.
 * Sits on the page gradient as it fades from Light Blue toward Grey 100.
 */
export function TheProblem() {
  const heading = useInView<HTMLHeadingElement>(0.4);
  const copy = useInView<HTMLParagraphElement>(0.4);
  const takeaway = useInView<HTMLParagraphElement>(0.4);

  return (
    <section className="problem" aria-labelledby="problem-heading" data-section="02" data-screenshot="02-problem">
      <h2
        ref={heading.ref}
        id="problem-heading"
        className={`problem__headline text-reveal${heading.inView ? ' is-revealed' : ''}`}
      >
        {problem.headlineLines.map((line, index) => (
          <Fragment key={line}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </h2>
      <div className="container problem__body">
        <p ref={copy.ref} className={`problem__copy text-reveal${copy.inView ? ' is-revealed' : ''}`}>
          {problem.body}
        </p>
        <p ref={takeaway.ref} className={`problem__takeaway text-reveal${takeaway.inView ? ' is-revealed' : ''}`}>
          {problem.takeaway}
        </p>
      </div>
      <img className="problem__grass" src="/textures/grass-brush.webp" alt="" width={1440} height={817} decoding="async" />
      <Droplets />
    </section>
  );
}
