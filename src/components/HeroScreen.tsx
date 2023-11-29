"use client";

import {
  activeSlideAtom,
  sliderDirectionAtom,
  sliderProgressAtom,
} from "@/utils/atoms";
import { pokeballData } from "@/utils/data";
import { useAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";

// @ts-ignore
import FPSStats from "react-fps-stats";

export function HeroScreen() {
  const activeSlide = useAtom(activeSlideAtom)[0];
  const setProgress = useAtom(sliderProgressAtom)[1];
  const setDirection = useAtom(sliderDirectionAtom)[1];
  const [creditsOpen, setCreditsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setCreditsOpen(true)}
        className="text-white rotate-90 fixed top-14 -translate-x-6 text-2xl cursor-pointer z-30"
      >
        Credits
      </button>

      {creditsOpen && (
        <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-60 font-mono">
          <section className="bg-white relative z-40 w-full max-w-lg p-10 border-4 border-black">
            <button
              className="absolute top-5 right-5 text-2xl cursor-pointer"
              onClick={() => setCreditsOpen(false)}
            >
              X
            </button>
            <h1 className="mb-4">Models By:</h1>
            <ul
              style={{
                listStyle: "disc",
              }}
            >
              <li>
                Pikachu version 2 ({" "}
                <a
                  href="https://skfb.ly/o6DGW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://skfb.ly/o6DGW
                </a>
                ) by Neut2000 is licensed under Creative Commons
                Attribution (
                <a
                  href="http://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  http://creativecommons.org/licenses/by/4.0/
                </a>
                ).
              </li>
              <li>
                Eevee Pokemon (
                <a
                  href="https://skfb.ly/oo6xP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://skfb.ly/oo6xP
                </a>
                ) by selgrayshade is licensed under Creative Commons
                Attribution (
                <a
                  href="http://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  http://creativecommons.org/licenses/by/4.0/
                </a>
                ).
              </li>
              <li>
                Bulbasaur by Stam (
                <a
                  href="https://skfb.ly/os9zT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://skfb.ly/os9zT
                </a>
                ) by stam3D is licensed under Creative Commons
                Attribution (
                <a
                  href="http://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  http://creativecommons.org/licenses/by/4.0/
                </a>
                ).
              </li>
            </ul>
          </section>
        </div>
      )}

      <div className="relative top-[15%] -translate-y-1/2 z-10 w-full overflow-hidden">
        <h1 className="poke-name text-white text-[15vw] md:text-[12vw] font-black text-center text-lightEffect -translate-y-full">
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
