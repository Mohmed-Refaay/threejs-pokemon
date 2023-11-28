import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export function World() {
  const camera = useThree((s) => s.camera);

  useEffect(() => {
    camera.zoom =
      Math.max(window.innerHeight, window.innerWidth) / 30;
    camera.updateProjectionMatrix();
  }, [camera]);

  return (
    <>
      <ambientLight intensity={3} />

      <OrbitControls />
    </>
  );
}
