import { forwardRef, useEffect, useRef } from "react";
import { Pokeball, TPokeballMethods } from "./Pokeball";
import gsap from "gsap";
import { Float } from "@react-three/drei";

export const Model = forwardRef(function Model(
  props: JSX.IntrinsicElements["group"],
  ref: React.Ref<THREE.Group>,
) {
  const pokemonMethods = useRef<TPokeballMethods>(null!);
  const objRef = useRef<THREE.Group>(null!);

  function pokeballAnimation() {
    const obj = objRef.current;
    const methods = pokemonMethods.current;

    const tl = gsap.timeline({
      delay: 2,
      onComplete() {
        // tl.reverse();
      },
    });

    const data = {
      pokemonProgress: 0,
    };

    tl.to(
      data,
      {
        pokemonProgress: 1,
        duration: 1,
        onUpdate() {
          methods.playAnimationPercentage(data.pokemonProgress);
        },
      },
      0,
    )
      .to(
        obj.scale,
        {
          duration: 0.5,
          x: 1,
          y: 1,
          z: 1,
        },
        1.2,
      )
      .to(
        obj.rotation,
        {
          duration: 2.2,
          y: Math.PI * 6,
        },
        0.2,
      )
      .to(
        obj.position,
        {
          duration: 1,
          z: 2,
          x: 0,
          y: 0.5,
        },
        0.2,
      );
  }

  return (
    <group {...props} ref={ref}>
      <group ref={objRef} scale={[0.1, 0.1, 0.1]}>
        <mesh>
          <boxGeometry args={[2, 2, 2]} attach="geometry" />
          <meshStandardMaterial color="hotpink" attach="material" />
        </mesh>
      </group>

      <Float speed={5}>
        <Pokeball ref={pokemonMethods} />
      </Float>
    </group>
  );
});
