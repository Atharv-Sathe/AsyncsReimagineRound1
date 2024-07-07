import { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface ParticleBackgroundProps {
  color?: number;
  size?: number;
  distance?: number;
  particleCount?: number;
  imageSrc?: string;
  setIsLoading: (value: boolean) => void;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  color = Math.random() * 0xffffff,
  size = 2,
  distance = 200,
  particleCount = 1600,
  setIsLoading,
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
      "position",
      new THREE.BufferAttribute(positions, 3) // 3 components (x, y, z)
    );

    const createCircleTexture = () => {
      const size = 64;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext("2d")!;
      context.beginPath();
      context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      context.fillStyle = "white";
      context.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const circleTexture = createCircleTexture();

    const material = new THREE.PointsMaterial({
      color,
      size,
      map: circleTexture,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, material);

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

    window.addEventListener("mousemove", onMouseMove, false);
    animate();

    const animProps = { scale: 1, xRot: 0, yRot: 0, size: 2 };
    gsap.to(animProps, {
      duration: 10,
      scale: 1.3,

      repeat: -1,
      yoyo: true,
      ease: "sine",
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
      ease: "none",
      onUpdate: () => {
        renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
      },
    });

    gsap.to(material, {
      duration: 5,
      size: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine",
    });

    gsap.to(material, {
      duration: 2.5,
      opacity: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine",
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [color, size, distance, particleCount]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <audio
        autoPlay
        src="/Isro_Video_01.mp3"
        onEnded={() => setIsLoading(false)}
      />
      <img
        src="./india2.svg" // Update this path to your Indian flag image
        alt="Indian Flag"
        className="absolute inset-0 w-full h-full object-cover opacity-10 filter-none"
      />
      <div className="flex flex-col items-center justify-center">
        <canvas ref={canvasRef} />
        <div className="absolute">
          <img
            src="./ISRO_Logo.svg"
            alt="image"
            className="w-48 h-48 filter-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ParticleBackground;
