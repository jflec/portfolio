import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  HueSaturation,
} from "@react-three/postprocessing";
import * as THREE from "three";

function generateRandomStars(N = 100) {
  function rand(a, b) {
    return a + Math.random() * (b - a);
  }
  const shapes = [];
  for (let i = 0; i < N; ++i) {
    const theta = rand(0, Math.PI * 2);
    const phi = Math.acos(rand(-1, 1));
    const radius = rand(28, 900);

    const x = Math.sin(phi) * Math.cos(theta) * radius;
    const y = Math.sin(phi) * Math.sin(theta) * radius;
    const z = Math.cos(phi) * radius;

    if (Math.abs(x) < 6 && Math.abs(y) < 6 && Math.abs(z) < 6) continue;

    const shapeType = rand(0, 1);
    const scale = rand(0.035, 0.13);
    const ellipsoid =
      shapeType > 0.8
        ? [scale * rand(1.3, 2.2), scale * rand(0.8, 1.3), scale * rand(1, 1.6)]
        : [scale, scale, scale];

    shapes.push({
      id: i,
      scale: ellipsoid,
      pos: [x, y, z],
      speed: rand(0.17, 1.07),
      phase: rand(0, Math.PI * 2),
      color: "#74ffc5",
      flicker: rand(0.85, 1.23),
      shapeType,
    });
  }
  return shapes;
}

export default function Renderer() {
  const dpr =
    typeof window !== "undefined"
      ? [1, Math.min(window.devicePixelRatio, 1.5)]
      : [1, 1.5];
  return (
    <div
      id="canvas-container"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        inset: 0,
        overflow: "hidden",
      }}
    >
      <Canvas
        shadows
        dpr={dpr}
        gl={{
          alpha: false,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <EffectComposer>
          <Bloom
            intensity={1.27}
            luminanceThreshold={0.03}
            luminanceSmoothing={0.83}
          />
          <HueSaturation
            hue={Math.sin(Date.now() * 0.005) * 2} // cycles hue over time
            saturation={0.25}
          />
        </EffectComposer>
        <Scene />
      </Canvas>
    </div>
  );
}

function Scene() {
  return (
    <>
      <DynamicCamera />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        enableDamping
        dampingFactor={0.15}
      />
      <InstancedStarField count={450} parallax={0.75} zMod={-38} />
      <InstancedStarField count={300} parallax={1.5} zMod={25} />
    </>
  );
}

function DynamicCamera() {
  const camera = useThree((state) => state.camera);
  const mouse = useRef({ x: 0, y: 0 });
  const lookTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x =
      Math.sin(t * 0.16) * 1.0 +
      Math.sin(t * 1.5) * 0.025 +
      Math.cos(t * 0.7) * 0.021;
    camera.position.y =
      Math.cos(t * 0.1) * 0.5 +
      Math.sin(t * 0.24) * 0.18 +
      Math.cos(t * 1.8) * 0.014;
    camera.position.z = 2.7 - t * 0.18 + Math.sin(t * 1.2) * 0.012;

    lookTarget.current.x += (mouse.current.x * 2 - lookTarget.current.x) * 0.05;
    lookTarget.current.y +=
      (mouse.current.y * 1.2 - lookTarget.current.y) * 0.05;

    camera.lookAt(
      camera.position.x + lookTarget.current.x,
      camera.position.y + lookTarget.current.y,
      camera.position.z - 6
    );
  });

  return (
    <PerspectiveCamera makeDefault near={0.1} fov={63} position={[0, 0, 2.7]} />
  );
}

function InstancedStarField({ count, parallax = 1, zMod = 0 }) {
  const starsRef = useRef();
  if (!starsRef.current) starsRef.current = generateRandomStars(count);
  const stars = starsRef.current;
  const meshRef = useRef();
  const colorArray = useRef(new Float32Array(count * 3));

  const LOOP_DEPTH = 190;
  const FIELD_WIDTH = 78;

  useMemo(() => {
    for (let i = 0; i < stars.length; ++i) {
      const col = new THREE.Color(stars[i].color);
      colorArray.current[i * 3 + 0] = col.r;
      colorArray.current[i * 3 + 1] = col.g;
      colorArray.current[i * 3 + 2] = col.b;
    }
  }, [stars]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const basePositions = useRef(stars.map((s) => [...s.pos]));

  useFrame(({ clock, camera }) => {
    const now = clock.getElapsedTime();
    for (let i = 0; i < stars.length; ++i) {
      let [x, y, z] = basePositions.current[i];
      const s = stars[i];
      const t = now * s.speed + s.phase;
      const flySpeed = 10 * parallax;
      z = z + now * flySpeed * 0.94 + zMod;

      if (z > camera.position.z + 4.5) {
        z -= LOOP_DEPTH;
        x = (Math.random() - 0.5) * FIELD_WIDTH;
        y = (Math.random() - 0.5) * FIELD_WIDTH;
        basePositions.current[i][0] = x;
        basePositions.current[i][1] = y;
        basePositions.current[i][2] = z - now * flySpeed * 0.94;
      }

      dummy.position.set(
        x + Math.sin(t * 0.7 + s.phase) * 0.65,
        y + Math.cos(t * 0.9 + s.phase) * 0.63,
        z
      );
      dummy.scale.set(s.scale[0], s.scale[1], s.scale[2]);
      dummy.rotation.x = t * 0.6;
      dummy.rotation.y = t * 0.41;
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, count]}
      receiveShadow={false}
      castShadow={false}
    >
      <sphereGeometry args={[1, 14, 14]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colorArray.current, 3]}
        />
      </sphereGeometry>
      <meshStandardMaterial
        vertexColors
        transparent
        opacity={0.85}
        toneMapped={false}
        roughness={0.09}
        metalness={0.96}
        emissive="#74ffc5"
        emissiveIntensity={1.7}
      />
    </instancedMesh>
  );
}
