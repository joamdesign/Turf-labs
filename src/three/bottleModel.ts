import {
  CatmullRomCurve3,
  CylinderGeometry,
  Group,
  LatheGeometry,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  RepeatWrapping,
  SRGBColorSpace,
  Texture,
  TubeGeometry,
  Vector2,
  Vector3,
} from 'three';

/**
 * Procedural 1-gallon round jug, modelled in inches (y up, base at y = 0) from the product
 * photograph. The label band wraps the straight section of the body once; its seam sits
 * under the handle, which is where the print dieline places it.
 */
export const BOTTLE = {
  height: 11.78,
  bodyRadius: 3.0,
  label: { bottom: 1.75, height: 5.15, radius: 3.04 },
  /**
   * Texture u of the visual front centre: the OdorRx wordmark with an icon column either side.
   * On the dieline that sits at the middle of the strip, so the seam falls at the back.
   */
  labelFrontU: 0.51,
};

function lathe(
  points: Array<[number, number]>,
  segments = 96,
  smooth = true,
  maxRadius = Number.POSITIVE_INFINITY,
): LatheGeometry {
  let profile: Vector2[];
  if (smooth) {
    const curve = new CatmullRomCurve3(points.map(([r, y]) => new Vector3(r, y, 0)), false, 'centripetal');
    // Clamp so the spline cannot overshoot outward and poke through the label band.
    profile = curve.getPoints(points.length * 8).map((p) => new Vector2(Math.min(maxRadius, Math.max(0, p.x)), p.y));
  } else {
    profile = points.map(([r, y]) => new Vector2(r, y));
  }
  return new LatheGeometry(profile, segments);
}

export function createLabelTexture(image: HTMLImageElement, maxAnisotropy: number): Texture {
  const texture = new Texture(image);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = RepeatWrapping;
  texture.anisotropy = maxAnisotropy;
  // CylinderGeometry puts u = 0 on +z (facing the camera); shift so the front panel faces it.
  texture.offset.x = BOTTLE.labelFrontU;
  texture.needsUpdate = true;
  return texture;
}

export function createBottle(labelTexture: Texture): Group {
  const group = new Group();

  const plastic = new MeshPhysicalMaterial({
    color: 0xf3f5f7,
    roughness: 0.4,
    metalness: 0,
    clearcoat: 0.4,
    clearcoatRoughness: 0.35,
  });

  // Body: rounded base, straight label section, shoulder, neck.
  const body = new Mesh(
    lathe(
      [
        [0, 0.16],
        [1.4, 0.16],
        [2.45, 0.22],
        [2.86, 0.46],
        [2.98, 0.9],
        [BOTTLE.bodyRadius, 1.6],
        [BOTTLE.bodyRadius, 3.5],
        [BOTTLE.bodyRadius, 5.5],
        [BOTTLE.bodyRadius, 7.5],
        [2.95, 8.2],
        [2.72, 8.9],
        [2.3, 9.45],
        [1.7, 9.85],
        [1.15, 10.1],
        [0.9, 10.3],
        [0.86, 10.75],
      ],
      96,
      true,
      BOTTLE.bodyRadius,
    ),
    plastic,
  );
  group.add(body);

  // Cap: flat-shaded facets read as the moulded grip ridges.
  const cap = new Mesh(
    lathe(
      [
        [0.86, 10.72],
        [1.04, 10.72],
        [1.07, 10.9],
        [1.07, 11.55],
        [1.0, 11.7],
        [0.88, 11.78],
        [0, 11.78],
      ],
      44,
      false,
    ),
    new MeshStandardMaterial({ color: 0xf6f7f9, roughness: 0.55, metalness: 0, flatShading: true }),
  );
  group.add(cap);

  // Handle: a D-shaped loop rooted in the shoulder, out to the side (+x) and back into the upper body.
  const handlePath = new CatmullRomCurve3(
    [
      new Vector3(1.2, 9.7, 0),
      new Vector3(2.35, 9.85, 0),
      new Vector3(3.1, 9.35, 0),
      new Vector3(3.32, 8.5, 0),
      new Vector3(3.1, 7.8, 0),
      new Vector3(2.3, 7.45, 0),
    ],
    false,
    'centripetal',
  );
  const handle = new Mesh(new TubeGeometry(handlePath, 64, 0.48, 28, false), plastic);
  group.add(handle);

  // Label band, sitting a hair above the body surface.
  const label = new Mesh(
    new CylinderGeometry(BOTTLE.label.radius, BOTTLE.label.radius, BOTTLE.label.height, 160, 1, true),
    new MeshStandardMaterial({ map: labelTexture, roughness: 0.5, metalness: 0 }),
  );
  label.position.y = BOTTLE.label.bottom + BOTTLE.label.height / 2;
  group.add(label);

  return group;
}
