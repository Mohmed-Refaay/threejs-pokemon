"use client";

import { activeSlideAtom } from "@/utils/atoms";
import { pokeballData } from "@/utils/data";
import { useAtom } from "jotai";
import Image from "next/image";

export function DetailsSection() {
  const activeSlide = useAtom(activeSlideAtom)[0];
  const data = pokeballData[activeSlide];

  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 translate-x-10 text-white text-2xl flex flex-col gap-4">
      <dl className="flex gap-5 ">
        <dt>Name:</dt>
        <dd>{data.name}</dd>
      </dl>
      <dl className="flex gap-5">
        <dt>Type:</dt>
        <dd>{data.type}</dd>
      </dl>

      <Details n={data.power} type="Power" />
      <Details n={data.speed} type="Speed" />
      <Details n={data.defense} type="Defense" />
      <Details n={data.attack} type="Attack" />
    </div>
  );
}

function Details({ n, type }: { n: number; type: string }) {
  return (
    <dl className="flex gap-5 items-center">
      <dt className="min-w-[100px]">{type}:</dt>
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
              />
            );
          })}
      </dd>
    </dl>
  );
}
