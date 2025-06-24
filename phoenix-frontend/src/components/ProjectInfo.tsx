import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom"
import ArrowIcon from "../assets/icons/small-arrow.svg?react"
import DonationBtn from "./buttons/DonationBtn";


type ProjectInfoProps = {
  title: string | undefined;
  projectPurpose: string | undefined;
  isActive: boolean | undefined;
  results: [{
    description: string 
  }] | undefined
  
};

const ProjectInfo = ({isActive, title, projectPurpose, results}: ProjectInfoProps) => {

    const {lng} = useParams();
    const {t} = useTranslation();

  return (
    <section className="px-[60px] relative bottom-30 z-50">
        <div className="bg-white w-full h-full rounded-2xl p-[60px] shadow-md">
            <div className="flex items-center uppercase">
                <a href={`/${lng}`}>{t("home")}</a>
                <span className="px-1 text-transparent"><ArrowIcon className="h-[10px]"/></span>
                <p>{t(isActive ? "projectsActive" : "projectsImplemented")}</p>
            </div>
            <div className="pt-[2em] pb-[3em]">
                <h1 className="text-[3.5em] text-[var(--color-theme)] font-bold">{title} <span className="lowercase text-[var(--color-active)]">({t(isActive ? "active" : "finished")})</span></h1>
            </div>
            <div className="pb-1em">
                <h2 className="text-[2em] py-[0.5em] text-[var(--color-theme)] font-bold">{t("purposeTitle")}</h2>
                <p className="w-[90%]">{projectPurpose}</p>
            </div>
            <div className="py-[1.5em] pb-[4em]">
                <h2 className="text-[2em] py-[0.5em] text-[var(--color-theme)] font-bold">{t("resultsTitle")}</h2>
                <ul className="list-disc">
                {results?.map(({description}) =>(
                    <li className="w-[90%] py-[0.75em]">{description}</li>
                ))}

                </ul>

            </div>

            <DonationBtn/>
        </div>
      
    </section>
  )
}

export default ProjectInfo
