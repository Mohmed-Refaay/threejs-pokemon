import { useRef } from "react";
import { Model } from "./Model";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import {
  activeSlideAtom,
  sliderDirectionAtom,
  sliderProgressAtom,
} from "@/utils/atoms";
import { pokeballData } from "@/utils/data";

const vec = new THREE.Vector3();
const SPACING = 15;
const fullWidth = SPACING * pokeballData.length;

export function Slider() {
  const refs = useRef<THREE.Group[]>([]);
  const { width, height } = useThree((s) => s.viewport);
  const progress = useAtom(sliderProgressAtom)[0];
  const [activeSlide, setActiveSlider] = useAtom(activeSlideAtom);
  const direction = useAtom(sliderDirectionAtom)[0];

  useFrame(function positionPokes() {
    const group = refs.current;

    if (!Array.isArray(group)) return;

    for (let i = 0; i < group.length; i++) {
      const poke = group[i];
      const posIndex = (i + progress + 200000) % pokeballData.length;
      vec.x = posIndex * SPACING - fullWidth / 2;

      if (posIndex === 0 && activeSlide != i) {
        setActiveSlider(i);
      }

      if (
        (posIndex == 0 && direction > 0) ||
        (posIndex === pokeballData.length - 1 && direction < 0)
      ) {
        poke.position.copy(vec);
      } else {
        poke.position.lerp(vec, 0.1);
      }
    }
  });

  const scale = (width / height) * 35;

  return (
    <group position={[0, 0, 0]} scale={[scale, scale, scale]}>
      {pokeballData.map((poke, i) => {
        return (
          <Model
            key={i}
            ref={(ref) => {
              if (!ref) return;
              refs.current[i] = ref;
            }}
            pokeCharacter={poke.model}
          />
        );
      })}
    </group>
  );
}
