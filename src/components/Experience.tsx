"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Environment } from "./Environment";

export function Experience() {
  return (
    <Canvas
      camera={{
        position: [0, 1, -5],
      }}
      shadows
    >
      <Model />

      <mesh
        rotation-x={-Math.PI * 0.5}
        position-y={-2}
        receiveShadow
        castShadow
      >
        <planeGeometry args={[1000, 1000]} attach="geometry" />
        <meshToonMaterial attach="material" />
      </mesh>

      <Environment />
    </Canvas>
  );
}
