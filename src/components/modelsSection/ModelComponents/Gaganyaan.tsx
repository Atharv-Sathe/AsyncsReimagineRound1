/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'

import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type GLTFResult = GLTF & {
  nodes: {
    ['551']: THREE.Mesh
    ['537']: THREE.Mesh
    ['523']: THREE.Mesh
    ['509']: THREE.Mesh
    ['495']: THREE.Mesh
    ['481']: THREE.Mesh
    ['467']: THREE.Mesh
    ['453']: THREE.Mesh
    ['435']: THREE.Mesh
    ['418']: THREE.Mesh
    ['404']: THREE.Mesh
    ['389']: THREE.Mesh
    ['374']: THREE.Mesh
    ['359']: THREE.Mesh
    ['344']: THREE.Mesh
    ['329']: THREE.Mesh
    ['314']: THREE.Mesh
    ['299']: THREE.Mesh
    ['284']: THREE.Mesh
    ['269']: THREE.Mesh
    ['254']: THREE.Mesh
    ['239']: THREE.Mesh
    ['221']: THREE.Mesh
    ['204']: THREE.Mesh
    ['187']: THREE.Mesh
    ['173']: THREE.Mesh
    ['159']: THREE.Mesh
    ['142']: THREE.Mesh
    ['125']: THREE.Mesh
    ['108']: THREE.Mesh
    ['91']: THREE.Mesh
  }
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    solar: THREE.MeshStandardMaterial
    propulsion: THREE.MeshStandardMaterial
    wire: THREE.MeshStandardMaterial
    motherboard: THREE.MeshStandardMaterial
    ['02 - Default']: THREE.MeshStandardMaterial
    engine: THREE.MeshStandardMaterial
    outboard: THREE.MeshStandardMaterial
  }
}

export function GaganyaanModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/ISRO Gaganyaan - Animated Solar Panel.glb') as GLTFResult
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
    <group {...props} ref={groupRef} position={[0,-1,0]}>
         <group  scale={0.555}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['551'].geometry}
        material={materials['Material.003']}
        position={[0.521, 0.103, 0.536]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['537'].geometry}
        material={materials['Material.003']}
        position={[-0.53, 0.103, 0.534]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['523'].geometry}
        material={materials['Material.003']}
        position={[0.521, 0.103, -0.52]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['509'].geometry}
        material={materials['Material.003']}
        position={[-0.53, 0.103, -0.52]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['495'].geometry}
        material={materials['Material.004']}
        position={[0.517, -0.071, -0.523]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.126}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['481'].geometry}
        material={materials['Material.004']}
        position={[-0.53, -0.071, -0.523]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.126}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['467'].geometry}
        material={materials['Material.004']}
        position={[0.517, -0.071, 0.526]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.126}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['453'].geometry}
        material={materials['Material.004']}
        position={[-0.53, -0.071, 0.525]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.126}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['435'].geometry}
        material={materials['Material.004']}
        position={[0, -0.071, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.126}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['418'].geometry}
        material={materials['Material.003']}
        position={[0, 0.103, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['404'].geometry}
        material={materials.solar}
        position={[-1.529, 1.13, -0.88]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['389'].geometry}
        material={materials.propulsion}
        position={[-1.281, 2.059, -0.737]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['374'].geometry}
        material={materials.solar}
        position={[-1.378, 2.681, -0.793]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['359'].geometry}
        material={materials.solar}
        position={[-1.479, 2.677, -0.851]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['344'].geometry}
        material={materials.solar}
        position={[-1.43, 1.13, -0.823]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['329'].geometry}
        material={materials.solar}
        position={[-1.33, 1.133, -0.765]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['314'].geometry}
        material={materials.propulsion}
        position={[1.276, 2.059, 0.74]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['299'].geometry}
        material={materials.solar}
        position={[1.373, 2.681, 0.795]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['284'].geometry}
        material={materials.solar}
        position={[1.524, 1.13, 0.882]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['269'].geometry}
        material={materials.solar}
        position={[1.474, 2.677, 0.854]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['254'].geometry}
        material={materials.solar}
        position={[1.425, 1.13, 0.826]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['239'].geometry}
        material={materials.solar}
        position={[1.325, 1.133, 0.767]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['221'].geometry}
        material={materials.propulsion}
        position={[-0.003, 3.461, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['204'].geometry}
        material={materials.solar}
        position={[-0.35, 2.621, 1.396]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['187'].geometry}
        material={materials.wire}
        position={[1.42, 2.59, -0.333]}
        rotation={[0, -Math.PI / 3, Math.PI]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['173'].geometry}
        material={materials.motherboard}
        position={[-0.003, 0.627, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['159'].geometry}
        material={materials['02 - Default']}
        position={[-0.279, -2.252, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.092, 0.072, 0.188]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['142'].geometry}
        material={materials.engine}
        position={[-0.003, 0, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.086}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['125'].geometry}
        material={materials.motherboard}
        position={[-0.003, 0.921, 0.001]}
        rotation={[Math.PI / 2, 0, Math.PI / 3]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['108'].geometry}
        material={materials['02 - Default']}
        position={[-0.003, 0.837, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.076, 0.076, 0.075]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['91'].geometry}
        material={materials.outboard}
        position={[-0.003, 1.133, 1.462]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      </group>
    </group>
  )
}

useGLTF.preload('/ISRO Gaganyaan - Animated Solar Panel.glb')


