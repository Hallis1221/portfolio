import { useTranslation } from "next-i18next";
import getProjects, { getProjectsComponentList } from "../../lib/projects";
import type { Project } from "../../lib/types/project";
import { Project as ProjectComponent } from "../project/component";

export function Projects() {
  const { t } = useTranslation("common");

  let projects: Array<JSX.Element> = getProjectsComponentList(t);
  
  return (
    <>
      <div className="h-screen" />
      <div className="h-fit mx-10 mt-96 sm:mt-0">
        <h1 className="text-center text-7xl lg:text-8xl font-semibold">
          {t("projects.title").toString()}
        </h1>
        <p className="mt-10 mb-7 mx-16 font-light text-center">
          {t("projects.description").toString()}
        </p>
        <div className="grid mx-4 my-5 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects}
        </div>
      </div>
    </>
  );
}
