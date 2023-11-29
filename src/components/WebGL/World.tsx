import { useFrame } from "@react-three/fiber";

export function World() {
  useFrame(({ camera, viewport }) => {
    camera.position.y = -window.scrollY;

    camera.updateProjectionMatrix();
  });

  return (
    <>
      <ambientLight intensity={3} />

      {/* <OrbitControls /> */}
    </>
  );
}
