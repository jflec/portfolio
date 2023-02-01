import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Float,
  Effects,
  Scroll,
  ScrollControls,
  Cloud,
  useScroll,
} from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import { useRef, useState, useEffect, Suspense } from "react";

import { Statue } from "./Statue";
import Portfolio from "./Portfolio";
import Landing from "./Landing";

import "../style/Landing.css";
import "../style/Renderer.css";

extend({ UnrealBloomPass });

export default function Renderer() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1040;

  return (
    <div id="canvas-container">
      <Suspense fallback={null}>
        <Canvas shadows>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <Effects disableGamma>
            <unrealBloomPass threshold={1} strength={1} radius={1.2} />
          </Effects>
          <ScrollControls pages={isMobile ? 3 : 2.435}>
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
            </Float>

            <Float
              speed={0.25}
              floatingRange={[-0.0125, 0.0125]}
              floatIntensity={0.25}
            ></Float>

            <Cloud
              opacity={0.085}
              speed={0.25}
              width={6}
              depth={1.5}
              segments={20}
            />

            <Float speed={0.75} floatingRange={[-0.0125, 0.0125]}>
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
    cameraRef.current.position.z = -data.range(0, 1) + 2;
    cameraRef.current.position.x = data.range(0, 1) * 1.55;
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      far={100}
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
    <mesh {...props} castShadow receiveShadow>
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
