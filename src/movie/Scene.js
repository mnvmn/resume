import * as THREE from 'three';

const Scene = {
  init(width, height) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: '#0475dc' });
    const cube = new THREE.Mesh(geometry, material);

    camera.position.z = 4;
    scene.add(cube);
    renderer.setClearColor('#FFF');
    renderer.setSize(width, height);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.cube = cube;

    return this;
  },

  animate() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderFrame();
    this.frameId = window.requestAnimationFrame(this.animate);
  },

  renderFrame() {
    this.renderer.render(this.scene, this.camera);
  },
};

export default Scene;
