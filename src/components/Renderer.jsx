import * as THREE from "three";
import { Suspense, useMemo, useRef, memo } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Cloud,
  Sparkles,
  OrbitControls,
} from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { Statue } from "./Statue";

extend({ UnrealBloomPass });

const SMOOTHING_FACTOR = 6;
const SHAPE_PROFILES = [
  { ringArgs: [0.8, 0.82, 4], z: -1 },
  { ringArgs: [0.72, 0.8, 4], z: -1.1 },
];

const NEON_PINK = new THREE.Color(1.0, 0.2, 0.8);
const CYAN = new THREE.Color(0.2, 1.0, 1.0);
const PURPLE = new THREE.Color(0.6, 0.0, 1.0);

export default function Renderer({ scrollPercentage }) {
  const scrollNorm = useMemo(() => scrollPercentage / 100, [scrollPercentage]);
  return (
    <div id="canvas-container">
      <Canvas
        shadows
        // lock DPR so it never auto-tweaks (prevents resolution flicker)
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      >
        <SmoothedScene target={scrollNorm} />
      </Canvas>
    </div>
  );
}

function SmoothedScene({ target }) {
  const smooth = useRef(target);

  useFrame((_, delta) => {
    smooth.current = THREE.MathUtils.lerp(
      smooth.current,
      target,
      1 - Math.exp(-SMOOTHING_FACTOR * delta)
    );
  });

  return (
    <>
      <DynamicCamera scrollValue={smooth} />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

      <MovingLights count={3} radius={4} scrollValue={smooth} />

      <EffectComposer multisampling={0}>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.8}
          luminanceSmoothing={0.3}
        />
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={5}
          height={480}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.001, 0.002]}
        />
      </EffectComposer>

      <Sparkles
        count={200}
        scale={[10, 5, 10]}
        size={1 + smooth.current * 2}
        speed={0.2}
        color={[NEON_PINK.r, NEON_PINK.g, NEON_PINK.b]}
      />

      <Suspense fallback={null}>
        {SHAPE_PROFILES.map((cfg, idx) => (
          <Shape
            key={idx}
            ringArgs={cfg.ringArgs}
            position={[0, 0, cfg.z]}
            scrollValue={smooth}
          />
        ))}
        <Statue position={[0.05, -0.5, 0]} castShadow receiveShadow />
      </Suspense>
    </>
  );
}

function DynamicCamera({ scrollValue }) {
  const camera = useThree((state) => state.camera);

  useFrame(() => {
    const s = scrollValue.current;
    camera.position.lerp(new THREE.Vector3(s * 2, -s / 1.5, 2 - s / 1.5), 0.1);
    camera.lookAt(-s / 2, 0, 0);
    camera.updateProjectionMatrix();
  });

  return (
    <PerspectiveCamera makeDefault near={0.1} fov={60} position={[0, 0, 2]} />
  );
}

function Shape({ ringArgs, position, scrollValue }) {
  const matRef = useRef();
  const matProps = useMemo(() => ({ toneMapped: false, opacity: 0.15 }), []);

  useFrame((_, delta) => {
    const s = scrollValue.current;
    // only update the ring's color now
    if (matRef.current) {
      matRef.current.color.copy(NEON_PINK).lerp(CYAN, s);
    }
  });

  return (
    <mesh position={position} castShadow receiveShadow>
      <ringGeometry args={ringArgs} />
      <meshBasicMaterial ref={matRef} color={NEON_PINK} {...matProps} />
    </mesh>
  );
}

const MovingLights = memo(function MovingLights({
  count,
  radius,
  scrollValue,
}) {
  const group = useRef();
  const prevInts = useRef(Array(count).fill(0.2));
  const palette = [NEON_PINK, PURPLE, CYAN];

  useFrame(({ clock }, delta) => {
    // clamp delta to avoid large jumps
    delta = Math.min(delta, 0.1);

    const s = scrollValue.current;
    const t = 1 - Math.exp(-SMOOTHING_FACTOR * delta);
    const elapsed = clock.getElapsedTime() + s * 5;

    group.current.children.forEach((light, i) => {
      const angle = (i / count) * Math.PI * 2 + elapsed * 0.3;
      light.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.5,
        Math.sin(angle * 2) * radius * 0.2
      );

      const rawInt = 0.2 + Math.abs(Math.sin(elapsed + i)) * 0.5;
      prevInts.current[i] = THREE.MathUtils.lerp(
        prevInts.current[i],
        rawInt,
        t
      );
      light.intensity = prevInts.current[i];
    });
  });

  return (
    <group ref={group}>
      {Array.from({ length: count }).map((_, i) => (
        <pointLight
          key={i}
          color={palette[i % palette.length]}
          distance={10}
          decay={2}
        />
      ))}
    </group>
  );
});
