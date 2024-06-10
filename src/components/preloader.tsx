import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import rocketImg from "../assets/images/satellite.png"; // Replace with actual image path
import isroImg from "../assets/images/logo.png"; // Replace with actual image path
import BGVideo from "./BGVideo"; // Import the BGVideo component

export default function Preloader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rocketY, setRocketY] = useState(0);
  const [showRocket, setShowRocket] = useState(true);
  const [showIsro, setShowIsro] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Star setup
    const starGeometry = new THREE.SphereGeometry(0.02, 32, 32);
    const starMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Group();
    for (let i = 0; i < 1000; i++) {
      const star = new THREE.Mesh(starGeometry.clone(), starMaterial.clone());
      star.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      stars.add(star);
    }
    scene.add(stars);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      stars.children.forEach(
        (star) =>
          (((star as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity =
            0.5 + 0.5 * Math.sin(performance.now() / 500))
      );
      stars.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const animationInterval = setInterval(() => {
      setRocketY((prevY) => {
        if (prevY > -700) {
          return prevY - 5;
        } else {
          clearInterval(animationInterval);
          setShowRocket(false);
          return prevY;
        }
      });
    }, 30);

    const animationTimer = setTimeout(() => {
      setShowIsro(true);

      // Speed up the loading progress
      const loadingDuration = 1500; // Faster loading duration (3 seconds)
      const loadingInterval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 100 / (loadingDuration / 50);
          } else {
            clearInterval(loadingInterval);
            setIsLoadingComplete(true);
            return 100;
          }
        });
      }, 50);

      return () => clearInterval(loadingInterval);
    }, 1500);

    return () => {
      renderer.dispose();
      clearInterval(animationInterval);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <div>
      {!isLoadingComplete ? (
        <div
          className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center ${
            showRocket ? "preloader" : ""
          }`}
        >
          <canvas ref={canvasRef} />
          {showRocket && (
            <div className="preloader__container absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <img
                src={rocketImg}
                alt="Rocket Launching"
                className="w-48 h-auto"
                style={{ transform: `translateY(${rocketY}px)` }}
              />
            </div>
          )}
          {showIsro && (
            <div className="preloader__container absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <img
                src={isroImg}
                alt="ISRO Logo"
                className="preloader__isro"
                style={{
                  width: "200px",
                  height: "auto",
                  transform: `scale(${1 + loadingProgress / 100})`,
                  transition: `transform ${loadingProgress / 20}s ease-in-out`,
                  transformOrigin: "center",
                }}
              />
              <div
                className="preloader__loading-bar absolute bottom-10 left-1/2 transform -translate-x-1/2"
                style={{
                  width: `${loadingProgress}%`,
                  maxWidth: "400px",
                  height: "5px",
                  backgroundColor: "blue",
                  borderRadius: "5px",
                }}
              />
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg">
                {Math.ceil(loadingProgress)}%
              </div>
            </div>
          )}
        </div>
      ) : (
        <BGVideo /> // Render BGVideo when loading is complete
      )}
    </div>
  );
}
