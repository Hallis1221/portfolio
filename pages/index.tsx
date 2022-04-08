import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { LoadingIntro } from "../components/intro";
import Typewriter from "typewriter-effect";

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
      setTimeout(() => setShowIntro(false), 480),
      setTimeout(() => setMain(true), 570),
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
        className="h-screen w-screen"
      >
        <div className="hero min-h-screen">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-16 text-8xl font-extrabold">Hey, I am Halvor 👋 </h1>

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
                      .pauseFor(600)
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
                      .pauseFor(2500)
                      .start();
                  }}
                />
                developer from Norway 🇳🇴
              </div>
            </div>
          </div>
        </div>
      </motion.div>{" "}
    </>
  );
};

export default Home;
