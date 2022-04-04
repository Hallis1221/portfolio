import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Props } from "./props";
import { motion as motion3D } from "framer-motion-3d";

export function Box(props: Props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y *= 1.2;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(_) => setActive(!active)}
      onPointerOver={(_) => setHover(true)}
      onPointerOut={(_) => setHover(false)}
    >
      <motion3D.boxGeometry args={[1, 2, 3]} />
      <motion3D.meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
