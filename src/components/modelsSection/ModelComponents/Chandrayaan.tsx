import { FC, useEffect, useRef } from "react";
import { GLTF } from "three/addons/loaders/GLTFLoader.js";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

type GLTFResult = GLTF & {
  nodes: {
    NurbsPath_MainRocket_Mat_0_1: THREE.Mesh;
    NurbsPath_MainRocket_Mat_0_2: THREE.Mesh;
    NurbsPath_MainRocket_Mat_0_3: THREE.Mesh;
  };
  materials: {
    MainRocket_Mat: THREE.Material;
    Others_Mat: THREE.Material;
    Booster_Mat: THREE.Material;
  };
};

const ChandrayaanModel: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(
    "/Satellite1.glb"
  ) as unknown as GLTFResult;
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    // Animation using GSAP
    gsap.to(groupRef.current.rotation, {
      y: Math.PI * 2,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  if (!nodes || !materials) {
    // Optionally, you can render a loading state here
    return null;
  }

  return (
    <group {...props} ref={groupRef} scale={[0.5,0.5,0.5]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.455}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath_MainRocket_Mat_0_1.geometry}
          material={materials.MainRocket_Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath_MainRocket_Mat_0_2.geometry}
          material={materials.Others_Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath_MainRocket_Mat_0_3.geometry}
          material={materials.Booster_Mat}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/Satellite1.glb");

export default ChandrayaanModel;
