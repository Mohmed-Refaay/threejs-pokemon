"use client";

import { Canvas } from "@react-three/fiber";
import { World } from "./World";
import { Slider } from "./Slider";
import { useEffect } from "react";
import gsap from "gsap";
import { useProgress } from "@react-three/drei";

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

  const { progress } = useProgress();

  useEffect(() => {
    // animate the overlay away
    if (progress < 100) return;
    gsap
      .timeline()
      .to(".loading-element", {
        duration: 1,
        translateY: "-100px",
        delay: 0.5,
        ease: "power2.inOut",
      })
      .to(".loading-section", {
        duration: 1,
        translateY: "-100%",
        pointerEvents: "none",
      })
      .set(".loading-section", {
        display: "none",
      })
      .to(".poke-name", {
        duration: 0.5,
        translateY: 0,
        ease: "power2.inOut",
      });
  }, [progress]);

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
