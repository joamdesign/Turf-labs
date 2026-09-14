import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function CartIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <circle cx="9" cy="20" r="1.25" />
      <circle cx="18" cy="20" r="1.25" />
      <path d="M2.5 3.5h2.4l2.3 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.2l1.4-7.2H6.1" />
    </svg>
  );
}

const lineIconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
} as const;

export function ArrowLeftIcon({ size = 22, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...lineIconProps} strokeWidth={2} {...rest}>
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 22, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...lineIconProps} strokeWidth={2} {...rest}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/** Plus: accordion disclosure (rotates to a cross when open). */
export function PlusIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...lineIconProps} strokeWidth={2} {...rest}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...lineIconProps} {...rest}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.5-1.5h1.5V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.6v7h2.9Z" />
    </svg>
  );
}

export function TikTokIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...lineIconProps} {...rest}>
      <path d="M13.5 4v10.2a3.2 3.2 0 1 1-3.2-3.2" />
      <path d="M13.5 4c.3 2.6 2 4.1 4.5 4.3" />
    </svg>
  );
}

/** Filled star for ratings. */
export function StarIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d="M12 2.6l2.9 6.1 6.7.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6-4.9-4.6 6.7-.8L12 2.6Z" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

/*
 * Filled circle glyphs for the comparison table, from Assets/Icons/checkmark.svg and close.svg.
 * The two files draw their circles at different scales (r 6 in a 16 box, r 10 in a 24 box), so
 * each viewBox is cropped to its circle: at the same size they render as equal circles.
 */

/** Check in a filled circle: an OdorRx advantage. */
export function CheckCircleIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="2 2 12 12" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d="M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M10.1202768,6.16398102 L7.24952684,9.04242005 L5.85355339,7.64644661 C5.65829124,7.45118446 5.34170876,7.45118446 5.14644661,7.64644661 C4.95118446,7.84170876 4.95118446,8.15829124 5.14644661,8.35355339 L6.89644661,10.1035534 C7.09189344,10.2990002 7.40884066,10.2987883 7.60402592,10.1030802 L10.8283287,6.87014147 C11.0233295,6.67461836 11.0229061,6.35803615 10.827383,6.16303532 C10.6318599,5.9680345 10.3152776,5.9684579 10.1202768,6.16398102 Z" />
    </svg>
  );
}

/** Cross in a filled circle: a competitor shortfall. */
export function CloseCircleIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="2 2 20 20" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536a1 1 0 0 1 0 1.415L13.414 12l2.122 2.121a1 1 0 1 1-1.415 1.415L12 13.414l-2.121 2.122a1 1 0 1 1-1.415-1.415L10.586 12 8.464 9.879A1 1 0 1 1 9.88 8.464L12 10.586l2.121-2.122a1 1 0 0 1 1.415 0Z"
      />
    </svg>
  );
}
