import { Fragment } from 'react';
import { sizes, type SizeTile } from '../../../content/homepage';
import { useInView } from '../../../hooks/useInView';
import { Button } from '../../ui/Button';
import { Eyebrow } from '../../ui/Eyebrow';
import './ChooseSize.css';

/**
 * Section 03 — Choose your size.
 * White card over the page gradient. Two tile groups: three 4-column tiles for the yard, two
 * 6-column tiles for professionals (as the section mock draws them). Copy follows the wireframe.
 */
export function ChooseSize() {
  const heading = useInView<HTMLHeadingElement>(0.4);

  return (
    <section id="shop" className="sizes" aria-labelledby="sizes-heading" data-section="03" data-screenshot="03-sizes">
      <div className="container">
        <h2
          ref={heading.ref}
          id="sizes-heading"
          className={`sizes__headline text-reveal${heading.inView ? ' is-revealed' : ''}`}
        >
          {sizes.headlineLines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h2>

        {sizes.groups.map((group) => (
          <div className="sizes__group" key={group.id}>
            <Eyebrow tone="green" id={`sizes-${group.id}`}>
              {group.label}
            </Eyebrow>
            <ul className="sizes__grid grid" aria-labelledby={`sizes-${group.id}`}>
              {group.tiles.map((tile) => (
                <li key={tile.id} className="tile">
                  <Tile tile={tile} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Hover: the image box swaps to the full-bleed `hoverImage` when one is supplied (otherwise the
 * base render lifts and zooms) and a solid "Add to Cart" pill rises in at the bottom of the box.
 * Keyboard focus inside the card shows the same state, so the button is reachable without a pointer.
 */
function Tile({ tile }: { tile: SizeTile }) {
  const copy = useInView<HTMLDivElement>(0.4);

  return (
    <article className="tile__card" aria-labelledby={`tile-${tile.id}`}>
      <div className={`tile__media${tile.hoverImage ? ' tile__media--swap' : ''}`}>
        <span
          className="tile__shadow"
          aria-hidden="true"
          style={{ ['--shadow-w' as string]: `${Math.round((tile.shadowWidth ?? 0.5) * 100)}%` }}
        />
        <img className="tile__image tile__image--base" src={tile.image.src} alt={tile.image.alt} decoding="async" />
        {tile.hoverImage && (
          <img className="tile__image tile__image--hover" src={tile.hoverImage.src} alt="" decoding="async" />
        )}
        {/* Overlaid on the image, revealed on hover or keyboard focus. Every card says
            "Add to Cart", so the label names the size for screen readers. */}
        <div className="tile__actions">
          <Button className="tile__cta" aria-label={`${sizes.cta}: ${tile.label}`}>
            {sizes.cta}
          </Button>
        </div>
      </div>
      {/* Copy row per the updated mock: label + use case (+ coverage) left, price right. Enters as one block. */}
      <div ref={copy.ref} className={`tile__copy text-reveal${copy.inView ? ' is-revealed' : ''}`}>
        <div className="tile__text">
          <h3 id={`tile-${tile.id}`} className="tile__title">
            {tile.label}
          </h3>
          <p className="tile__use">{tile.useCase}</p>
          <p className="tile__coverage">{tile.coverage}</p>
        </div>
        <p className="tile__price">{tile.price}</p>
      </div>
    </article>
  );
}
