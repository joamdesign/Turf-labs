import { founder } from '../../../content/homepage';
import { useInView } from '../../../hooks/useInView';
import './FounderStory.css';

/**
 * Section 05 — Why we made this.
 * One rounded card: Grass Green 100 copy panel on the left, photograph on the right, 50/50.
 * The wireframe's headline leads the panel (the section mock omits it); copy follows the
 * wireframe. The copy block uses the design system's text reveal.
 */
export function FounderStory() {
  const copy = useInView<HTMLDivElement>(0.4);

  return (
    <section className="founder" aria-labelledby="founder-heading" data-section="05" data-screenshot="05-founder">
      <div className="container">
        <div className="founder__card">
          <div className="founder__panel">
            <div ref={copy.ref} className={`founder__copy text-reveal${copy.inView ? ' is-revealed' : ''}`}>
              <h2 id="founder-heading" className="founder__headline">
                {founder.headline}
              </h2>
              <blockquote className="founder__story">
                {founder.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
                <footer className="founder__attribution">
                  <cite className="founder__name">{founder.name}</cite>
                  <span className="founder__title">{founder.title}</span>
                </footer>
              </blockquote>
            </div>
          </div>
          <figure className="founder__media">
            <img src={founder.image.src} alt={founder.image.alt} width={1380} height={1354} decoding="async" />
          </figure>
        </div>
      </div>
    </section>
  );
}
