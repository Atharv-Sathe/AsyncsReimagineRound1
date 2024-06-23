import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Satellite from "../../components/modelsSection/Sattelite";
import { HeroScrollDemo } from "../missions/pageMain";

export default function Model() {
  return (
    <>
    <div className="flex flex-col">
      <h2 className="text-5xl text-white pl-20 pt-20 pb-10 font-space">Missions</h2>
    </div>
    <div className="flex h-screen mb-[2rem]">
    <div className="w-1/3 h-full">
      <Canvas className="h-full w-full p-2 overflow-hidden relative">
        <ambientLight intensity={1.5} />
        <PerspectiveCamera 
          makeDefault 
          position={[10, 0, 0]} 
          fov={50} 
          near={0.2} 
          far={1000} 
        />
        <OrbitControls />
        <Suspense fallback={null}>
          <group position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]}>
            <Satellite />
          </group>
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
    <div className="w-2/3 h-full overflow-hidden">
      <HeroScrollDemo />
    </div>
  </div>
  </>
  );
}
