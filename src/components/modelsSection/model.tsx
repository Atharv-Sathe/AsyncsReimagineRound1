import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Satellite from "../../components/modelsSection/Sattelite";
import { ImagesSliderDemo } from "./imagesDisplaycomp";

export default function Model() {
  return (
    <div className="border-2 border-white h-screen">
      <div className="flex h-full">
        {/* Left Column with Missions Heading and Canvas (30% Width) */}
        <div className="w-3/10 flex flex-col items-center ">
          <h2 className="text-5xl text-white font-space">Missions</h2>
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
        <div className="w-7/10 h-full flex flex-col racesWrapper ">
          <div className="flex-grow space-50vh ">
            <div className="h-full racesWrapper">
              <div className="flex flex-col">
                <div className="sticky top-0">
                  <div className="w-full h-[10vh] flex items-center justify-center bg-gray-800">
                    <h1 className="text-white text-2xl ">Sticky Heading</h1>
                  </div>
                  <div className="w-full h-[60vh] flex">
                    {/* Video container (70%) */}
                    <div className="w-7/10 overflow-hidden">
                      <video controls className="w-full h-full object-cover">
                        <source
                          src="https://www.isro.gov.in/media_isro/video/chandrayaan3/LVM3_M4OnboardVideo.webm"
                          type="video/webm"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="w-3/10 h-[60vh]">
                      <ImagesSliderDemo />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[30vh] ">
            <div className="bg-gray-800 h-full rounded races">
              <h3 className="text-3xl text-white font-space w-full flex">
                Additional Content
              </h3>
              <h3 className="text-3xl text-white font-space w-full flex">
                Additional Content
              </h3>
              <h3 className="text-3xl text-white font-space w-full flex">
                Additional Content
              </h3>
              <h3 className="text-3xl text-white font-space w-full flex">
                Additional Content
              </h3>
              <h3 className="text-3xl text-white font-space w-full flex">
                Additional Content
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
