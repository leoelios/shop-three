import { WebGLRenderer } from "three";

export default function rendererFunc(widthCan, heightCan) {
  // Creating the renderer
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
  });

  renderer.setSize(widthCan, heightCan);
  renderer.setClearColor("#000", 0);

  return renderer;
}
