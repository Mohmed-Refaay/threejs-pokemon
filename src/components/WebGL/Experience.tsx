"use client";

import { Canvas } from "@react-three/fiber";
import { World } from "./World";
import { Environment } from "@react-three/drei";
import { Slider } from "./Slider";

export function Experience() {
  return (
    <Canvas
      orthographic
      gl={{
        antialias: true,
      }}
      camera={{
        position: [0, 0, 5],
        zoom: window.innerWidth / 25,
      }}
    >
      <Environment preset="warehouse" />

      <Slider />

      <World />
    </Canvas>
  );
}
