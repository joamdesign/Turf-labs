import {
  ACESFilmicToneMapping,
  DirectionalLight,
  Group,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  WebGLRenderer,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { BOTTLE, createBottle, createLabelTexture } from './bottleModel';

const FULL_TURN = Math.PI * 2;

type Options = {
  /** Scroll progress 0 → 1 maps onto this many turns. */
  turns?: number;
  /** Skip easing and render exactly the target angle (static capture / reduced motion). */
  immediate?: boolean;
};

/**
 * Owns the WebGL scene for the hero bottle. Renders on demand: a frame is drawn only when the
 * target angle changes, easing toward it and then going idle.
 */
export class BottleRenderer {
  private renderer: WebGLRenderer;
  private scene = new Scene();
  private camera: PerspectiveCamera;
  private bottle: Group;
  private target = 0;
  private current = 0;
  private frame = 0;
  private turns: number;
  private immediate: boolean;
  private disposed = false;

  constructor(canvas: HTMLCanvasElement, label: HTMLImageElement, options: Options = {}) {
    this.turns = options.turns ?? 1;
    this.immediate = options.immediate ?? false;

    this.renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.setClearColor(0x000000, 0);

    const pmrem = new PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.85;
    pmrem.dispose();

    const key = new DirectionalLight(0xffffff, 2.4);
    key.position.set(-7, 15, 12);
    const fill = new DirectionalLight(0xdfe9f3, 0.9);
    fill.position.set(9, 6, 9);
    const rim = new DirectionalLight(0xffffff, 0.7);
    rim.position.set(4, 9, -10);
    this.scene.add(key, fill, rim);

    this.camera = new PerspectiveCamera(20, 1, 1, 200);
    this.camera.position.set(0, 8.4, 34);
    this.camera.lookAt(0, BOTTLE.height / 2 + 0.1, 0);

    // Software GL (SwiftShader / llvmpipe) streaks with anisotropic filtering; keep it isotropic there.
    const anisotropy = isSoftwareRenderer(this.renderer) ? 1 : Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    const texture = createLabelTexture(label, anisotropy);
    this.bottle = createBottle(texture);
    this.scene.add(this.bottle);

    this.render();
  }

  /** Scroll progress 0 → 1. */
  setProgress(progress: number): void {
    this.target = -progress * FULL_TURN * this.turns;
    if (this.immediate) {
      this.current = this.target;
      this.render();
      return;
    }
    this.tick();
  }

  private tick = (): void => {
    if (this.disposed) return;
    this.frame = 0;
    const delta = this.target - this.current;
    if (Math.abs(delta) < 0.0004) {
      this.current = this.target;
      this.render();
      return;
    }
    this.current += delta * 0.14;
    this.render();
    this.frame = requestAnimationFrame(this.tick);
  };

  render(): void {
    this.bottle.rotation.y = this.current;
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.disposed = true;
    if (this.frame) cancelAnimationFrame(this.frame);
    this.scene.traverse((obj) => {
      const mesh = obj as { geometry?: { dispose(): void }; material?: { dispose(): void; map?: { dispose(): void } } };
      mesh.geometry?.dispose();
      mesh.material?.map?.dispose();
      mesh.material?.dispose();
    });
    this.scene.environment?.dispose();
    this.renderer.dispose();
  }
}

function isSoftwareRenderer(renderer: WebGLRenderer): boolean {
  const gl = renderer.getContext();
  const info = gl.getExtension('WEBGL_debug_renderer_info');
  const name = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : '';
  return /swiftshader|llvmpipe|software/i.test(name);
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}
