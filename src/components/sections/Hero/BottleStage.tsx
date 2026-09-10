import './BottleStage.css';

type Props = {
  image: { src: string; alt: string; width: number; height: number };
};

/**
 * Product stage for the hero bottle: the studio render, layered in front of the headline so
 * the letters behind it are partly hidden (as in the section design). On load it rises into
 * place; on scroll it drifts slower than the page with a slight scale, which never changes the
 * bottle's shape. Scroll progress arrives as the `--scroll-progress` custom property.
 *
 * Lighting: the hero's light comes from the upper right, so the render is relit with two
 * overlays masked to its silhouette (a rim highlight on the right, a soft shade on the left)
 * and its contact shadow falls to the lower left.
 */
export function BottleStage({ image }: Props) {
  return (
    <figure className="bottle" style={{ ['--bottle-mask' as string]: `url(${image.src})` }}>
      <div className="bottle__shadow" aria-hidden="true" />
      <div className="bottle__object">
        <img
          className="bottle__image"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          decoding="async"
          fetchPriority="high"
        />
        <div className="bottle__light bottle__light--rim" aria-hidden="true" />
        <div className="bottle__light bottle__light--shade" aria-hidden="true" />
      </div>
    </figure>
  );
}
