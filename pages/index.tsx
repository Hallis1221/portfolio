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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

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

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home: NextPage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [main, setMain] = useState(false);

  const { t } = useTranslation("common");

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
        <div className="h-screen" />
        <div className="h-fit">
          <h1 className="text-center text-8xl font-semibold">Projects!</h1>
          <p className="mt-10 mb-7 mx-16 font-light">
            I have made a variaty of stuff, most of which is never going to see
            the light of day. Regardless, take a look at a few projects. Some
            are complete, some are not so complete, most of them are even open
            source! Make sure to check out the tags to see if they are my
            faviorite :star: You might even be able to read what tech i used for
            it all
          </p>
          <div className="grid mx-4 my-5 justify-items-center grid-cols-3">
            <ProjectComponent
              title={t("projects.mads.title")}
              description={t("projects.mads.description")}
              image="mads.png"
              github="hallis1221/mads-core"
              nextjs
              typescript
              recommended
              isNew
            />
            <ProjectComponent
              title={t("projects.portfolio.title")}
              description={t("projects.portfolio.description")}
              nextjs
              typescript
              isNew
              image="portfolio.png"
            />
            <ProjectComponent
              title={t("projects.mats.title")}
              description={t("projects.mats.description")}
              image="marketools.png"
              typescript
              remix
              isNew
            />
            <ProjectComponent
              title={t("projects.modlar.title")}
              description={t("projects.modlar.description")}
              flutter
            />
            <ProjectComponent
              title={"Ukeplanr / Weekplanr"}
              description={""}
              flutter
            />
            <ProjectComponent
              title={"Class Map Generator"}
              description={""}
              isOld
              python
            />
          </div>
        </div>
        <div className="h-44"></div>
        <ContactFooter />
      </motion.div>{" "}
    </>
  );
};

export default Home;

function ContactFooter() {
  const { t } = useTranslation("common");

  return (
    <footer className="footer footer-center p-10 bg-neutral-focus text-primary-content">
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="inline-block fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className="font-bold">
          {t("footer.author").toString()}
          <br />
          {t("footer.tagline").toString()}
        </p>
        <p>{t("footer.copyright").toString()}</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com/hallis1221"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                fill="rgb(255, 255, 255);"
              />
            </svg>
          </a>
          <a
          href="https://github.com/hallis1221"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

function LandingComponent() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 0.5]);

  const [showLanding, setShowLanding] = useState(true);
  const { t } = useTranslation("common");

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
                  {t("landing.title").toString()}
                </h1>

                <div className="mb-5 flex text-center flex-row justify-center text-xl md:text-3xl">
                  {t("landing.a").toString()}
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
                  {t("landing.description").toString()}
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
    isOld,
    recommended,
    title,
    description,
    nextjs,
    remix,
    python,
    typescript,
    flutter,
    javascript,
    image,
    github,
  }: {
    isNew?: boolean;
    isOld?: boolean;
    recommended?: boolean;
    title: string;
    description: string;
    nextjs?: boolean;
    python?: boolean;
    remix?: boolean;
    typescript?: boolean;
    flutter?: boolean;
    javascript?: boolean;
    image?: string;
    github?: string;
  } = {
    isNew: false,
    recommended: false,
    python: false,
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
  const { t } = useTranslation("common");

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

  let pythonTag: TechTag = {
    title: "Python",
    color: "bg-green-600",
  };

  return (
    <motion.div
      className="card w-96 my-5 bg-base-100 shadow-xl"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8, borderRadius: "10%" }}
    >
      <figure>
        <Image
          src={
            image
              ? "/projects/images/" + image
              : "https://via.placeholder.com/400x225"
          }
          width={400}
          height={225}
          alt={title + " - " + description + " image"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}

          {isNew ? (
            <div className="badge badge-secondary">
              {t("projects.new").toString()}
            </div>
          ) : (
            <></>
          )}
          {isOld ? (
            <div className="badge badge-warning">
              {t("projects.old").toString()}
            </div>
          ) : (
            <></>
          )}

          {recommended ? (
            <div className="badge badge-primary">
              {t("projects.recommended").toString()}
            </div>
          ) : (
            <></>
          )}
        </h2>
        <p>{description}</p>

        <div className="card-actions justify-end mt-5">
          {github ? <GithubLinkComponent repo={github} /> : <></>}
          {nextjs ? <TagComponent techTag={nextTag} /> : <></>}

          {remix ? <TagComponent techTag={remixTag} /> : <></>}

          {typescript ? <TagComponent techTag={typescriptTag} /> : <></>}

          {flutter ? <TagComponent techTag={flutterTag} /> : <></>}

          {javascript ? <TagComponent techTag={javascriptTag} /> : <></>}

          {python ? <TagComponent techTag={pythonTag} /> : <></>}
        </div>
      </div>
    </motion.div>
  );
}

export function TagComponent({ techTag }: { techTag: TechTag }) {
  return (
    <div className={`badge badge-info  ${techTag.color}`}>{techTag.title}</div>
  );
}

export function GithubLinkComponent({ repo }: { repo: string }) {
  const iconVariants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <button
      className="justify-start absolute left-8"
      onClick={() => window.open("https://github.com/" + repo, "_blank")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <motion.path
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
    </button>
  );
}
type TechTag = {
  title: string;
  color: string;
};
