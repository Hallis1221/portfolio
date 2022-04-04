import { useMemo, useRef } from "react";
import {useFrame} from "@react-three/fiber"
import * as THREE from "three";

export function Stars(){
    let group = useRef()
    let rotation = 0;

    useFrame(() => {
        if (group.current) {
            // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
            const r = 5 * Math.sin(THREE.Math.degToRad((rotation += 0.025)));
            group.current.rotation.set(r, r, r);
          }
    });

    const [geo, mat, coords] = useMemo(() => {
          const geo = new THREE.SphereBufferGeometry(1, 10, 10);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("white")
    });
    const coords = new Array(1000)
      .fill(0,1)
      .map((i) => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400
      ]);
    return [geo, mat, coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}