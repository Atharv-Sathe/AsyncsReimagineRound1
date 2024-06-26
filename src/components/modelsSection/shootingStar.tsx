import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ShootingStarsCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 10;
    const particles = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      map: new THREE.TextureLoader().load('/texturestar.jpg'),
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });

    const particlePositions = [];
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 10 - 5;
      const z = Math.random() * 10 - 5;
      particlePositions.push(x, y, z);
    }
    particles.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    const animate = () => {
      requestAnimationFrame(animate);

      // Update particle positions based on cursor position
      if (canvas) {
        canvas.addEventListener('mousemove', onMouseMove);
      }

      renderer.render(scene, camera);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      const mouseX = (event.clientX - rect.left) / rect.width * 2 - 1;
      const mouseY = -(event.clientY - rect.top) / rect.height * 2 + 1;
      camera.position.x = mouseX * 10;
      camera.position.y = mouseY * 10;
      camera.lookAt(scene.position);
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas?.removeEventListener('mousemove', onMouseMove);
      scene.remove(particleSystem);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ShootingStarsCursor;
