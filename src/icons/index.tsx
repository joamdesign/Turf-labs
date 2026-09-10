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

/** Flask: third-party lab testing. */
export function LabIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...lineIconProps} {...rest}>
      <path d="M9 3h6" />
      <path d="M10 3v6.2L4.9 18a2 2 0 0 0 1.7 3h10.8a2 2 0 0 0 1.7-3L14 9.2V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

/** Flag: made in the USA. */
export function FlagIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...lineIconProps} {...rest}>
      <path d="M5 21V4" />
      <path d="M5 4h12.5l-2.5 4.5 2.5 4.5H5" />
    </svg>
  );
}

/** Paw print: pet-friendly. */
export function PawIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...lineIconProps} {...rest}>
      <circle cx="8" cy="7.5" r="1.9" />
      <circle cx="16" cy="7.5" r="1.9" />
      <circle cx="4.5" cy="12.5" r="1.7" />
      <circle cx="19.5" cy="12.5" r="1.7" />
      <path d="M12 12.5c-2.6 0-5 2.6-5 4.9 0 1.6 1.1 2.6 2.6 2.6.9 0 1.6-.5 2.4-.5s1.5.5 2.4.5c1.5 0 2.6-1 2.6-2.6 0-2.3-2.4-4.9-5-4.9Z" />
    </svg>
  );
}

/** Spray bottle: ready to use, no dilution. */
export function SprayIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...lineIconProps} {...rest}>
      <path d="M10 9h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6.5A3.5 3.5 0 0 1 10 9Z" />
      <path d="M10 9V6h4v3" />
      <path d="M10 6h5.5" />
      <path d="M3.5 5.5h1.2M3.5 8h1.2M3.5 3h1.2" />
    </svg>
  );
}

/** Award ribbon: trusted by experts. */
export function AwardIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...lineIconProps} {...rest}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.8 13.6-1.8 7.4 5-2.6 5 2.6-1.8-7.4" />
    </svg>
  );
}

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
