import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
function ThreeJsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [textures, setTextures] = useState<THREE.Texture[]>([]);

  useEffect(() => {
    // Load your images (replace with your image paths)
    const loadTextures = async () => {
      const imageUrls = [
        '/chandrayan.webp',
        '/chandrayan.webp',
        '/chandrayan.webp',
        '/chandrayan.webp',
        '/chandrayan.webp',
        '/chandrayan.webp',
      ];

      const loadedTextures = await Promise.all(
        imageUrls.map((url) => {
          return new Promise<THREE.Texture>((resolve) => {
            const loader = new THREE.TextureLoader();
            loader.load(url, (texture) => {
              resolve(texture);
            });
          });
        })
      );
      setTextures(loadedTextures);
    };

    loadTextures();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas === null || textures.length === 0) {
      return;
    }

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background

    // Camera position
    camera.position.z = 5;

    // Add a cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    // Create materials for each face
    const materials = textures.map((texture) => {
      return new THREE.MeshBasicMaterial({
        map: texture,
      });
    });

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Add a light source
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Tilt the cube initially
    cube.rotation.x = 0.5;  // Tilt on the X-axis
    cube.rotation.y = 0.5;  // Tilt on the Y-axis

    // Links for each face
    const faceLinks = [
      'https://example.com/link1',
      'https://example.com/link2',
      'https://example.com/link3',
      'https://example.com/link4',
      'https://example.com/link5',
      'https://example.com/link6',
    ];

    // Raycaster and mouse vector
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event: MouseEvent) => {
      // Calculate mouse position in normalized device coordinates
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / canvas.clientWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / canvas.clientHeight) * 2 + 1;

      // Update the raycaster with the camera and mouse position
      raycaster.setFromCamera(mouse, camera);

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObject(cube);

      if (intersects.length > 0) {
        // Get the intersected face index
        const intersectedFace = intersects[0].face?.materialIndex;

        if (intersectedFace !== undefined) {
          // Redirect to the corresponding link
          window.open(faceLinks[intersectedFace], '_blank');
        }
      }
    };

    // Add event listener for mouse click
    canvas.addEventListener('click', onMouseClick);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube on the Y-axis (horizontal)
      cube.rotation.y += 0.01;

      // Update controls
      controls.update();

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Cleanup
      renderer.dispose();
      geometry.dispose();
      materials.forEach((material) => material.dispose());
      controls.dispose();
      canvas.removeEventListener('click', onMouseClick);
    };
  }, [textures]);

  return (
    <canvas ref={canvasRef} className="border-2 border-white bg-transparent w-full h-full"></canvas>
  );
}

export default function ThreeJsComp() {
  return (
    <div className="flex w-full h-[40vh]">
      <div className="flex-1 h-full">
        <ThreeJsCanvas />
      </div>
      <div className="flex-1 h-full">
        <ThreeJsCanvas />
      </div>
      <div className="flex-1 h-full">
        <ThreeJsCanvas />
      </div>
      {/* <ShootingStarsCursor /> */}
    </div>
  );
}
