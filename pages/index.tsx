import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { motion as motion3D } from "framer-motion-3d";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { LoadingIntro } from "../components/intro";
import { Stars } from "../components/stars";

const mainVariants = {
  initial: {
    opacity: 0,
    display: "none",
  },
  visible: {
    opacity: 1,
    display: "block",
  },
};

const Home: NextPage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [main, setMain] = useState(false);

  useEffect(() => {
    const ids = [
      setTimeout(() => setShowIntro(false), 4800),
      setTimeout(() => setMain(true), 5700),
    ];

    return () => ids.forEach((id) => clearTimeout(id));
  }, [setShowIntro]);

  return (
    <>
      <LoadingIntro visible={showIntro} />
      <motion.div
        variants={mainVariants}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{ duration: 1.0 }}
        className="h-screen"
      >
        <Canvas
          style={{ background: "black" }}
          camera={{ position: [0, 0, 15] }}
          className="flex absolute"
        >
          <motion3D.ambientLight intensity={0.5} />
          <motion3D.spotLight
            intensity={0.6}
            position={[30, 30, 50]}
            angle={0.2}
            penumbra={1}
            castShadow
          />
          <Stars />
        </Canvas>
      </motion.div>{" "}
    </>
  );
};

export default Home;
