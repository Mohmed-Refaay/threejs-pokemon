import { forwardRef, useEffect, useRef } from "react";
import { Pokeball, TPokeballMethods } from "./gltfs/Pokeball";
import gsap from "gsap";
import { Float } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

type TProps = JSX.IntrinsicElements["group"] & {
  pokeCharacter?: JSX.Element;
};

const data = {
  scrollY: 0,
  pokemonProgress: 0,
};

export const Model = forwardRef(function Model(
  props: TProps,
  ref: React.Ref<THREE.Group>,
) {
  const pokemonMethods = useRef<TPokeballMethods>(null!);
  const objRef = useRef<THREE.Group>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const { width, height } = useThree((s) => s.viewport);
  const tl = useRef(
    gsap.timeline({
      paused: true,
    }),
  );
  const scale = (width / height) * 35;

  useEffect(() => {
    tl.current
      .to(
        data,
        {
          pokemonProgress: 1,
          duration: 1,
          onUpdate() {
            pokemonMethods.current.playAnimationPercentage(
              data.pokemonProgress,
            );
          },
        },
        0,
      )
      .to(
        objRef.current.position,
        {
          duration: 1,
          x: 0,
          y: 0,
        },
        0.2,
      )
      .to(
        objRef.current.scale,
        {
          duration: 1,
          x: 1,
          y: 1,
          z: 1,
        },
        0.2,
      )
      .to(
        objRef.current.position,
        {
          y: -height / scale,
          duration: 1,
        },
        1.2,
      )
      .to(
        data,
        {
          scrollY: height,
          duration: 1,
          onUpdate() {
            window.scrollTo(0, data.scrollY);
          },
        },
        1.2,
      )
      .to(
        objRef.current.position,
        {
          duration: 1,
          x: (-width * 0.25) / scale,
        },
        1.2,
      );
  }, [pokemonMethods, width, height, objRef, groupRef, tl]);

  useFrame(() => {
    groupRef.current.rotation.y += 0.01;
  });

  return (
    <group {...props} ref={ref}>
      <group
        ref={objRef}
        position={[2.0258, 4.198, 2]}
        scale={[0, 0, 0]}
      >
        <group ref={groupRef}>{props.pokeCharacter}</group>
      </group>

      <Float speed={5} rotationIntensity={0.4}>
        <Pokeball
          ref={pokemonMethods}
          onClick={() => tl.current.play()}
        />
      </Float>
    </group>
  );
});
