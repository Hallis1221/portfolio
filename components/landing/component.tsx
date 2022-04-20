import { useViewportScroll, useTransform, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { landingVariants } from "./framer";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { waiter } from "../../lib/config";
import Image from "next/image";
import Confetti from "react-confetti";

export function Landing() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1.2, 0.5]);

  const [showLanding, setShowLanding] = useState(true);
  const { t } = useTranslation("common");

  const [firstRun, setfirstRun] = useState(1);

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
      <div className=" h-[1250px] w-screen">
        <motion.div
          variants={landingVariants}
          initial="initial"
          animate={showLanding ? "initial" : "gone"}
          transition={{ duration: 0.5 }}
          className={`mockup-window w-screen border  fixed`}
          style={{
            scale,
          }}
        >
          
          <div className="hero min-h-screen min-w-screen">
            <div className="hero-overlay bg-transparent "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 md:mb-16 m-7 md:m-0 text-6xl md:text-8xl font-extrabold">
                  {t("landing.title").toString()}
                </h1>

                <div className="mb-5 flex text-center flex-row h-20 justify-center text-xl md:text-3xl">
                  <div className="pr-2"> {t("landing.a").toString()}</div>
                  <Typewriter
                    options={{
                      cursor: "",
                      loop: true,
                      wrapperClassName: "font-bold",
                    }}
                    onInit={(typewriter: TypewriterClass) => {
                      typewriter
                        .pauseFor(600 * waiter * firstRun)
                        .typeString(
                          '<div class="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-800">typescript</div>'
                        )
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString(
                          '<div class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">Next.js</div>'
                        )
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString(
                          '<div class="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-pink-600 to-red-600">Remix</div>'
                        )
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString(
                          '<div class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">flutter</div>'
                        )
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString(
                          '<div class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600">javascript</div>'
                        )
                        .pauseFor(2500)
                        .start();
                      setfirstRun(0);
                    }}
                  />
                  <div className="pl-2">
                    {t("landing.description").toString()}
                  </div>
                </div>
                <motion.div
                  className="invert absolute m-auto mt-12 left-0 right-0 opacity-75"
                  animate={{ y: 10, opacity: 0.8 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                  }}
                  style={{
                    scale,
                    opacity: 0.8,
                  }}
                >
                  <Image
                    src="https://img.icons8.com/external-doodle-bomsymbols-/344/external-design-doodle-web-design-device-set-1-doodle-bomsymbols--21.png"
                    height={55}
                    width={55}
                    alt="Scroll down"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
