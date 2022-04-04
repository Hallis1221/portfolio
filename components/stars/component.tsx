import { MutableRefObject, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function degToRad(degrees: number) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export function Stars() {
  let group: MutableRefObject<THREE.Group | undefined> = useRef();
  let rotation = 0;

  useFrame(() => {
    if (group.current) {
      // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
      const r = 5 * Math.sin(degToRad((rotation += 0.015)));
      group.current.rotation.set(r, r, r);
    }
  });

  const [coords] = useMemo(() => {
    const coords = new Array(1000)
      .fill(0, 1)
      .map((_) => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ]);
    return [coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} position={[p1, p2, p3]}>
          <sphereBufferGeometry args={[1, 10, 10]} />
          <meshBasicMaterial color={0xffffff} />
        </mesh>
      ))}
    </group>
  );
}
