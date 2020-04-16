import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import generateRenderer from "./renderer";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import addPro from "./addPro";

export default function main(color, colored, nameOfModel) {
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

  // DA CAMISETA PADRAO: camera.position.z = 63;
  // Load objects to scene
  const loader = new GLTFLoader();

  // DA CAMISA DE GARCOM: camera.position.z = 1;

  let url;
  if (colored) {
    url = `./Model/Tshirt/${color}.gltf`;
    camera.position.z = 60;
  } else {
    url = `./Model/Tshirt/${nameOfModel}/scene.gltf`;
    camera.position.z = 1;
  }

  if (nameOfModel === "Vestido") {
    camera.position.z = 300;
  }
  loader.load(
    url,
    (gltf) => {
      scene.add(gltf.scene);
      if (colored === true) {
        gltf.scene.position.y = -25;
      }
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
