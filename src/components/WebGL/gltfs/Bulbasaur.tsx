/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 bulbasaur.glb -t -s 
Author: stam3D (https://sketchfab.com/stam3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bulbasaur-by-stam-5d1e77d5bd6d499db39b0133ef902849
Title: Bulbasaur by Stam
*/

import * as THREE from "three";
import React from "react";
import { Outlines, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
  };
  materials: {
    Bulbe: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    None: THREE.MeshStandardMaterial;
  };
};

export function Bulbasaur(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./models/bulbasaur.glb",
  ) as GLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      scale={[7, 7, 7]}
      position-y={-2}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.378}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Bulbe}
        >
          <SharedOutline />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Material.006"]}
        >
          <SharedOutline />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Material.005"]}
        >
          <SharedOutline />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.None}
        >
          <SharedOutline />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./models/bulbasaur.glb");

function SharedOutline() {
  // @ts-ignore
  return <Outlines thickness={0.015} color="black" />;
}