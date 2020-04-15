import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import generateRenderer from "./renderer";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import addPro from "./addPro";

export default function main(color) {
  const widthCan = 300;
  const heightCan = 370;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    widthCan / heightCan,
    0.1,
    1000
  );

  // Generate the canvas renderer
  const renderer = generateRenderer(widthCan, heightCan);
  const controls = new OrbitControls(camera, renderer.domElement);
  addPro(scene);

  // camera.position.z = 100;
  // camera.position.y = 20;
  // camera.position.x = 140;
  camera.position.z = 63;
  // Load objects to scene
  const loader = new GLTFLoader();

  loader.load(
    `./Model/Tshirt/${color}.gltf`,
    (gltf) => {
      scene.add(gltf.scene);
      gltf.scene.position.y = -25;
      // Add scene to renderer canvas
      controls.update();
      (function animate() {
        requestAnimationFrame(animate);
        controls.update();
        gltf.scene.rotation.y += 0.005;
        renderer.render(scene, camera);
      })();
    },
    undefined,
    (err) => {
      console.log("Error on load the object\n" + err);
    }
  );

  return {
    renderer,
  };
}
