import { generic2DNoise, remap } from "@/utils/glsl";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function LightEffect() {
  const uniforms = {
    resolution: { value: new THREE.Vector2(0, 0) },
    time: { value: 0 },
  };
  useFrame(({ clock }) => {
    uniforms.resolution.value.x = window.innerWidth;
    uniforms.resolution.value.y = window.innerHeight;

    const time = clock.getElapsedTime();
    uniforms.time.value = time;
  });

  return (
    <mesh position={[0, 0, 4]} key={Math.random()}>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
            varying vec2 vUv;
            void main() {
                vUv = uv;                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
        `}
        fragmentShader={`
            ${remap}
            ${generic2DNoise}
            uniform vec2 resolution;
            varying vec2 vUv;
            uniform float time;
            float sdSphere(vec3 p, float s) {
                return length(p) - s;
            }

            void main() {
                vec2 uv = vUv;
                uv -= 0.5;

                float noiseSample = noise(uv  + time * 0.5);

                float d = sdSphere(vec3(uv, 0.), 0.1 + noiseSample * 0.3);



                gl_FragColor = vec4(mix(vec3(1.), vec3(0.), step(0.1, d)), 1. - step(0.1, d));
            }
        `}
        needsUpdate
        transparent
      />
    </mesh>
  );
}
