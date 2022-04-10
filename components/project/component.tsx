import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import type { TechTag } from "../../lib/types/techtag";
import { GithubLinkComponent } from "../ghlive";
import { TagComponent } from "../tag";
import { ViewLiveComponent } from "../viewlive";
import Image from "next/image";
import { Project } from "../../lib/types/project";
import Link from "next/link";

export function Project(
  {
    id,
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
    gql,
    image,
    github,
    url,
  }: Project = {
    id: "",
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
    github: undefined,
    url: undefined,
  }
) {
  const { t } = useTranslation("common");

  let nextTag: TechTag = {
    title: "Next.js",
    color: "bg-blue-600",
    url: "https://nextjs.org/",
  };

  let flutterTag: TechTag = {
    title: "Flutter",
    color: "bg-blue-400",
    url: "https://flutter.dev",
  };

  let javascriptTag: TechTag = {
    title: "Javascript",
    color: "bg-yellow-600",
    url: "https://javascript.com",
  };

  let typescriptTag: TechTag = {
    title: "Typescript",
    color: "bg-blue-800",
    url: "https://www.typescriptlang.org/",
  };

  let remixTag: TechTag = {
    title: "Remix",
    color: "bg-pink-600",
    url: "https://remix.run",
  };

  let pythonTag: TechTag = {
    title: "Python",
    color: "bg-green-600",
    url: "https://python.org",
  };

  let gqlTag: TechTag = {
    title: "GraphQL",
    color: "bg-pink-500",
    url: "https://graphql.org",
  };

  return (
    <motion.div
      className="card w-96 my-5 bg-base-100 shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05, borderRadius: "10%" }}
    >
      <Link href={"/projects/" + id} passHref>
        <figure className="hover:cursor-pointer">
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
      </Link>

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
              {github || typeof github === "string" ? (
                <GithubLinkComponent repo={github} />
              ) : (
                <></>
              )}
              {url || typeof url === "string" ? (
                <ViewLiveComponent url={url} />
              ) : (
                <></>
              )}
            </div>
          </div>

          {nextjs ? <TagComponent techTag={nextTag} /> : <></>}

          {remix ? <TagComponent techTag={remixTag} /> : <></>}

          {gql ? <TagComponent techTag={gqlTag} /> : <></>}

          {typescript ? <TagComponent techTag={typescriptTag} /> : <></>}

          {flutter ? <TagComponent techTag={flutterTag} /> : <></>}

          {javascript ? <TagComponent techTag={javascriptTag} /> : <></>}

          {python ? <TagComponent techTag={pythonTag} /> : <></>}
        </div>
      </div>
    </motion.div>
  );
}
