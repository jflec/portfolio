import { Canvas, extend, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Effects, Cloud } from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import { useRef, Suspense } from "react";
import { Statue } from "./Statue";

import "../style/Landing.css";
import "../style/Renderer.css";

extend({ UnrealBloomPass });

export default function Renderer({ scrollPercentage }) {
  return (
    <div id="canvas-container">
      <Canvas
        performance={{
          current: 1,
          min: 0.1,
          max: 1,
          debounce: 200,
        }}
      >
        <DynamicCamera scrollPercentage={scrollPercentage} />
        <Effects disableGamma>
          <unrealBloomPass threshold={1} strength={1} radius={1.2} />
        </Effects>
        <Cloud
          opacity={0.085}
          speed={0.6}
          width={10}
          depth={1.3 + scrollPercentage / 100}
          segments={30}
        />
        <Suspense fallback={null}>
          <Shape
            color={[4, 0.1, 0]}
            position={[0, 0, -1]}
            scrollPercentage={scrollPercentage}
          >
            <ringGeometry args={[0.8, 0.82, 4]} />
          </Shape>
          <Shape
            color={[4, 0.1, 0]}
            position={[0, 0, -1.1]}
            scrollPercentage={scrollPercentage}
          >
            <ringGeometry args={[0.72, 0.8, 4]} />
          </Shape>
          <Statue position={[0.05, -0.5, 0]} />
        </Suspense>
        <pointLight color={"white"} intensity={0.085} position={[0, 0, 2]} />
      </Canvas>
    </div>
  );
}

function DynamicCamera({ scrollPercentage }) {
  const cameraRef = useRef();

  useFrame(() => {
    cameraRef.current.lookAt(-scrollPercentage / 200, 0, 0);
    cameraRef.current.position.x = scrollPercentage / 50;
    cameraRef.current.position.z = 2 - scrollPercentage / 150;
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      near={0.1}
      fov={60}
      position={[0, 0, 2]}
      rotation={[0, 0, 0]}
    />
  );
}

function Shape({ children, color, scrollPercentage, ...props }) {
  const shapeRef = useRef();
  const lightRef = useRef();

  useFrame(() => {
    shapeRef.current.color.b = scrollPercentage / 100;
    lightRef.current.color.b = scrollPercentage / 100;
  });

  return (
    <mesh {...props}>
      {children}
      <meshBasicMaterial
        color={color}
        toneMapped={false}
        opacity={0.1}
        ref={shapeRef}
      />
      <pointLight
        color={color}
        intensity={scrollPercentage / 100 + 0.05}
        position={[0, 0, 0]}
        ref={lightRef}
      />
    </mesh>
  );
}
