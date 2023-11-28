"use client";

import { Canvas } from "@react-three/fiber";
import { World } from "./World";
import { Slider } from "./Slider";

export function Experience() {
  return (
    <Canvas
      orthographic
      gl={{
        antialias: true,
      }}
      camera={{
        position: [0, 0, 500],
      }}
    >
      <Slider />

      <World />
    </Canvas>
  );
}
