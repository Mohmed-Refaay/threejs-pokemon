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
      {/* <Test /> */}

      <Slider />

      <World />
    </Canvas>
  );
}

function Test() {
  const ref = useRef<THREE.Group>(null!);
  const { width, height } = useThree((s) => s.viewport);

  let data = {
    scrollY: 0,
  };

  useEffect(() => {
    const group = ref.current;
    if (!group) return;

    const tl = gsap.timeline({
      delay: 0.5,
    });

    tl.to(
      group.position,
      {
        duration: 1,
        y: -height,
      },
      0,
    ).to(
      data,
      {
        duration: 1,
        scrollY: 1,
        onUpdate() {
          window.scrollTo(0, data.scrollY * height);
        },
      },
      0,
    );
  }, [ref]);
  return (
    <group ref={ref} scale={[80, 80, 80]}>
      <Evee />
    </group>
  );
}
