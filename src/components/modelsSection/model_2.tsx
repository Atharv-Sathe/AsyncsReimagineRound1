import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Satellite from "./Sattelite";


export default function Model_test() {
    return(
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
    );
}