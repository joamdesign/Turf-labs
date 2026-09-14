# Turf Labs Co. — Design System

Prepared by Joam Agency. Companion to [Turf Labs Co. - Homepage Wireframe.md](./Turf%20Labs%20Co%20-%20Homepage%20Wireframe.md).

---

## Color System

Six ramps. Each is a single base color stepped toward white at 0%, 20%, 40%, 60% and 80%,
so every tint is derivable from its base — there are only six numbers to maintain.

Steps are numbered `500` (base, darkest) down to `100` (lightest), matching the visual order
in the palette top to bottom.

### Overview

| Role | Name | Token | Base | RGB | White text | Use for |
| --- | --- | --- | --- | --- | --- | --- |
| Brand Color 1 | **Light Blue** | `--color-blue` | `#0076BD` | 0, 118, 189 | ✅ AA | Primary CTAs, links, active states |
| Secondary Color 1 | **Deep Blue** | `--color-deep-blue` | `#0E306D` | 14, 48, 109 | ✅ AA | Footer and dark surfaces (headings now use [ink](#text-colors)) |
| Brand Color 2 | **Grass Green** | `--color-green` | `#008031` | 0, 128, 49 | ✅ AA | Turf/product accent, success, checkmarks. Step `100` is the announcement bar surface |
| Secondary Color 2 | **Deep Green** | `--color-deep-green` | `#00461A` | 0, 70, 26 | ✅ AA | Deep accent surfaces, comparison "OdorRx" column |
| Supporting Colors | **Muted Grey** | `--color-muted` | `#596582` | 89, 101, 130 | ✅ AA | Secondary text, borders, comparison "Others" column |
| Neutral Colors | **Grey** | `--color-grey` | `#E5E6E9` | 229, 230, 233 | ❌ no | Page and card backgrounds, dividers |

### Light Blue — Brand Color 1

| Step | Hex | RGB | White mix | vs `#FFF` | vs `#000` | Text on it | WCAG |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `500` | `#0076BD` | 0, 118, 189 | 0% | 4.85 | 4.33 | `#FFFFFF` | AA |
| `400` | `#3391CA` | 51, 145, 202 | 20% | 3.47 | 6.04 | `#000000` | AA |
| `300` | `#66ADD7` | 102, 173, 215 | 40% | 2.46 | 8.52 | `#000000` | AAA |
| `200` | `#99C8E5` | 153, 200, 229 | 60% | 1.79 | 11.75 | `#000000` | AAA |
| `100` | `#CCE4F2` | 204, 228, 242 | 80% | 1.32 | 15.95 | `#000000` | AAA |

### Deep Blue — Secondary Color 1

| Step | Hex | RGB | White mix | vs `#FFF` | vs `#000` | Text on it | WCAG |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `500` | `#0E306D` | 14, 48, 109 | 0% | 12.63 | 1.66 | `#FFFFFF` | AAA |
| `400` | `#3E598A` | 62, 89, 138 | 20% | 7.00 | 3.00 | `#FFFFFF` | AA |
| `300` | `#6E83A7` | 110, 131, 167 | 40% | 3.84 | 5.47 | `#000000` | AA |
| `200` | `#9FACC5` | 159, 172, 197 | 60% | 2.29 | 9.18 | `#000000` | AAA |
| `100` | `#CFD6E2` | 207, 214, 226 | 80% | 1.46 | 14.37 | `#000000` | AAA |

### Grass Green — Brand Color 2

| Step | Hex | RGB | White mix | vs `#FFF` | vs `#000` | Text on it | WCAG |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `500` | `#008031` | 0, 128, 49 | 0% | 5.08 | 4.13 | `#FFFFFF` | AA |
| `400` | `#33995A` | 51, 153, 90 | 20% | 3.59 | 5.84 | `#000000` | AA |
| `300` | `#66B383` | 102, 179, 131 | 40% | 2.52 | 8.34 | `#000000` | AAA |
| `200` | `#99CCAD` ⚠️ | 153, 204, 173 | 60% | 1.81 | 11.60 | `#000000` | AAA |
| `100` | `#CCE6D6` | 204, 230, 214 | 80% | 1.32 | 15.86 | `#000000` | AAA |

### Deep Green — Secondary Color 2

| Step | Hex | RGB | White mix | vs `#FFF` | vs `#000` | Text on it | WCAG |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `500` | `#00461A` | 0, 70, 26 | 0% | 11.11 | 1.89 | `#FFFFFF` | AAA |
| `400` | `#336B48` | 51, 107, 72 | 20% | 6.29 | 3.34 | `#FFFFFF` | AA |
| `300` | `#669076` | 102, 144, 118 | 40% | 3.61 | 5.82 | `#000000` | AA |
| `200` | `#99B5A3` | 153, 181, 163 | 60% | 2.21 | 9.49 | `#000000` | AAA |
| `100` | `#CCDAD1` | 204, 218, 209 | 80% | 1.45 | 14.52 | `#000000` | AAA |

### Muted Grey — Supporting Colors

| Step | Hex | RGB | White mix | vs `#FFF` | vs `#000` | Text on it | WCAG |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `500` | `#596582` | 89, 101, 130 | 0% | 5.82 | 3.61 | `#FFFFFF` | AA |
| `400` | `#7A849B` | 122, 132, 155 | 20% | 3.75 | 5.60 | `#000000` | AA |
| `300` | `#9BA3B4` | 155, 163, 180 | 40% | 2.53 | 8.29 | `#000000` | AAA |
| `200` | `#BDC1CD` | 189, 193, 205 | 60% | 1.80 | 11.67 | `#000000` | AAA |
| `100` | `#DEE0E6` | 222, 224, 230 | 80% | 1.32 | 15.91 | `#000000` | AAA |

### Grey — Neutral Colors

| Step | Hex | RGB | White mix | vs `#FFF` | vs `#000` | Text on it | WCAG |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `500` | `#E5E6E9` | 229, 230, 233 | 0% | 1.25 | 16.83 | `#000000` | AAA |
| `400` | `#EAEBED` | 234, 235, 237 | 20% | 1.19 | 17.60 | `#000000` | AAA |
| `300` | `#EFF0F2` | 239, 240, 242 | 40% | 1.14 | 18.42 | `#000000` | AAA |
| `200` | `#F5F5F6` | 245, 245, 246 | 60% | 1.09 | 19.27 | `#000000` | AAA |
| `100` | `#FAFAFB` | 250, 250, 251 | 80% | 1.04 | 20.13 | `#000000` | AAA |

### ⚠️ Discrepancy in the source palette

The palette image prints the same hex twice in one ramp. Every other ramp follows the
white-tint ladder exactly (29 of 30 swatches), so this reads as a typo in the source file,
not an intentional value — and the rendered swatch in the image is visibly lighter than the
step above it, which the printed hex would not be.

| Ramp | Step | Printed in image | Ladder value | Status |
| --- | --- | --- | --- | --- |
| Grass Green | `200` | `#66B383` (= step 300) | `#99CCAD` | **Needs confirming** |

The tables above use the computed ladder value. Confirm against the design source before build.

### Text colors

Text ink sits outside the six ramps: one hue at two opacities, not a tint ladder.

| Role | Token | Value | On white | Contrast | WCAG |
| --- | --- | --- | --- | --- | --- |
| Headline | `--color-ink` | `#0A224D` | `#0A224D` | 15.57 | AAA |
| Body copy | `--color-ink-body` | `#0A224D` @ 80% | `#3B4E71` | 8.35 | AAA |

Both clear AA at every size on every documented background, and AAA on white and the whole Grey
ramp:

| Background | Headline contrast | Body composites to | Body contrast |
| --- | --- | --- | --- |
| `#FFFFFF` White | 15.57 | `#3B4E71` | 8.35 |
| `#FAFAFB` Grey `100` | 14.92 | `#3A4D70` | 8.13 |
| `#F5F5F6` Grey `200` | 14.29 | `#394C6F` | 7.91 |
| `#EFF0F2` Grey `300` | 13.65 | `#384B6E` | 7.67 |
| `#EAEBED` Grey `400` | 13.05 | `#374A6D` | 7.45 |
| `#E5E6E9` Grey `500` | 12.47 | `#36496C` | 7.23 |
| `#CCE6D6` Grass Green `100` | 11.76 | `#314968` | 6.94 ⚠️ |

⚠️ Grass Green `100` — the announcement bar surface — is the first background where body ink
falls below AAA. At 6.94 it clears AA comfortably and is fine for the 14 px
[Label S](#labels--inter-tight) the bar uses, but it is no longer in the AAA band. Headline ink
on the same surface is 11.76 if a stricter margin is wanted.

**Set body copy with alpha, not the flattened hex.** `rgb(10 34 77 / 0.8)` composites correctly
against whatever sits behind it; `#3B4E71` is only right on pure white and will read slightly
heavy on the grey surfaces. The flattened values above are for tools that cannot take alpha
(Figma exports to flat formats, HTML email).

Ink is for text only. It is not a surface color and has no tint ramp — for dark surfaces use
Deep Blue `500`.

> **Overlap to resolve.** `#0A224D` and Deep Blue `500` `#0E306D` are near-identical —
> a contrast ratio of 1.23 between them, which is not a visible difference. The system now
> carries two dark navies with no rule for choosing between them. Either drop one, or state
> plainly that ink is for type and Deep Blue is for fills. See [Open questions](#open-questions).

### CSS custom properties — color

```css
:root {
  /* Light Blue — Brand Color 1 */
  --color-blue-500: #0076BD;
  --color-blue-400: #3391CA;
  --color-blue-300: #66ADD7;
  --color-blue-200: #99C8E5;
  --color-blue-100: #CCE4F2;
  --color-blue: var(--color-blue-500);

  /* Deep Blue — Secondary Color 1 */
  --color-deep-blue-500: #0E306D;
  --color-deep-blue-400: #3E598A;
  --color-deep-blue-300: #6E83A7;
  --color-deep-blue-200: #9FACC5;
  --color-deep-blue-100: #CFD6E2;
  --color-deep-blue: var(--color-deep-blue-500);

  /* Grass Green — Brand Color 2 */
  --color-green-500: #008031;
  --color-green-400: #33995A;
  --color-green-300: #66B383;
  --color-green-200: #99CCAD;
  --color-green-100: #CCE6D6;
  --color-green: var(--color-green-500);

  /* Deep Green — Secondary Color 2 */
  --color-deep-green-500: #00461A;
  --color-deep-green-400: #336B48;
  --color-deep-green-300: #669076;
  --color-deep-green-200: #99B5A3;
  --color-deep-green-100: #CCDAD1;
  --color-deep-green: var(--color-deep-green-500);

  /* Muted Grey — Supporting Colors */
  --color-muted-500: #596582;
  --color-muted-400: #7A849B;
  --color-muted-300: #9BA3B4;
  --color-muted-200: #BDC1CD;
  --color-muted-100: #DEE0E6;
  --color-muted: var(--color-muted-500);

  /* Grey — Neutral Colors */
  --color-grey-500: #E5E6E9;
  --color-grey-400: #EAEBED;
  --color-grey-300: #EFF0F2;
  --color-grey-200: #F5F5F6;
  --color-grey-100: #FAFAFB;
  --color-grey: var(--color-grey-500);

  /* Text ink — not a ramp; one hue at two opacities */
  --color-ink: #0A224D;
  --color-ink-body: rgb(10 34 77 / 0.8);
  --color-ink-body-flat: #3B4E71; /* composited on white, for tools without alpha */
}
```

```css
h1, h2, h3, h4, h5, h6 { color: var(--color-ink); }
body { color: var(--color-ink-body); }
```

---

## Typography

**Helvetica / Inter Tight.** Supersedes the Syne + Inter pairing inferred from the wireframe
`.docx`; matches the files supplied in `Fonts/`.

> **Partial spec — more rows expected.** Headlines 1–2 and the Regular weight body scale are
> specified below. Everything under [Still to come](#still-to-come) is not yet defined.

| Family | Role | Weights available | Source |
| --- | --- | --- | --- |
| **Helvetica** | Display / headlines | Regular, Bold, Bold Oblique | `Fonts/Helvetica*.ttf` (licensed, self-host) |
| **Inter Tight** | Body / UI | Variable 100–900 | `Fonts/InterTight-VariableFont_wght.ttf`, also on Google Fonts |

Web fallback stack for Helvetica where the licensed file is not loaded:
`Helvetica, "Helvetica Neue", Arial, sans-serif`.

### Headlines — Helvetica Bold

| Role | Font | Weight | Line height | Size | rem @16 | CSS `line-height` |
| --- | --- | --- | --- | --- | --- | --- |
| Headline 1 | Helvetica | Bold | 100% | 96 px | 6rem | `1` |
| Headline 2 | Helvetica | Bold | Auto | 80 px | 5rem | `normal` |
| Headline 3–5 | — | — | — | — | — | *awaiting spec* |
| Headline 6 | Helvetica | Bold | 120% | 24 px | 1.5rem | `1.2` |

**In use:** product card titles (`.tile__title`, ×5) in `--color-ink`, with `-0.01em` tracking.

Two things about Headline 6 worth holding onto:

**It is the same size as body XL — 24 px — but a different role.** The two are told apart by
family and weight, not size: Headline 6 is Helvetica Bold, body XL is Inter Tight Regular. They
should not be collapsed into one token, and `--text-h6` is deliberately separate from
`--text-xl` despite both being `1.5rem`.

**Its line height and tracking were not specified**, so both carry over from the implementation
that preceded it (`1.2` and `-0.01em`). The tracking was originally tuned for Inter Tight at
28 px; at 24 px Helvetica Bold it works out to −0.24 px, which is not a visible amount either
way. Worth setting deliberately when the rest of the headline scale is specified.

### Body — Regular weight, Inter Tight

| Role | Font | Weight | Line height | Size | rem @16 | CSS `line-height` |
| --- | --- | --- | --- | --- | --- | --- |
| XL | Inter Tight | Regular | Auto | 24 px | 1.5rem | `normal` |
| Large | Inter Tight | Regular | Auto | 22 px | 1.375rem | `normal` |
| Medium | Inter Tight | Regular | Auto | 20 px | 1.25rem | `normal` |
| Small | Inter Tight | Regular | Auto | 18 px | 1.125rem | `normal` |
| Xs | Inter Tight | Regular | Auto | 16 px | 1rem | `normal` |

Every size lands on a whole or half rem at a 16 px root, so the scale can be authored in either
unit without rounding drift.

**In use:**

| Role | Element |
| --- | --- |
| Large | Hero subheadline (`.hero__subheadline`), problem body (`.problem__copy`) |
| Small | Comparison table cells |
| Xs | Product card use case (`.tile__use`) and price/coverage row (`.tile__meta`), ×5 |

Line height is inherited rather than set per role: the build resolves the spec's `Auto` to
`--leading-body: 1.45` on `body`, per the [type note](#type-notes) below. The card copy above
therefore renders at 1.45, not at `normal`.

### Labels — Inter Tight

For UI chrome rather than reading copy.

**Named by size, not by number:** XL, L, M, S, XS, largest to smallest — the same convention as
the body scale. Only XL and S are specified so far; L and M are left free for sizes between them,
and XS for anything below 14 px.

| Role | Font | Weight | Line height | Size | rem @16 | CSS `line-height` |
| --- | --- | --- | --- | --- | --- | --- |
| Label XL | Inter Tight | Bold (700) | *not specified* | 24 px | 1.5rem | `normal` (until set) |
| Label L | — | — | — | — | — | *unassigned* |
| Label M | — | — | — | — | — | *unassigned* |
| Label S | Inter Tight | Regular (400) | Normal | 14 px | 0.875rem | `normal` |
| Label S Bold | Inter Tight | Bold (700) | Normal | 14 px | 0.875rem | `normal` |

Label S is a size role, not a single weight — the two variants share every metric and differ
only in weight.

**Label XL is 24 px, the same size as body XL and Headline 6.** All three are separate roles and
separate tokens (`--text-label-xl`, `--text-xl`, `--text-h6`). Label XL is Inter Tight **Bold**;
body XL is Inter Tight Regular; Headline 6 is Helvetica Bold. Label XL and Headline 6 are both
bold at 24 px, so only the family tells them apart — keep that in mind when choosing between
them. Its line height was not specified; it follows Label S (`normal`) until it is.

**In use:** Label XL — the size-group labels in Choose your size, "For your yard" and "For
professionals" (`.sizes__group-label`), in Grass Green `500`.

**Renamed.** Label S was previously "Label 1" (token `--text-label-1`, now `--text-label-s`).

**In use:**

| Element | Variant | On | Ink |
| --- | --- | --- | --- |
| Announcement bar (`.announcement__text`) | Bold | Grass Green `100` | `--color-ink-body` |
| Header nav links (`.site-nav__link`) | Regular | Page background | `--color-ink` |

Nav links additionally take a hover state: color shifts to Light Blue `500` and the text
underlines at 2 px thickness, 4 px offset.

At 14 px, Bold does not reach the WCAG large-text threshold (that starts at 14 pt bold ≈
18.66 px), so the 4.5 minimum still applies. The bar measures 6.94 — see
[Text colors](#text-colors).

### Still to come

- Headlines 3–5 — the gap between Headline 6 (24 px) and Headline 2 (80 px) is still open
- Weight groups for the body scale — Inter Tight is variable, so Medium / Semibold / Bold are
  available. Bold is already in use at [Label S and Label XL](#labels--inter-tight); the body sizes are
  still Regular-only.
- Letter-spacing, for headlines especially — Helvetica Bold at 96 px needs negative tracking
- Responsive steps — 96 px is roughly a third of a 320 px viewport
- Paragraph spacing and max measure

### Type notes

Two things to settle before this is buildable:

**"Auto" is not a CSS value.** It is Figma's label for the font's own default line height. The
CSS equivalent is `line-height: normal`, which resolves from the font's internal metrics and
differs between Helvetica and Inter Tight — and between browsers. Any layout depending on
rhythm will drift. Recommend replacing each `Auto` with a number before build.

**The body scale is linear, not modular.** 24 / 22 / 20 / 18 / 16 steps by a flat 2 px, so
adjacent sizes differ by 9% at the top and 12.5% at the bottom. That is a narrow separation —
XL and Large will read as nearly the same size in situ. Intentional or worth widening.

### CSS custom properties — type

Sizes as given. `--leading-auto` is a placeholder for the unresolved `Auto` values above.

```css
:root {
  --font-display: "Helvetica", "Helvetica Neue", Arial, sans-serif;
  --font-body:    "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* Headlines — Helvetica Bold */
  --text-h1: 6rem;     /* 96px */
  --text-h2: 5rem;     /* 80px */
  --text-h6: 1.5rem;   /* 24px — separate from --text-xl despite the same value */

  /* Body — Inter Tight Regular */
  --text-xl: 1.5rem;   /* 24px */
  --text-lg: 1.375rem; /* 22px */
  --text-md: 1.25rem;  /* 20px */
  --text-sm: 1.125rem; /* 18px */
  --text-xs: 1rem;     /* 16px */

  /* Labels — Inter Tight, named by size (XL, L, M, S, XS) */
  --text-label-xl: 1.5rem;  /* 24px, Bold — separate from --text-xl and --text-h6 */
  --text-label-s:  0.875rem; /* 14px */

  --weight-body:     400;
  --weight-medium:   500;
  --weight-bold:     700;
  --weight-headline: var(--weight-bold);

  --leading-h1:     1;      /* 100% */
  --leading-normal: normal; /* Label S — specified as normal, left unresolved */
  --leading-auto:   normal; /* replace with a number before build */
}
```

Colors for type are settled — see [Text colors](#text-colors).

---

## Grid

**12 columns · 40 px margins · 20 px gutters.**

| Property | Value |
| --- | --- |
| Columns | 12 |
| Margin (each side) | 40 px |
| Gutter | 20 px |
| Total gutter width | 220 px (11 × 20) |
| Column width | `(viewport − 300) ÷ 12` |

The 300 px constant is the two 40 px margins plus the eleven 20 px gutters — the only fixed
part. Columns are fluid; everything else holds.

### Column width by viewport

| Viewport | Content width | Column width |
| --- | --- | --- |
| 1920 px | 1840 px | 135.00 px |
| 1512 px | 1432 px | 101.00 px |
| 1440 px | 1360 px | 95.00 px |
| 1366 px | 1286 px | 88.83 px |
| 1280 px | 1200 px | 81.67 px |
| 1024 px | 944 px | 60.33 px |
| 768 px | 688 px | 39.00 px ⚠️ |
| 375 px | 295 px | 6.25 px ⚠️ |

### ⚠️ The grid does not match the mock

Measured against `Copy.png` (1440 px wide), content is inset **121 px** on both sides at every
band sampled — hero, size tiles, founder story, footer. That is a content width of ~1198 px,
not the 1360 px that 40 px margins produce at 1440.

| | Content width at 1440 | Column width |
| --- | --- | --- |
| Grid as specified | 1360 px | 95.00 px |
| As drawn in `Copy.png` | ~1200 px | 81.67 px |

Two readings, and they build differently:

1. **40 px is a hard margin.** Content is 1360 px at 1440 and the mock is drawn off-grid.
2. **40 px is a *minimum* margin, with a 1200 px max content width.** A 1200 px container
   centred in 1440 gives a 120 px inset — within a pixel of what is drawn. The mock is on-grid
   and the spec is simply missing its max-width.

Reading 2 fits the measurement almost exactly, but it is an inference. Confirm which is
intended before anyone builds — it changes every section's content width.

### ⚠️ No narrow-viewport behaviour

Holding 12 columns and 40 px margins all the way down collapses the grid: 39 px columns at
768 px, 6.25 px at 375 px. Below roughly 1024 px the column count needs to drop (12 → 8 → 4 is
the usual ladder) and the margin usually tightens to 20–24 px. Not yet specified.

### CSS custom properties — grid

`1fr` columns compute the widths from the formula above, so no column value is ever hardcoded.

```css
:root {
  --grid-columns: 12;
  --grid-margin:  40px;
  --grid-gutter:  20px;
  /* --grid-max: 1200px;  <- uncomment if reading 2 is confirmed */
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gutter);
  padding-inline: var(--grid-margin);
  /* max-inline-size: var(--grid-max); margin-inline: auto; */
}

/* span helpers */
.col-1  { grid-column: span 1; }
.col-2  { grid-column: span 2; }
.col-3  { grid-column: span 3; }
.col-4  { grid-column: span 4; }
.col-6  { grid-column: span 6; }
.col-8  { grid-column: span 8; }
.col-12 { grid-column: span 12; }
```

### Section spans in the current design

Derived from `Copy.png` for reference — not yet confirmed as spec.

| Section | Layout | Span |
| --- | --- | --- |
| Hero | Copy left, image right | 6 / 6 |
| The Problem | Image left, copy right | 6 / 6 |
| Choose Your Size — your yard | Three tiles | 4 / 4 / 4 |
| Choose Your Size — professionals | Two tiles | 4 / 4 |
| Us vs. Them | Full-width table | 12 |
| Why We Made This | Copy left, image right | 6 / 6 |
| What Users Say | Three cards | 4 / 4 / 4 |
| FAQ | Centred accordion | 8, centred |
| Footer | Brand + three columns | 3 / 3 / 3 / 3 |

---

## Motion

### Text reveal

The default entrance for text. It rises a short distance into place the first time it enters
the viewport, on a curve with a slow start and a long settle so the type reads as having
weight rather than fading in.

| Property | Value |
| --- | --- |
| Trigger | First entry into the viewport, at 40% visibility |
| Repeat | One-shot — latches on reveal, never replays |
| Travel | 18 px, from below |
| Duration | 1100 ms |
| Easing | `cubic-bezier(0.2, 0.75, 0.15, 1)` — `--ease-weighted` |
| Opacity | 0 → 1, reaching full at 55% of the timeline |

Opacity resolving before the movement does is deliberate: the text is fully legible while it
is still visibly settling, so the motion reads as weight rather than as a fade.

Measured on the shipped implementation:

| Time | translateY | Opacity |
| --- | --- | --- |
| 80 ms | 18.0 px | 0 |
| 246 ms | 14.8 px | 0.33 |
| 377 ms | 7.0 px | 0.83 |
| 507 ms | 3.3 px | 0.95 |
| 774 ms | 0.8 px | 1 |
| 1173 ms | 0 px | 1 |

Roughly 60% of the travel happens in the first third of the timeline; the remaining ~700 ms
covers the last 3 px. That long tail is the whole effect — shortening the duration or
substituting a symmetrical ease loses it.

### Scope

**Applies to all body copy and titles.** Headlines, subheadlines, section titles, paragraphs,
lead copy, takeaways, and card copy.

Does not apply to controls (buttons, form fields, nav), to UI chrome
([labels](#labels--inter-tight)), or to elements with their own entrance defined below.

### Exception — the hero headline

The hero headline keeps its own entrance and must not be changed to the text reveal. It is a
different mechanism: each line is clipped to its own line box and the text rises the full line
height out of that mask, staggered line by line. That only works on a masked single line of
display type; applied to a wrapping paragraph it would clip mid-sentence.

| | Text reveal | Hero headline |
| --- | --- | --- |
| Trigger | On entering view | On first page load |
| Travel | 18 px | 105% of the line box |
| Duration | 1100 ms | 1300 ms |
| Stagger | None | 120 ms per line |
| Masked | No | Yes, per line |
| Easing | `--ease-weighted` | `--ease-weighted` (shared) |

Both share the same easing curve, which is what keeps them recognisably the same family
despite the different mechanics.

### Reduced motion and static capture

**Every element using the text reveal must ship a resting-state override.** The reveal holds
the element at `opacity: 0` until it is triggered, and the global reduced-motion and
`[data-static]` rules disable the animation that would otherwise clear it — so without the
override the text renders permanently invisible for anyone with reduced motion enabled, and in
every screenshot.

This is a content-loss bug, not a cosmetic one. Verify all three states before shipping any
element that uses it.

### CSS custom properties — motion

```css
:root {
  --ease-weighted: cubic-bezier(0.2, 0.75, 0.15, 1); /* slow start, long settle */
  --reveal-distance: 18px;
  --reveal-duration: 1100ms;
}
```

```css
/* Start frame — held until the reveal is triggered. */
.text-reveal {
  opacity: 0;
  transform: translateY(var(--reveal-distance));
}

.text-reveal.is-revealed {
  animation: text-reveal var(--reveal-duration) var(--ease-weighted) forwards;
}

@keyframes text-reveal {
  from { opacity: 0; transform: translateY(var(--reveal-distance)); }
  55%  { opacity: 1; }
  to   { opacity: 1; transform: translateY(0); }
}

/* Required. Without this the text never becomes visible in these modes. */
html[data-static] .text-reveal {
  opacity: 1;
  transform: none;
}
```

The trigger is `useInView()` (`src/hooks/useInView.ts`), which latches on first intersection
and starts pre-latched under reduced motion and static capture.

The shared class, keyframes, tokens and both resting-state overrides live in
`src/styles/base.css` and `src/styles/tokens.css`.

### Content already in view on load

Copy that is on screen when the page loads cannot use the intersection trigger — it is already
intersecting — so its entrance is scheduled by time instead, via `useLoadReveal()`
(`src/hooks/useLoadReveal.ts`).

**That delay must be a cap, never a plain `animation-delay`.** A fixed delay holds the element
at `opacity: 0` for its full duration whether or not the reader is still there: scroll during
the window and the entrance plays to an empty viewport, so the copy reads as having been
skipped entirely. `useLoadReveal` reveals on the first scroll instead, on the principle that
once the reader has started moving, the load choreography has lost its audience and holding
the text back only hides it.

| Reader | Behaviour |
| --- | --- |
| Does not scroll | Reveals at the scheduled time, choreography intact |
| Scrolls during the window | Reveals immediately |
| Reduced motion / static | Revealed from the start |

The longer the scheduled delay, the more this matters — the hero subheadline waits 2730 ms for
the bottle to settle, which is more than long enough to lose a fast scroller.

### Implementation status

Applied to every title and body element on the page. 17 elements carry `.text-reveal`.

| Section | Element | Status |
| --- | --- | --- |
| 01 Hero | Headline | Exempt — [own entrance](#exception--the-hero-headline) |
| 01 Hero | `.hero__subheadline` | Scheduled via `useLoadReveal(2730)` — [already in view on load](#content-already-in-view-on-load) |
| 01 Hero | Label, CTA | Exempt — part of the load choreography |
| 02 The Problem | `.problem__headline` | On a wrapper: `ReactiveTicker` does not forward a ref |
| 02 The Problem | `.problem__copy` | Shared class |
| 02 The Problem | `.problem__takeaway` | Shared class |
| 03 Choose Your Size | `.sizes__headline` | Shared class |
| 03 Choose Your Size | `.tile__copy` (×5) | Title, use case and price revealed together as one card block |
| 03 Choose Your Size | Group eyebrows | Exempt — UI chrome, not a title |
| 04 Us vs. Them | `.compare__headline`, `.compare__intro` | Shared class |
| 04 Us vs. Them | Comparison table | Exempt — tabular data; the panel carries its own presence |
| 05 Why We Made This | `.founder__copy` | Headline, story and attribution as one block |
| 06 What Users Say | `.reviews__headline`, `.reviews__carousel` | Shared class |
| 07 FAQ | `.faq__headline`, `.faq__list` | Shared class |

Verified in all three states: nothing sits at `opacity: 0` under static capture or reduced
motion, and every element reaches full opacity after a full-page scroll.

---

## Open questions

| # | Item | Detail |
| --- | --- | --- |
| 1 | Grass Green `200` | Palette image prints `#66B383`, a duplicate of step `300`. Ladder gives `#99CCAD`, used here. Confirm at source. |
| 2 | Ink vs Deep Blue `500` | `#0A224D` and `#0E306D` differ by a contrast ratio of 1.23 — not a visible difference. Two dark navies with no rule for choosing between them. |
| 3 | Ink is outside the ramps | `#0A224D` is a seventh color not on the palette board. Confirm it belongs in the system rather than replacing Deep Blue `500`. |
| 4 | `Auto` line heights | Six of the seven specified sizes use Figma's `Auto`, which has no fixed CSS equivalent and resolves differently per font and browser. Needs a number each. |
| 5 | Body scale separation | 24 / 22 / 20 / 18 / 16 steps by a flat 2 px — adjacent sizes differ by 9–12%, close enough to read as the same size. Confirm or widen. |
| 6 | Headlines 3–5 | Headline 6 now anchors the bottom of the scale at 24 px, but nothing fills 24 px → 80 px. |
| 7 | Grid vs mock | 40 px margins give a 1360 px content width at 1440; `Copy.png` is drawn at ~1200 px (121 px inset). Either the mock is off-grid, or the spec is missing a 1200 px max-width. Changes every section. |
| 8 | Narrow-viewport grid | 12 columns at 40 px margins yields 39 px columns at 768 px and 6.25 px at 375 px. Needs a column-count ladder and a tighter margin below ~1024 px. |
| 9 | Stagger between adjacent text | The [text reveal](#text-reveal) has no stagger. Where a title and its paragraph enter view together they will animate in unison, which reads flatter than a short offset. Confirm whether siblings should stagger, and by how much. |
| 10 | Reveal on long sections | At 40% visibility a tall block may not trigger until well into the viewport. A fixed top-margin trigger may read better for full-height sections. |

---

## Not yet defined

- Spacing scale
- Border radii and elevation
- Component specs (buttons, form fields, cards, accordion)
- Iconography
- Motion beyond the [text reveal](#text-reveal) — controls, hover states, page transitions
