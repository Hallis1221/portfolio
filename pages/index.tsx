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
import Image from "next/image";

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

  useEffect(() => {
    const ids = [
      setTimeout(() => setShowIntro(false), 480 * waittime),
      setTimeout(() => setMain(true), 570 * waittime),
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
      >
        <LandingComponent />
        <div className="h-screen">Drum roll</div>
        <div className="h-screen">Intro</div>
        <div className="h-screen">
          <h1 className="text-center text-8xl">
            Projects!
          </h1>
          I have made a lot of stuff, most of which is never going to see the
          light of day. Take a look at a few projects that made it to a usable
          state, most of them are even open source! Make sure to check out the
          tags to see if they are my faviorite :star:. You might even be able to
          read what tech i used for it all
          <div className="grid mx-4 my-5 justify-items-center grid-cols-3">
            <ProjectComponent
              title={"Mads"}
              description={
                "A family friendly link shortening service made for the 21st century."
              }
              image={"/projects/images/mads.png"}
              nextjs
              typescript
              recommended
              isNew
            />
            <ProjectComponent title={""} description={""} />
            <ProjectComponent title={""} description={""} />
            <ProjectComponent title={""} description={""} />
            <ProjectComponent title={""} description={""} />
            <ProjectComponent title={""} description={""} />
          </div>
        </div>
        <div className="h-screen">Knowledge</div>
        <div className="h-screen">Contact</div>
      </motion.div>{" "}
    </>
  );
};

export default Home;

function LandingComponent() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 0.5]);

  const [showLanding, setShowLanding] = useState(true);

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
          className={`mockup-window w-screen m-5 border fixed`}
          style={{
            scale,
          }}
        >
          <div className="hero min-h-screen min-w-screen">
            <div className="hero-overlay bg-transparent "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 md:mb-16 m-7 md:m-0 text-6xl md:text-8xl font-extrabold">
                  Hey, I am Halvor{" "}
                  <div className="inline">
                    <div className="hover:transparent inline">👋 </div>
                  </div>
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
    </>
  );
}

export function ProjectComponent(
  {
    isNew,
    recommended,
    title,
    description,
    nextjs,
    remix,
    typescript,
    flutter,
    javascript,
    image,
  }: {
    isNew?: boolean;
    recommended?: boolean;
    title: string;
    description: string;
    nextjs?: boolean;
    remix?: boolean;
    typescript?: boolean;
    flutter?: boolean;
    javascript?: boolean;
    image?: string;
  } = {
    isNew: false,
    recommended: false,
    title: "",
    description: "",
    nextjs: false,
    remix: false,
    typescript: false,
    flutter: false,
    javascript: false,
    image: "",
  }
) {
  let nextTag: TechTag = {
    title: "Next.js",
    color: "bg-blue-600",
  };

  let flutterTag: TechTag = {
    title: "Flutter",
    color: "bg-blue-600",
  };

  let javascriptTag: TechTag = {
    title: "Javascript",
    color: "bg-yellow-600",
  };

  let typescriptTag: TechTag = {
    title: "Typescript",
    color: "bg-blue-600",
  };

  let remixTag: TechTag = {
    title: "Remix",
    color: "bg-pink-600",
  };

  return (
    <div className="card w-96 my-5 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={image ? image : "https://via.placeholder.com/400x225"}
          width={400}
          height={225}
          alt={title + " - " + description + " image"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}

          {isNew ? <div className="badge badge-secondary">NEW</div> : <></>}

          {recommended ? (
            <div className="badge badge-primary">RECOMMENDED</div>
          ) : (
            <></>
          )}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {nextjs ? <TagComponent techTag={nextTag} /> : <></>}

          {remix ? <TagComponent techTag={remixTag} /> : <></>}

          {typescript ? <TagComponent techTag={typescriptTag} /> : <></>}

          {flutter ? <TagComponent techTag={flutterTag} /> : <></>}

          {javascript ? <TagComponent techTag={javascriptTag} /> : <></>}
        </div>
      </div>
    </div>
  );
}

export function TagComponent({ techTag }: { techTag: TechTag }) {
  console.log(techTag.color);
  return (
    <div className={`badge badge-info  ${techTag.color}`}>{techTag.title}</div>
  );
}

type TechTag = {
  title: string;
  color: string;
};
