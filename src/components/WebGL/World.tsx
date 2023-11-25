import { OrbitControls } from "@react-three/drei";

export function World() {
  return (
    <>
      <ambientLight intensity={3} />

      <OrbitControls />
    </>
  );
}
