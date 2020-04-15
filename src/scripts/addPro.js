import { HemisphereLight } from "three";

export default function addObject(scene) {
  var light = new HemisphereLight(0xffffff, "#595956", 1);
  scene.add(light);
}
