import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import { divVariants, textVariants } from "./framer";

import { Props } from "./props";

export const LoadingIntro: FC<Props> = ({ visible }: Props) => {
  const {t} = useTranslation("common");

  return (
    <motion.div
      initial="initial"
      animate={visible ? "initial" : "invisible"}
      exit="initial"
      variants={divVariants}
      className="absolute flex items-center justify-center w-full h-full bg-black-50"
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 mx-auto max-w-screen-md">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="visible"
          transition={{
            delay: 3.0,
            duration: 1.2,
          }}
        ></motion.div>
        <motion.p
          className="mt-4 mb-2 text-xl font-medium leading-none md:text-2xl dark:text-white-900 text-black-900 md:my-0"
          variants={textVariants}
          initial="initial"
          animate="visible"
          transition={{
            delay: 1.0,
            duration: 1.2,
          }}
        >
          {t("citation.content").toString()}
        </motion.p>
        <motion.p
          className="text-base md:text-right dark:text-white-700 text-black-700"
          initial="initial"
          animate="visible"
          variants={textVariants}
          transition={{
            delay: 2.0,
            duration: 1.2,
          }}
        >
          {t("citation.author").toString()}
        </motion.p>
      </div>
    </motion.div>
  );
};
