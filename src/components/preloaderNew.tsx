// src/components/ParticleBackground.tsx

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

interface ParticleBackgroundProps {
  color?: number;
  size?: number;
  distance?: number;
  particleCount?: number;
  imageSrc?: string; 
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  color = Math.random() * 0xffffff,
  size = 2,
  distance = 200,
  particleCount = 1600,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const x = distance * Math.sin(theta) * Math.cos(phi);
    const y = distance * Math.sin(theta) * Math.sin(phi);
    const z = distance * Math.cos(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3) // 3 components (x, y, z)
      );

    const particles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color, size })
    );
//    const boundingSphereRadius = Math.sqrt(distance * distance * 3); // Approximate calculation based on particle distance

// Create a sphere helper (optional - just for visualization)
// const sphereHelper = new THREE.SphereGeometry(boundingSphereRadius, 32, 32);
// const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }); // Red wireframe sphere
// const boundingSphereMesh = new THREE.Mesh(sphereHelper, sphereMaterial);
// scene.add(boundingSphereMesh);

    const renderingParent = new THREE.Group();
    renderingParent.add(particles);
    const resizeContainer = new THREE.Group();
    resizeContainer.add(renderingParent);
    scene.add(resizeContainer);

    camera.position.z = 400;

    let myTween: gsap.core.Tween | null = null;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (myTween) myTween.kill();
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (event.clientY / window.innerHeight) * 2 + 1;
      myTween = gsap.to(particles.rotation, {
        duration: 0.1,
        x: mouseY * -1,
        y: mouseX,
      });
    };

    window.addEventListener('mousemove', onMouseMove, false);
    animate();

    const animProps = { scale: 1, xRot: 0, yRot: 0 };
    gsap.to(animProps, {
      duration: 10,
      scale: 1.3,
      repeat: -1,
      yoyo: true,
      ease: 'sine',
      onUpdate: () => {
        renderingParent.scale.set(
          animProps.scale,
          animProps.scale,
          animProps.scale
        );
      },
    });

    gsap.to(animProps, {
      duration: 120,
      xRot: Math.PI * 2,
      yRot: Math.PI * 4,
      repeat: -1,
      yoyo: true,
      ease: 'none',
      onUpdate: () => {
        renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
      },
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [color, size, distance, particleCount]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
    <div className="flex flex-col items-center justify-center">
      <canvas ref={canvasRef} />
      <div className='absolute'>
      <img
            src="./ISRO_Logo.svg"
            alt="image"
            className="w-48 h-48 filter-none"
        />
        </div>
    </div>
  </div>
  )
};

export default ParticleBackground;