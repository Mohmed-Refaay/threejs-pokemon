"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { World } from "./World";
import { Slider } from "./Slider";
import { Evee } from "./gltfs/Evee";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function preventPageScroll(e: WheelEvent | TouchEvent) {
  e.preventDefault();
}

export function Experience() {
  useEffect(() => {
    // Prevent scrolling by using wheel or touch
    window.addEventListener("wheel", preventPageScroll, {
      passive: false,
    });
    window.addEventListener("touchmove", preventPageScroll, {
      passive: false,
    });
  }, []);

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
