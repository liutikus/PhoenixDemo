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
    <section className="md:px-[60px] px-[16px] relative bottom-30 z-50">
        <div className="bg-white w-full h-full rounded-2xl p-[16px] md:p-[60px] shadow-md">
            <div className="flex items-center uppercase">
                <a href={`/${lng}`}>{t("home")}</a>
                <span className="px-1 text-transparent"><ArrowIcon className="h-[10px]"/></span>
                <p>{t(isActive ? "projectsActive" : "projectsImplemented")}</p>
            </div>
            <div className="md:pt-[2em] md:pb-[3em] pt-4 pb-2">
                <h1 className="md:text-[3.5em] text-2xl text-[var(--color-theme)] font-bold">{title} <span className="lowercase text-[var(--color-active)]">({t(isActive ? "active" : "finished")})</span></h1>
            </div>
            <div className="pb-1em">
                <h2 className="md:text-[2em] text-xl py-[0.5em] text-[var(--color-theme)] font-bold">{t("purposeTitle")}</h2>
                <p className="md:w-[90%]">{projectPurpose}</p>
            </div>
            <div className="md:py-[1.5em] md:pb-[4em] pt-4 pb-2">
                <h2 className="md:text-[2em] text-xl py-[0.5em] text-[var(--color-theme)] font-bold">{t("resultsTitle")}</h2>
                <ul className="list-disc px-[5px]">
                {results?.map(({description}) =>(
                    <li className="md:w-[90%] py-2 md:py-[0.75em]">{description}</li>
                ))}

                </ul>

            </div>

            <DonationBtn isNavigate={true} amount=""/>
        </div>
      
    </section>
  )
}

export default ProjectInfo
