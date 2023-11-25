"use client";

import {
  activeSlideAtom,
  sliderDirectionAtom,
  sliderProgressAtom,
} from "@/utils/atoms";
import { pokeballData } from "@/utils/data";
import { useAtom } from "jotai";

export function HeroScreen() {
  const activeSlide = useAtom(activeSlideAtom)[0];
  const setProgress = useAtom(sliderProgressAtom)[1];
  const setDirection = useAtom(sliderDirectionAtom)[1];

  return (
    <>
      <div className="text-white text-[12vw] font-black relative top-[15%] -translate-y-1/2 z-10">
        <h1 className="text-white text-[12vw] font-black">
          {pokeballData[activeSlide].name}
        </h1>
      </div>

      <div className="w-full text-white flex items-center justify-between px-10 absolute top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={() => {
            setProgress((c) => c - 1);
            setDirection(-1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setProgress((c) => c + 1);
            setDirection(1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
