import { Fragment } from 'react';
import { comparison } from '../../../content/homepage';
import { useInView } from '../../../hooks/useInView';
import './Comparison.css';

/**
 * Section 04 — Us vs. them.
 * Full-bleed sky, copy on the left (cols 1–4), a frosted-glass comparison table on the right
 * (cols 5–12). The table is a real <table> so the row labels and column headers are announced.
 */
export function Comparison() {
  const headline = useInView<HTMLHeadingElement>(0.4);
  const intro = useInView<HTMLParagraphElement>(0.4);

  return (
    <section className="compare" aria-labelledby="compare-heading" data-section="04" data-screenshot="04-comparison">
      <div className="compare__sky" aria-hidden="true">
        <span className="compare__cloud compare__cloud--a" />
        <span className="compare__cloud compare__cloud--b" />
        <span className="compare__cloud compare__cloud--c" />
        <span className="compare__cloud compare__cloud--d" />
      </div>

      <div className="container grid compare__layout">
        <div className="compare__copy">
          <h2
            ref={headline.ref}
            id="compare-heading"
            className={`compare__headline text-reveal${headline.inView ? ' is-revealed' : ''}`}
          >
            {comparison.headlineLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h2>
          <p ref={intro.ref} className={`compare__intro text-reveal${intro.inView ? ' is-revealed' : ''}`}>
            {comparison.intro}
          </p>
        </div>

        <div className="compare__panel">
          {/* Raised card behind the OdorRx column: 120% of the table height, rounded. */}
          <div className="compare__highlight" aria-hidden="true" />
          <table className="compare__table">
            <caption className="visually-hidden">How OdorRx compares with enzyme cleaners</caption>
            <thead>
              <tr>
                <td aria-hidden="true" />
                <th scope="col" className="compare__col compare__col--us">
                  {comparison.columns[0]}
                </th>
                <th scope="col" className="compare__col compare__col--them">
                  {comparison.columns[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className="compare__label">
                    {row.label}
                  </th>
                  <td>{row.odorrx}</td>
                  <td>{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
