import {GLTF} from 'three/addons/loaders/GLTFLoader.js';
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { FC } from 'react'
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    NurbsPath_MainRocket_Mat_0_1: THREE.Mesh
    NurbsPath_MainRocket_Mat_0_2: THREE.Mesh
    NurbsPath_MainRocket_Mat_0_3: THREE.Mesh
  }
  materials: {
    MainRocket_Mat: THREE.Material
    Others_Mat: THREE.Material
    Booster_Mat: THREE.Material
  }
}

const Model: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF('/Satellite1.glb') as unknown as GLTFResult

  if (!nodes || !materials) {
    // Optionally, you can render a loading state here
    return null
  }

  return (
    <group {...props} dispose={null}>
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
  )
}

useGLTF.preload('/Satellite1.glb')

export default Model
