import './Droplets.css';

/**
 * Spray over the grass, after the reference photo: a cone of fine backlit mist falling from the
 * upper right (where the hero's light comes from) onto the grass, a soft haze where it lands,
 * bokeh sparkles glinting in the blades, and a few small clear droplets on the tips.
 *
 * Positions come from a seeded generator so every render (and every screenshot) is identical.
 * Coordinates are in a 1440 × 340 box laid over the grass band (tips at the top, card overlap
 * at the bottom).
 */
function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

type Particle = { x: number; y: number; r: number; o: number; delay: number; dur: number };

/** Mist particles distributed through a cone: apex above the band at the right, mouth on the grass at the left. */
function cone(seed: number, count: number): Particle[] {
  const rnd = seeded(seed);
  const out: Particle[] = [];
  while (out.length < count) {
    const t = Math.sqrt(rnd()); // more particles toward the mouth, where the spray has spread
    const axisX = 1010 - t * 330; // the cone leans down and to the left
    const halfWidth = 30 + t * 430;
    const u = rnd() * 2 - 1;
    const x = axisX + u * halfWidth;
    const y = -30 + t * 300 + (rnd() - 0.5) * 24;
    if (x < 0 || x > 1440) continue;
    const edge = 1 - Math.abs(u); // brighter toward the cone's axis
    out.push({
      x: +x.toFixed(1),
      y: +y.toFixed(1),
      r: +(0.9 + rnd() * 1.9).toFixed(2),
      o: +(0.45 + edge * 0.5 * (0.6 + rnd() * 0.4)).toFixed(2),
      delay: +(rnd() * 8).toFixed(2),
      dur: +(6 + rnd() * 5).toFixed(2),
    });
  }
  return out;
}

function scatter(seed: number, count: number, x0: number, x1: number, y0: number, y1: number, rMin: number, rMax: number): Particle[] {
  const rnd = seeded(seed);
  return Array.from({ length: count }, () => ({
    x: +(x0 + rnd() * (x1 - x0)).toFixed(1),
    y: +(y0 + rnd() * (y1 - y0)).toFixed(1),
    r: +(rMin + rnd() * (rMax - rMin)).toFixed(2),
    o: +(0.35 + rnd() * 0.45).toFixed(2),
    delay: +(rnd() * 6).toFixed(2),
    dur: +(4 + rnd() * 4).toFixed(2),
  }));
}

const MIST = cone(7, 360);
const BOKEH = scatter(11, 26, 80, 1360, 140, 310, 5, 12);
const DROPS = scatter(19, 12, 120, 1320, 140, 250, 3.2, 5.5);

export function Droplets() {
  return (
    <svg className="drops" viewBox="0 0 1440 340" width="1440" height="340" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="mist-dot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="haze" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cone-glow" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bokeh" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="45%" stopColor="#f4fff6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="drop-body" cx="42%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="35%" stopColor="#f2fbff" stopOpacity="0.15" />
          <stop offset="88%" stopColor="#1d4a2c" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#123219" stopOpacity="0.55" />
        </radialGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      {/* The spray's diffuse body: a soft cone of light from the upper right down onto the grass. */}
      <polygon className="drops__cone" points="1040,-40 1000,-40 330,300 1140,300" fill="url(#cone-glow)" />

      {/* Haze where the spray lands, sitting in the blades. */}
      <ellipse className="drops__haze" cx="700" cy="215" rx="540" ry="95" fill="url(#haze)" />

      {/* Fine mist: hundreds of tiny backlit particles falling through the cone. */}
      <g className="drops__mist">
        {MIST.map((p, i) => (
          <circle
            key={i}
            className="drops__particle"
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill="url(#mist-dot)"
            stroke="rgb(10 34 77 / 0.22)"
            strokeWidth="0.5"
            style={{ ['--o' as string]: p.o, animationDelay: `-${p.delay}s`, animationDuration: `${p.dur}s` }}
          />
        ))}
      </g>

      {/* Bokeh glints in the grass. */}
      <g className="drops__bokeh" filter="url(#soft)">
        {BOKEH.map((p, i) => (
          <circle
            key={i}
            className="drops__glint"
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill="url(#bokeh)"
            style={{ ['--o' as string]: p.o, animationDelay: `-${p.delay}s`, animationDuration: `${p.dur}s` }}
          />
        ))}
      </g>

      {/* A few small clear droplets on the tips. */}
      <g className="drops__beads">
        {DROPS.map((p, i) => (
          <g key={i} className="drops__bead" style={{ animationDelay: `-${p.delay}s` }}>
            <ellipse cx={p.x} cy={p.y} rx={p.r} ry={p.r * 0.9} fill="url(#drop-body)" />
            <ellipse cx={p.x + p.r * 0.34} cy={p.y - p.r * 0.4} rx={p.r * 0.26} ry={p.r * 0.16} fill="#ffffff" opacity="0.95" />
          </g>
        ))}
      </g>
    </svg>
  );
}
