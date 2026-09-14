import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import type { ProofIcon } from '../../../content/homepage';
import { isStaticMode } from '../../../hooks/useStaticMode';
import { ExpertsIcon, PetFriendlyIcon, ReadyToUseIcon, TestedIcon, UsaFlagIcon } from '../../../icons/proof';
import './ProofStrip.css';

type Item = { label: string; icon: ProofIcon };
type Props = { items: Item[] };

const ICONS: Record<ProofIcon, ReactNode> = {
  lab: <TestedIcon />,
  flag: <UsaFlagIcon />,
  paw: <PetFriendlyIcon />,
  spray: <ReadyToUseIcon />,
  award: <ExpertsIcon />,
};

/**
 * Trust strip. Each pill is an icon circle pinched onto a text pill (see the section mock).
 * Pills reveal with a short stagger once the strip enters the viewport, then the track loops
 * horizontally. The loop pauses while offscreen and on hover; static mode and
 * prefers-reduced-motion render the resting layout with no motion.
 */
export function ProofStrip({ items }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(() => isStaticMode());
  const [active, setActive] = useState(() => isStaticMode());

  useEffect(() => {
    const el = ref.current;
    if (!el || isStaticMode()) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const className = ['proof', revealed ? 'is-revealed' : '', active ? 'is-active' : ''].filter(Boolean).join(' ');

  const renderList = (hidden: boolean) => (
    <ul className="proof__list" aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <li key={item.label} className="proof__pill" style={{ '--i': index } as CSSProperties}>
          <span className="proof__icon" data-icon={item.icon} aria-hidden="true">
            {ICONS[item.icon]}
          </span>
          <span className="proof__label">{item.label}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div ref={ref} className={className} role="region" aria-label="Why OdorRx">
      <div className="proof__track">
        {renderList(false)}
        {renderList(true)}
      </div>
    </div>
  );
}
