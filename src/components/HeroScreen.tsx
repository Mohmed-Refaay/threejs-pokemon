"use client";

import {
  activeSlideAtom,
  sliderDirectionAtom,
  sliderProgressAtom,
} from "@/utils/atoms";
import { pokeballData } from "@/utils/data";
import { useAtom } from "jotai";
import Image from "next/image";

// @ts-ignore
import FPSStats from "react-fps-stats";

export function HeroScreen() {
  const activeSlide = useAtom(activeSlideAtom)[0];
  const setProgress = useAtom(sliderProgressAtom)[1];
  const setDirection = useAtom(sliderDirectionAtom)[1];

  return (
    <>
      <FPSStats />

      <div className="relative top-[15%] -translate-y-1/2 z-10 w-full">
        <h1 className="text-white text-[15vw] md:text-[12vw] font-black text-center text-lightEffect">
          {pokeballData[activeSlide].name}
        </h1>
      </div>

      <div className="w-full pointer-events-none text-white flex items-center justify-between px-2 md:px-10 absolute top-1/2 -translate-y-1/2 z-30">
        <button
          className="transform rotate-90 pointer-events-auto"
          onClick={() => {
            setProgress((c) => c - 1);
            setDirection(-1);
          }}
        >
          <Image
            alt="Previous Icon"
            src="/down-chevron.png"
            width={50}
            height={50}
          />
        </button>
        <button
          className="transform -rotate-90 pointer-events-auto"
          onClick={() => {
            setProgress((c) => c + 1);
            setDirection(1);
          }}
        >
          <Image
            alt="Next Icon"
            src="/down-chevron.png"
            width={50}
            height={50}
          />
        </button>
      </div>
    </>
  );
}
