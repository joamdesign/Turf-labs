import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRightIcon } from '../../icons';
import './Button.css';

type Variant = 'primary' | 'secondary';

type Size = 'md' | 'sm';

type CommonProps = {
  variant?: Variant;
  /** `md` is the 58px hero control; `sm` is a 48px control for tiles and dense rows. */
  size?: Size;
  /** Trailing Grass Green 100 circle carrying an arrow, as drawn in the hero reference. */
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = AnchorProps | NativeButtonProps;

/** Pill button. Renders an anchor when `href` is given, otherwise a native button. */
export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', arrow = false, children, className = '', ...rest } = props;
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, arrow ? 'btn--arrow' : '', className]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <>
      <span className="btn__label">{children}</span>
      {arrow && (
        <span className="btn__accent" aria-hidden="true">
          <ArrowUpRightIcon size={18} />
        </span>
      )}
    </>
  );

  if (typeof rest.href === 'string') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}
