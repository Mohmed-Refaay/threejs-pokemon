import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export function World() {
  const directionLightRef = useRef<THREE.DirectionalLight | null>(
    null,
  );

  useEffect(
    function directionalLightSetup() {
      if (!directionLightRef.current) return;

      directionLightRef.current.castShadow = true;
      directionLightRef.current.shadow.bias = -0.0005;
      console.log(directionLightRef.current.shadow.bias);
    },
    [directionLightRef],
  );

  return (
    <>
      <ambientLight intensity={2} />

      <directionalLight
        ref={directionLightRef}
        intensity={3}
        position={[2, 2, 0]}
      />

      {/* <OrbitControls /> */}
    </>
  );
}
