import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { LoadingIntro } from "../components/intro";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Landing } from "../components/landing";
import { ContactFooter } from "../components/footer";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";

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
        <Landing />
        <Projects />
        <Skills />
        <ContactFooter />
      </motion.div>{" "}
    </>
  );
};

export default Home;
