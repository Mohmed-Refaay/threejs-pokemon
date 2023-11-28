import { forwardRef, useRef } from "react";
import { Pokeball, TPokeballMethods } from "./gltfs/Pokeball";
import gsap from "gsap";
import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

type TProps = JSX.IntrinsicElements["group"] & {
  pokeCharacter?: JSX.Element;
};

export const Model = forwardRef(function Model(
  props: TProps,
  ref: React.Ref<THREE.Group>,
) {
  const pokemonMethods = useRef<TPokeballMethods>(null!);
  const objRef = useRef<THREE.Group>(null!);
  const evenn = useGLTF("./models/evee.glb");
  const groupRef = useRef<THREE.Group>(null!);

  function pokeballAnimation() {
    const obj = objRef.current;
    const methods = pokemonMethods.current;

    const tl = gsap.timeline({});

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
        obj.position,
        {
          duration: 1,
          x: 0,
          y: 0,
          // z: 0,
        },
        0.2,
      )
      .to(
        obj.scale,
        {
          duration: 1,
          x: 1,
          y: 1,
          z: 1,
        },
        0.2,
      );
    // .to(
    //   obj.rotation,
    //   {
    //     duration: 2.2,
    //     y: Math.PI * 6,
    //   },
    //   0.2,
    // );
  }

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
        <Pokeball ref={pokemonMethods} onClick={pokeballAnimation} />
      </Float>
    </group>
  );
});
