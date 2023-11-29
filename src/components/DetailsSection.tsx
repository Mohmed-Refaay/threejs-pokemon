"use client";

import { activeSlideAtom } from "@/utils/atoms";
import { pokeballData } from "@/utils/data";
import { useAtom } from "jotai";
import Image from "next/image";

export function DetailsSection() {
  const activeSlide = useAtom(activeSlideAtom)[0];
  const data = pokeballData[activeSlide];

  return (
    <div className="absolute top-1/2 md:-translate-y-1/2  md:left-1/2 z-30 translate-x-10 text-white  md:text-2xl flex flex-col gap-2 md:gap-4 overflow-hidden">
      <CommonDL>
        <dt>Name:</dt>
        <dd>{data.name}</dd>
      </CommonDL>
      <CommonDL>
        <dt>Type:</dt>
        <dd>{data.type}</dd>
      </CommonDL>

      <Details n={data.power} type="Power" />
      <Details n={data.speed} type="Speed" />
      <Details n={data.defense} type="Defense" />
      <Details n={data.attack} type="Attack" />
    </div>
  );
}

function CommonDL({ children }: { children: React.ReactNode }) {
  return (
    <dl
      className="flex gap-5 items-center opacity-0"
      style={{
        transform: "translateX(500px)",
      }}
    >
      {children}
    </dl>
  );
}

function Details({ n, type }: { n: number; type: string }) {
  return (
    <CommonDL>
      <dt className="min-w-[70px] md:min-w-[100px]">{type}:</dt>
      <dd className="flex">
        {Array(n)
          .fill(0)
          .map((_, i) => {
            return (
              <Image
                key={i}
                alt={`${i} points`}
                src="/point.png"
                width={40}
                height={40}
                className="point-img"
                style={{
                  opacity: 0,
                }}
              />
            );
          })}
      </dd>
    </CommonDL>
  );
}
