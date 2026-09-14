// Copy source of truth: "Turf Labs Co - Homepage Wireframe.md" (Joam Agency).

export const announcement = {
  text: 'Free shipping on orders over $XXX',
};

export const navigation = {
  links: [
    { label: 'Home', href: '/', current: true },
    { label: 'Shop', href: '#shop' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const hero = {
  label: 'Artificial Turf Cleaner & Deodorizer',
  // Line breaks mirror the approved composition at the 1440px canonical viewport.
  headlineLines: ['A smarter way', 'to clean', 'and deodorize', 'artificial', 'turf.'],
  subheadline:
    'OdorRx makes artificial turf care simple with a ready-to-use formula that cleans and controls odors at the source.',
  cta: { label: 'Shop OdorRx', href: '#shop' },
  product: {
    src: '/products/odorrx-1-gallon.webp',
    alt: 'OdorRx artificial turf cleaner and deodorizer, 1 gallon bottle',
    width: 1248,
    height: 1248,
  },
  // Wrap-around label texture built from the print dieline by scripts/build-label-texture.mjs
};

export const problem = {
  headline: 'The smell lives under your turf',
  headlineLines: ['The smell lives', 'under your turf'],
  body: 'Pet odor doesn’t stay on the surface. Urine drains through the turf fibers and settles into the infill and base underneath. Add heat, moisture or rain, and those trapped odors can come right back.',
  takeaway: 'It’s why the yard can smell worse right after you rinse it.',
};

export type SizeTile = {
  id: string;
  label: string;
  coverage: string;
  useCase: string;
  price: string;
  image: { src: string; alt: string };
  /** Lifestyle shot shown on hover, filling the image box. */
  hoverImage?: { src: string };
  /** Contact-shadow width as a share of the image box, sized to the render's footprint. */
  shadowWidth?: number;
};

export const sizes = {
  headlineLines: ['Small yard or big space?', 'We’ve got you covered.'],
  cta: 'Add to Cart',
  // Prices are made up for layout; the wireframe lists them as placeholders pending final pricing.
  groups: [
    {
      id: 'yard',
      label: 'For your yard',
      cta: { label: 'Add to Cart' },
      tiles: [
        {
          id: '1-gallon',
          label: '1 Gallon',
          coverage: 'Covers 200–400 sq ft',
          useCase: 'Spot-treating problem areas',
          price: '$39',
          image: { src: '/products/odorrx-1-gallon.webp', alt: 'One 1-gallon bottle of OdorRx' },
          hoverImage: { src: '/products/odorrx-1-gallon-hover.webp' },
          shadowWidth: 0.42,
        },
        {
          id: '2-x-1-gallon',
          label: '2 × 1 Gallon',
          coverage: 'Covers 400–800 sq ft',
          useCase: 'A small yard, or two treatments',
          price: '$69',
          image: { src: '/products/odorrx-2-pack.webp', alt: 'Two 1-gallon bottles of OdorRx' },
          hoverImage: { src: '/products/odorrx-2-pack-hover.webp' },
          shadowWidth: 0.58,
        },
        {
          id: '4-x-1-gallon',
          label: '4 × 1 Gallon',
          coverage: 'Covers 800–1,600 sq ft',
          useCase: 'A full yard with room to repeat',
          price: '$129',
          image: { src: '/products/odorrx-4-pack.webp', alt: 'Four 1-gallon bottles of OdorRx' },
          hoverImage: { src: '/products/odorrx-4-pack-hover.webp' },
          shadowWidth: 0.66,
        },
      ] as SizeTile[],
    },
    {
      id: 'professionals',
      label: 'For professionals & Commercial Use',
      cta: { label: 'Contact us', href: '#contact' },
      tiles: [
        {
          id: '55-gallon-drum',
          label: '55-gallon drum',
          coverage: 'Covers 11,000–22,000 sq ft',
          useCase: 'For facility maintenance',
          price: '$1,450',
          image: { src: '/products/odorrx-55-gallon-drum.webp', alt: '55-gallon drum of OdorRx' },
          hoverImage: { src: '/products/odorrx-55-gallon-drum-hover.webp' },
          shadowWidth: 0.5,
        },
        {
          id: '330-gallon-tote',
          label: '330-gallon tote',
          coverage: 'Covers 66,000–132,000 sq ft',
          useCase: 'For turf cleaning companies',
          price: '$7,900',
          image: { src: '/products/odorrx-330-gallon-tote.webp', alt: '330-gallon tote of OdorRx' },
          hoverImage: { src: '/products/odorrx-330-gallon-tote-hover.webp' },
          shadowWidth: 0.64,
        },
      ] as SizeTile[],
    },
  ],
};

export const comparison = {
  headlineLines: ['Not another', 'enzyme cleaner.'],
  headline: 'Not another enzyme cleaner.',
  intro: 'OdorRx takes a different approach to artificial turf odor.',
  columns: ['OdorRx', 'Enzyme cleaners'],
  rows: [
    { label: 'How it works', odorrx: 'Oxidation-based. Immediate action.', others: 'Bacteria and enzymes. Works over time.' },
    { label: 'Preparation', odorrx: 'Ready to use.', others: 'Requires dilution.' },
    { label: 'Outdoor reliability', odorrx: 'Unaffected. Same efficacy.', others: 'Degrades with heat.' },
    { label: 'Treatment frequency', odorrx: 'Long-lasting odor control', others: 'Requires frequent treatments' },
    { label: 'Shelf life', odorrx: '12 months', others: 'Aprox 6 months' },
  ],
};

export const founder = {
  headline: 'It started with a problem in my own backyard.',
  paragraphs: [
    'After installing artificial turf at my home, I quickly learned how difficult pet odor could be to manage. I tried the products homeowners are usually told to use, but I wasn’t satisfied with the results.',
    'That search eventually led us to experienced chemists who had spent years developing turf-cleaning chemistry.',
    'Together, we saw an opportunity to bring a more effective, easy-to-use solution directly to homeowners. That became Turf Labs — and OdorRx.',
  ],
  name: 'Matt Hynek',
  title: 'Co-Founder, Turf Labs Co.',
  image: { src: '/images/founder-turf.webp', alt: 'Hands unrolling a roll of artificial turf onto a lawn' },
};

export const testimonials = {
  headline: 'Real Turf. Real Results.',
  // One sentence per line; left to wrap, the column breaks it as "Real Turf. Real / Results."
  headlineLines: ['Real Turf.', 'Real Results.'],
  // Placeholder quotes: realistic in shape and subject, to be replaced with approved early-tester reviews.
  // Images are turf crops cut from the section 05 photograph until customer or lifestyle photos are supplied.
  items: [
    {
      rating: 5,
      quote:
        'We rinsed the yard every weekend and the smell was back by Tuesday. One treatment with OdorRx and it has been three weeks without a trace. The kids are playing barefoot again.',
      name: 'Danielle R.',
      location: 'Scottsdale, AZ',
      image: { src: '/images/turf-blades.jpg', alt: 'Close-up of green turf blades' },
    },
    {
      rating: 5,
      quote:
        'Two big dogs on a 600 sq ft turf patio. The enzyme sprays never got past the surface. This soaked into the infill and the difference was obvious the same afternoon.',
      name: 'Marcus T.',
      location: 'Austin, TX',
      image: { src: '/images/turf-block.jpg', alt: 'A square of turf lifted to show the soil beneath' },
    },
    {
      rating: 5,
      quote:
        'No mixing, no special equipment, no waiting days for bacteria to do their thing. I put it on with a hose-end sprayer before work and it just worked.',
      name: 'Priya S.',
      location: 'San Diego, CA',
      image: { src: '/images/turf-lawn.jpg', alt: 'A green lawn in soft focus' },
    },
  ],
};

export const faq = {
  headline: 'Questions we get',
  // Questions are the wireframe's. Answers are ~20-word placeholders in the wireframe's format;
  // every claim, especially the safety ones, needs sign-off before launch.
  items: [
    {
      question: 'Will OdorRx damage my turf?',
      answer: 'No. It is formulated for synthetic turf fibers and infill, and it leaves no residue or discoloration when used as directed.',
    },
    {
      question: 'How long until my pets and kids can go back on the turf?',
      answer: 'Once the treated area is dry, which is usually within an hour in normal conditions. [Confirm dry time before launch.]',
    },
    {
      question: 'Do I need a special sprayer?',
      answer: 'No. OdorRx is ready to use straight from the bottle with any standard hose-end or pump sprayer.',
    },
    {
      question: 'How is this different from the enzyme cleaner I bought at Home Depot?',
      answer: 'Enzyme cleaners rely on bacteria that work slowly and break down in heat. OdorRx is oxidation-based and acts on contact.',
    },
    {
      question: 'Why can’t I just use vinegar or dish soap?',
      answer: 'They mask odor on the surface. The smell lives in the infill underneath, and neither reaches it or breaks it down.',
    },
    {
      question: 'How much do I need for my yard?',
      answer: 'One gallon covers roughly 200 to 400 square feet. Use the coverage listed on each size above to match your area.',
    },
    {
      question: 'How often should I apply it?',
      answer: 'Most yards need a treatment every few weeks in season, more often with heavy pet use. Reapply when odor returns.',
    },
    {
      question: 'Does it have a scent?',
      answer: 'It has a light, clean scent while wet that fades as the turf dries. It does not leave a perfume behind.',
    },
    {
      question: 'Is it safe for my infill?',
      answer: 'Yes. It is designed to soak through the fibers into the infill, where odor collects, without degrading the material.',
    },
    {
      question: 'Where is it made?',
      answer: 'OdorRx is formulated and bottled in the USA.',
    },
  ],
};

export const footer = {
  tagline: 'Fake grass. Real results.',
  origin: 'Made in the USA',
  nav: [
    { label: 'Shop', href: '#shop' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy policy', href: '#privacy' },
    { label: 'Returns Policy', href: '#returns' },
    { label: 'Shipping Policy', href: '#shipping' },
  ],
  contact: {
    heading: 'Contact',
    address: 'Turf Labs Co. · PO Box 342712, Lakeway, TX 78734',
    domain: 'turflabsco.com',
  },
  // Handles are not yet supplied: placeholders for the three usual networks.
  social: [
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'TikTok', href: '#', icon: 'tiktok' },
  ] as Array<{ label: string; href: string; icon: 'instagram' | 'facebook' | 'tiktok' }>,
  copyright: '© 2026 Turf Labs Co.',
};

export type ProofIcon = 'lab' | 'flag' | 'paw' | 'spray' | 'award';

export const proofPoints: Array<{ label: string; icon: ProofIcon }> = [
  { label: 'Third-party tested', icon: 'lab' },
  { label: 'Made in the USA', icon: 'flag' },
  { label: 'Pet-friendly', icon: 'paw' },
  { label: 'Ready to use', icon: 'spray' },
  { label: 'Trusted by Experts', icon: 'award' },
];
