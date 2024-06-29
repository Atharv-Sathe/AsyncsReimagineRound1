import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Satellite from "../../components/modelsSection/Sattelite";
import { ImagesSliderDemo } from "./imagesDisplaycomp";

export default function Missions({ rtl }: { rtl?: boolean }) {
  return (
    <div className="border-2 border-white h-screen">
      <div className="flex h-full">
        {/* Left Column with Missions Heading and Canvas (30% Width) */}
        {!rtl && (
          <div className="w-3/10 flex flex-col items-center ">
            {/* <h2 className="text-5xl text-white font-space">Missions</h2> */}
            <div className="w-full h-full space-50vh">
              <Canvas className="h-full w-full overflow-hidden relative ">
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
          </div>
        )}
        <div className="w-full h-full flex flex-col racesWrapper ">
          <div className="flex-grow font-space ">
            <div className="h-full racesWrapper">
              {/* <div className="flex flex-col"> */}
              {/* <div className="sticky top-0"> */}
              <div className="w-full h-full ">
                {/* Video container (70%) */}
                {/* <div className="w-7/10 overflow-hidden">
                      <video controls className="w-full h-full object-cover">
                        <source
                          src="https://www.isro.gov.in/media_isro/video/chandrayaan3/LVM3_M4OnboardVideo.webm"
                          type="video/webm"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div> */}
                <div className="w-full h-full">
                  <ImagesSliderDemo />
                </div>
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {rtl && (
          <div className="w-3/10 flex flex-col items-center ">
            {/* <h2 className="text-5xl text-white font-space">Missions</h2> */}
            <div className="w-full h-full space-50vh">
              <Canvas className="h-full w-full overflow-hidden relative ">
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
          </div>
        )}
      </div>
    </div>
  );
}
