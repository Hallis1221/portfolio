import { useTranslation } from "next-i18next";
import { Project } from "../project/component";

export function Projects() {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="h-screen" />
      <div className="h-fit mx-10">
        <h1 className="text-center text-8xl font-semibold">
          {t("projects.title").toString()}
        </h1>
        <p className="mt-10 mb-7 mx-16 font-light text-center">
          {t("projects.description").toString()}
        </p>
        <div className="grid mx-4 my-5 justify-items-center grid-cols-3">
          <Project
            title={t("projects.mads.title").toString()}
            description={t("projects.mads.description").toString()}
            image="mads.png"
            github={"hallis1221/mads-core"}
            url={"https://marketads.me"}
            nextjs
            typescript
            recommended
            isNew
            gql
          />
          <Project
            title={t("projects.portfolio.title")}
            description={t("projects.portfolio.description")}
            url="https://www.halvor.codes"
            github="hallis1221/portfolio"
            image="portfolio.png"
            nextjs
            typescript
            isNew
          />
          <Project
            title={t("projects.mats.title").toString()}
            description={t("projects.mats.description").toString()}
            image="marketools.png"
            typescript
            remix
            isNew
          />
          <Project
            title={t("projects.modlar.title").toString()}
            description={t("projects.modlar.description").toString()}
            flutter
            github="hallis1221/modlar"
          />
          <Project
            title={"Ukeplaner"}
            description={""}
            github="hallis1221/ukeplaner"
            flutter
          />
          <Project
            title={"Class Map Generator"}
            description={""}
            github="hallis1221/klassekartlager"
            isOld
            python
          />
        </div>
      </div>
    </>
  );
}
