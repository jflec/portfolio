// components/Statue.jsx
import { useGLTF } from "@react-three/drei";

export function Statue(props) {
  const { nodes, materials } = useGLTF("/Statue.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[3.13, -1, 0]} scale={0.005}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Statue.glb");
