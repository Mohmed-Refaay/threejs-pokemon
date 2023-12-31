import { forwardRef, useEffect, useRef } from "react";
import { Pokeball, TPokeballMethods } from "./gltfs/Pokeball";
import gsap from "gsap";
import { Float } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { activeSlideAtom } from "@/utils/atoms";

type TProps = JSX.IntrinsicElements["group"] & {
  pokeCharacter?: JSX.Element;
  index: number;
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
  const activeSlide = useAtom(activeSlideAtom)[0];

  const tl = useRef(
    gsap.timeline({
      paused: true,
    }),
  );

  const isDesktop = width > 768;

  const scale = isDesktop
    ? (width / height) * 35
    : (width / height) * 80;

  useEffect(() => {
    tl.current
      .set(".slider-btn", {
        pointerEvents: "none",
      })
      .to(
        data,
        {
          pokemonProgress: 1,
          duration: 0.8,
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
          duration: 0.3,
          x: 0,
          ease: "none",
        },
        0.8,
      )
      .to(
        objRef.current.position,
        {
          duration: 0.5,
          y: 0,
          ease: "power2.in",
        },
        1.1,
      )
      .to(
        objRef.current.scale,
        {
          duration: 0.5,
          x: 1,
          y: 1,
          z: 1,
        },
        0.9,
      )
      .to(
        objRef.current.position,
        {
          y: isDesktop ? -height / scale : (-height / scale) * 0.75,
          duration: 0.5,
          ease: "power2.out",
        },
        1.6,
      )
      .to(
        data,
        {
          scrollY: height,
          duration: 0.5,
          ease: "power2.out",
          onUpdate() {
            window.scrollTo(0, data.scrollY);
          },
        },
        1.6,
      )
      .to(
        objRef.current.position,
        {
          duration: 0.5,
          x: isDesktop ? (-width * 0.25) / scale : 0,
          ease: "power2.out",
        },
        2.1,
      )
      .to(
        "dl",
        {
          duration: 0.3,
          opacity: 1,
          translateX: 0,
          stagger: 0.03,
          ease: "power2.out",
        },
        2.3,
      )
      .to(".point-img", {
        duration: 0.2,
        opacity: 1,
        stagger: 0.04,
      })
      .to(".scroll-up", {
        duration: 0.1,
        opacity: 1,
      });
  }, [
    pokemonMethods,
    width,
    height,
    objRef,
    groupRef,
    tl,
    scale,
    isDesktop,
  ]);

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY < 0 && tl.current.progress() == 1) {
        tl.current.reverse();
      }
    });
    let touchStart = 0;

    window.addEventListener("touchstart", (e) => {
      touchStart = e.touches[0].screenY;
    });

    window.addEventListener("touchend", (e) => {
      const touchEnd = e.changedTouches[0].screenY;

      if (touchStart < touchEnd && tl.current.progress() == 1) {
        tl.current.reverse();
      }
    });
  }, [tl]);

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
          onClick={() => {
            if (activeSlide != props.index) return;
            tl.current.play();
          }}
        />
      </Float>
    </group>
  );
});
