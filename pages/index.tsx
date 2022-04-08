import {
  motion,
  useAnimationFrame,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { LoadingIntro } from "../components/intro";
import Typewriter from "typewriter-effect";

const waittime = 1;
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

const landingVariants = {
  initial: {
    opacity: 1,
  },
  gone: {
    opacity: 0,
  },
};

const Home: NextPage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [main, setMain] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 0.5]);

  useEffect(() => {
    const ids = [
      setTimeout(() => setShowIntro(false), 480 * waittime),
      setTimeout(() => setMain(true), 570 * waittime),
    ];

    return () => ids.forEach((id) => clearTimeout(id));
  }, [setShowIntro]);

  scrollYProgress.onChange((progress) => {
    if (progress > 0.35) {
      setShowLanding(false);
    }
    if (progress < 0.35) {
      setShowLanding(true);
    }
  });

  return (
    <>
      <LoadingIntro visible={showIntro} />
      <motion.div
        variants={mainVariants}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{ duration: 1.0 }}
      >
        <div className="h-[1250px] w-screen">
          <motion.div
            variants={landingVariants}
            initial="initial"
            animate={showLanding ? "initial" : "gone"}
            transition={{ duration: 0.5 }}
            className={` mockup-window w-screen m-5 border fixed`}
            style={{
              scale,
            }}
          >
            <div className="hero min-h-screen min-w-screen">
              <div className="hero-overlay bg-transparent "></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="mb-16 text-8xl font-extrabold">
                    Hey, I am Halvor 👋{" "}
                  </h1>

                  <div className="mb-5 flex text-center flex-row justify-center text-xl md:text-3xl">
                    A
                    <Typewriter
                      options={{
                        cursor: "",
                        loop: true,
                        wrapperClassName: "font-bold",
                        
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(600 * waittime)
                          .typeString(
                            '<div class="px-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-800">typescript</div>'
                          )

                          .pauseFor(2500)
                          .deleteAll()
                          .typeString(
                            '<div class="px-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">Next.js</div>'
                          )
                          .pauseFor(2500)
                          .deleteAll()
                          .typeString(
                            '<div class="px-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-pink-600 to-red-600">Remix</div>'
                          )
                          .pauseFor(2500)
                          .deleteAll()
                          .typeString(
                            '<div class="px-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">flutter</div>'
                          )
                          .pauseFor(2500)
                          .deleteAll()
                          .typeString(
                            '<div class="px-2 text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600">javascript</div>'
                          )
                         
                          .start();
                      }}
                    />
                    developer from Norway 🇳🇴
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="h-screen">Intro</div>
        <div className="h-screen">Projects</div>
        <div className="h-screen">Knowledge</div>
        <div className="h-screen">Contact</div>
      </motion.div>{" "}
    </>
  );
};

export default Home;
