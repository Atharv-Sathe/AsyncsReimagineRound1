import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Satellite from "../../components/modelsSection/Sattelite";

export default function Model() {
  return (
    <div className="flex flex-col w-[50%] h-[100vh]">
      <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
        <Canvas className="h-full w-full p-2">
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
            <group position={[0, 0, 0]} scale={[0.7,0.7,0.7]}>
              <Satellite />
            </group>
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </div>
  );
}
