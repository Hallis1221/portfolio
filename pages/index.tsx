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
        <div className="h-fit mx-10">
          <h1 className="text-center text-8xl font-semibold">
            {t("projects.title").toString()}
          </h1>
          <p className="mt-10 mb-7 mx-16 font-light text-center">
            {t("projects.description").toString()}
          </p>
          <div className="grid mx-4 my-5 justify-items-center grid-cols-3">
            <ProjectComponent
              title={t("projects.mads.title")}
              description={t("projects.mads.description")}
              image="mads.png"
              github="hallis1221/mads-core"
              url="https://marketads.me"
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
  const scale = useTransform(scrollYProgress, [0, 0.4], [1.2, 0.5]);

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

                <div className="mb-5 flex text-center flex-row h-20 justify-center text-xl md:text-3xl">
                  <div className="pr-2"> {t("landing.a").toString()}</div>
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
                          '<div class="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-800">typescript</div>'
                        )
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString(
                          '<div class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">Next.js</div>'
                        )
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
                        .start();
                    }}
                  />
                  <div className="pl-2">
                    {t("landing.description").toString()}
                  </div>
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
    url,
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
    url?: string;
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05, borderRadius: "10%" }}
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
          <div className="justify-start absolute left-5 ">
            <div className="flex flex-row">
              {github ? <GithubLinkComponent repo={github} /> : <></>}
              {url ? <ViewLiveComponent url={url} /> : <></>}
            </div>
          </div>

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
    <a
      className="pl-3"
      href={"https://github.com/" + repo}
      target="_blank"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className=""
      >
        <motion.path
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
    </a>
  );
}

export function ViewLiveComponent({ url }: { url: string }) {
  return (
    <a className="pl-3" href={url} target="_blank" rel="noreferrer">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="24"
        height="24"
        fill="white"
        viewBox="0 0 410 410"
        xmlSpace="preserve"
        className=""
      >
        <g>
          <g>
            <path
              d="M349.957,60.043C311.237,21.323,259.756,0,205,0C150.243,0,98.762,21.323,60.043,60.043C21.323,98.762,0,150.243,0,205
			c0,54.756,21.323,106.236,60.043,144.957C98.762,388.677,150.243,410,205,410c54.756,0,106.237-21.323,144.957-60.043
			C388.677,311.236,410,259.756,410,205C410,150.243,388.677,98.762,349.957,60.043z M362.492,180.055h-79.54
			c-1.593-41.652-7.159-80.379-16.072-110.998c-1.286-4.415-2.64-8.627-4.046-12.647
			C314.781,76.697,353.565,123.478,362.492,180.055z M205,358.201c-4.181-6.247-10.438-19.219-16.121-42.676
			c-5.904-24.359-9.692-54.093-11.012-85.58h54.266c-1.32,31.487-5.106,61.219-11.012,85.578
			C215.438,338.982,209.18,351.954,205,358.201z M177.867,180.055c1.319-31.488,5.107-61.221,11.012-85.58
			c5.684-23.457,11.94-36.429,16.121-42.676c4.18,6.247,10.438,19.219,16.121,42.677c5.904,24.36,9.691,54.091,11.012,85.579
			H177.867z M147.165,56.409c-1.407,4.021-2.762,8.232-4.046,12.647c-8.914,30.619-14.479,69.346-16.072,110.998H47.506
			C56.435,123.479,95.219,76.698,147.165,56.409z M47.506,229.945h79.541c1.594,41.651,7.158,80.379,16.072,110.998
			c1.284,4.414,2.639,8.626,4.046,12.646C95.219,333.302,56.435,286.521,47.506,229.945z M262.834,353.591
			c1.406-4.021,2.76-8.23,4.046-12.646c8.913-30.618,14.479-69.347,16.072-110.998h79.54
			C353.565,286.521,314.781,333.303,262.834,353.591z"
            />
          </g>
        </g>
      </svg>
    </a>
  );
}
type TechTag = {
  title: string;
  color: string;
};
