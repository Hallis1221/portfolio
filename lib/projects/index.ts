import { TFunction } from "next-i18next";
import { Project } from "../types/project";

export default function getProjects(
    t: TFunction
): Project[] {

    return [
        {
            id: "mads",
            title: t("projects.mads.title").toString(),
            description: t("projects.mads.description"),
            image: "mads.png",
            github: "hallis1221/mads-core",
            url: "https://marketads.me",
            nextjs: true,
            typescript: true,
            recommended: true,
            isNew: true,
            gql: true
        },
        {
            id: "portfolio",
            title: t("projects.portfolio.title"),
            description: t("projects.portfolio.description"),
            url: "https://www.halvor.codes",
            github: "hallis1221/portfolio",
            image: "portfolio.png",
            nextjs: true,
            typescript: true,
            isNew: true,
        },
        {
            id: "mats",
            title: t("projects.mats.title").toString(),
            description: t("projects.mats.description").toString(),
            image: "marketools.png",
            typescript: true,
            remix: true,
            isNew: true
        },
        {
            id: "modlar",
            title: t("projects.modlar.title").toString(),
            description: t("projects.modlar.description").toString(),
            github: "hallis1221/modlar",
            flutter: true
        },
        {
            id: "ukeplaner",
            title: "Ukeplaner",
            description: "",
            github: "hallis1221/ukeplaner",
            flutter: true,
        },
        {
            id: "cmp",
            title: "Class Map Generator",
            description: "",
            github: "hallis1221/klassekartlager",
            isOld: true,
            python: true,
        }
    ]
}