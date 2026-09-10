import type { HTMLAttributes } from 'react';
import './Eyebrow.css';

type Props = HTMLAttributes<HTMLParagraphElement> & {
  /** Text colour; the dot is always Grass Green 300. */
  tone?: 'blue' | 'green';
};

/** Small label with a leading green dot: the hero's pre-headline and the size-group labels. */
export function Eyebrow({ tone = 'blue', className = '', children, ...rest }: Props) {
  return (
    <p className={`eyebrow eyebrow--${tone} ${className}`.trim()} {...rest}>
      <span className="eyebrow__dot" aria-hidden="true" />
      {children}
    </p>
  );
}
