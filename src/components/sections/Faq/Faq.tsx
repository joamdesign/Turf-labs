import { useId, useState } from 'react';
import { faq } from '../../../content/homepage';
import { useInView } from '../../../hooks/useInView';
import { PlusIcon } from '../../../icons';
import './Faq.css';

/**
 * Section 07 — Questions we get.
 * Layout from the reference: one rounded card, headline on the left, a stack of pill-shaped
 * questions on the right that open into their answers. Colour and type per design-system.md.
 */
export function Faq() {
  const heading = useInView<HTMLHeadingElement>(0.4);
  const list = useInView<HTMLUListElement>(0.2);

  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading" data-section="07" data-screenshot="07-faq">
      <div className="container">
        <div className="faq__card">
          <h2 ref={heading.ref} id="faq-heading" className={`faq__headline text-reveal${heading.inView ? ' is-revealed' : ''}`}>
            {faq.headline}
          </h2>
          <ul ref={list.ref} className={`faq__list text-reveal${list.inView ? ' is-revealed' : ''}`}>
            {faq.items.map((item) => (
              <li key={item.question}>
                <FaqItem question={item.question} answer={item.answer} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <h3 className="faq-item__heading">
        <button
          type="button"
          id={buttonId}
          className="faq-item__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="faq-item__question">{question}</span>
          <span className="faq-item__icon" aria-hidden="true">
            <PlusIcon size={20} />
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-item__panel">
        <div className="faq-item__panel-inner">
          <p className="faq-item__answer">{answer}</p>
        </div>
      </div>
    </div>
  );
}
