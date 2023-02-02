import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Float,
  Effects,
  Scroll,
  ScrollControls,
  Cloud,
  useScroll,
} from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import { useRef, Suspense } from "react";

import { Statue } from "./Statue";
import Portfolio from "./Portfolio";
import Landing from "./Landing";

import "../style/Landing.css";
import "../style/Renderer.css";

extend({ UnrealBloomPass });

export default function Renderer() {
  return (
    <div id="canvas-container">
      <Suspense fallback={null}>
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
          <Effects disableGamma>
            <unrealBloomPass threshold={1} strength={1} radius={1.2} />
          </Effects>
          <ScrollControls pages={3}>
            <Cloud
              opacity={0.1}
              speed={0.25}
              width={6}
              depth={2}
              segments={10}
            />

            <DynamicCamera />
            <Float
              speed={1.25}
              floatingRange={[-0.0125, 0.0125]}
              floatIntensity={0.25}
            >
              <Shape color={[4, 0.1, 0]} position={[0, 0, -1]}>
                <ringGeometry args={[0.8, 0.82, 4]} />
              </Shape>
              <Shape color={[4, 0.1, 0]} position={[0, 0, -1.1]}>
                <ringGeometry args={[0.72, 0.8, 4]} />
              </Shape>
              <Statue position={[0.05, -0.5, 0]}></Statue>
              <pointLight
                color={"white"}
                intensity={0.085}
                position={[0, 0, 2]}
              />
            </Float>
            <Scroll html>
              <Landing />
              <Portfolio />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </div>
  );
}

function DynamicCamera() {
  const data = useScroll();
  const cameraRef = useRef();

  useFrame(() => {
    cameraRef.current.lookAt(0, 0, data.range(0, 1) / 3);
    cameraRef.current.position.z = -data.range(0, 1) + 2;
    cameraRef.current.position.x = data.range(0, 1) * 1.55;
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

function Shape({ children, color, ...props }) {
  const data = useScroll();
  const shapeRef = useRef();
  const lightRef = useRef();

  useFrame(() => {
    shapeRef.current.color.b = data.range(0, 1) * 1;
    lightRef.current.color.b = data.range(0, 1) * 1;
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
        intensity={1}
        position={[0, 0, 0]}
        ref={lightRef}
      />
    </mesh>
  );
}
