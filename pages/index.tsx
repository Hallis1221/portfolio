import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import {
  Environment,
  ContactShadows,
  OrbitControls,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import type { NextPage } from "next";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { LoadingIntro } from "../components/intro";
import { IphoneModel } from "../components/models/iphone";

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
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4], fov: 50 }}
          className="min-h-screen"
        >
          <ambientLight intensity={0.5} />
          <spotLight
            intensity={0.3}
            angle={0.3}
            penumbra={1}
            position={[5, 25, 20]}
            shadow-bias={-0.0001}
            castShadow
          />
          <Suspense fallback={null}>
            <IphoneModel scale={20} position={[0, -5, 0]} 
            
            rotation={[0, 180, 180]}
            />
            <Environment preset="city" />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -0.8, 0]}
              opacity={0.25}
              width={10}
              height={10}
              blur={1.5}
              far={0.9}
            />
          </Suspense>
          {/* <OrbitControls regress />
      <AdaptiveDpr pixelated /> */}
          <AdaptiveEvents />
        </Canvas>
      </motion.div>
    </>
  );
};

export default Home;
