"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Experience() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" />
      </mesh>

      <ambientLight />

      <pointLight position={[10, 10, 10]} />

      <OrbitControls />
    </Canvas>
  );
}
