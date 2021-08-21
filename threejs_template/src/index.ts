import './styles.css';

import { BoxGeometry, Mesh, MeshBasicMaterial, MeshBasicMaterialParameters, PerspectiveCamera, Scene, Vector3, WebGLRenderer, WebGLRendererParameters } from 'three';


const canvas: Element = document.querySelector('.webgl');

const scene: Scene = new Scene();


const boxGeometry: BoxGeometry = new BoxGeometry(3, 4, 5);

const boxMeshBasicMaterialParameters: MeshBasicMaterialParameters = {
  color: 0xCC0000
};

const boxMeshBasicMaterial: MeshBasicMaterial = new MeshBasicMaterial(boxMeshBasicMaterialParameters);

const boxMesh: Mesh = new Mesh(boxGeometry, boxMeshBasicMaterial);

scene.add(boxMesh);

const sizes = {
  width: 800,
  height: 600
};

const perspectiveCamera: PerspectiveCamera = new PerspectiveCamera(75, sizes.width / sizes.height);

perspectiveCamera.translateOnAxis(new Vector3(1,1,1), 8)

perspectiveCamera.lookAt(0, 0, 0);

scene.add(perspectiveCamera);


const webGLRendererParameters: WebGLRendererParameters = {
  canvas: canvas
};

const webGLRenderer: WebGLRenderer = new WebGLRenderer(webGLRendererParameters);

webGLRenderer.setSize(sizes.width, sizes.height);

webGLRenderer.render(scene, perspectiveCamera);
