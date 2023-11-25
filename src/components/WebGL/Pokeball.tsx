import * as THREE from "three";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    outside_cover: THREE.Mesh;
    Sphere: THREE.Mesh;
    Sphere001: THREE.Mesh;
    Sphere002: THREE.Mesh;
    outside_cover001: THREE.Mesh;
  };
  materials: {
    ["white-cover"]: THREE.MeshStandardMaterial;
    ["black-in"]: THREE.MeshStandardMaterial;
    button: THREE.MeshStandardMaterial;
    ["red-cover"]: THREE.MeshStandardMaterial;
  };
};

type TProps = JSX.IntrinsicElements["group"];

export type TPokeballMethods = {
  playAnimation: () => void;
  reverseAnimation: () => void;
  playAnimationPercentage: (p: number) => void;
};

export const Pokeball = forwardRef(function Pokeball(
  props: TProps,
  ref: React.Ref<TPokeballMethods>,
) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF(
    "./models/pokeball.glb",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useImperativeHandle(
    ref,
    () => ({
      playAnimation() {
        Object.values(actions).forEach((action) => {
          if (!action) return;
          action.loop = THREE.LoopOnce;
          action.clampWhenFinished = true;
          action.paused = false;
          action.enabled = true;
          action.setEffectiveTimeScale(1);
          action.play();
        });
      },
      reverseAnimation() {
        Object.values(actions).forEach((action) => {
          if (!action) return;
          action.paused = false;
          action.enabled = true;
          action.setEffectiveTimeScale(-1);
          action.play();
        });
      },
      playAnimationPercentage(percentage) {
        Object.values(actions).forEach((action) => {
          if (!action) return;
          action.paused = false;
          action.enabled = true;
          action.loop = THREE.LoopOnce;
          action.clampWhenFinished = true;
          action.time = action.getClip().duration * percentage;
          action.play();
          action.paused = true;
        });
      },
    }),
    [actions],
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" rotation-y={Math.PI}>
        <mesh
          name="outside_cover"
          castShadow
          receiveShadow
          geometry={nodes.outside_cover.geometry}
          material={materials["white-cover"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["black-in"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.934}
        />
        <mesh
          name="Sphere001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.button}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.941}
        />
        <mesh
          name="Sphere002"
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials["black-in"]}
          position={[-0.01, 0.073, 0.959]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.934}
        />
        <mesh
          name="outside_cover001"
          castShadow
          receiveShadow
          geometry={nodes.outside_cover001.geometry}
          material={materials["red-cover"]}
          position={[-0.01, 0.073, 0.959]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
});

useGLTF.preload("./models/pokeball.glb");
