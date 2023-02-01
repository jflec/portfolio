import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Statue(props) {
  const { nodes, materials } = useGLTF("/Statue.glb");

  useFrame(() => {});
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[3.13, -1, 0]} scale={0.005}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Statue.glb");
