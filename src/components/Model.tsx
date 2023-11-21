import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Pokeball, TPokeballMethods } from "./Pokeball";
import { Float } from "@react-three/drei";

export function Model() {
  const pokemonMethods = useRef<TPokeballMethods | null>(null);

  return (
    <Float speed={0}>
      <Pokeball ref={pokemonMethods} />
    </Float>
  );
}
