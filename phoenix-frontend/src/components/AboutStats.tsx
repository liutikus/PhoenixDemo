import { useTranslation } from "react-i18next"
import ProjectIcon from "/icons/project-icon.png"
import YearsIcon from "/icons/years-icon.png"
import PeopleIcon from "/icons/people-icon.png"
import PartnersIcon from "/icons/partners-icon.png"


const AboutStats = () => {

    const {t} = useTranslation();

  return (
    <section>
       <div className=" h-full p-[60px] py-[96px] bg-white relative top-0 left-0 w-ful flex flex-col justify-center items-center text-center">
                    <div className="pb-[20px] z-10 ">
                        <h2 className="w-fit text-[var(--color-theme)] font-bold text-4xl ">{t("aboutStatsTitle")}</h2>   
                    </div>
                        <p className="z-10 w-[70%] text-[var(--color-text)]">{t("aboutStatsSubTitle")}</p>
                  <div className="z-0 absolute inset-0 bg-gradient-to-b from-[var(--color-theme)] from-[-11100%] to-transparent to-2220%" />
            <div className="grid w-full grid-cols-4 gap-4 pt-[3em]">
               
                    <div className=" flex justify-center flex-col items-center">
                        <img className="h-[75px] w-[75px]" src={ProjectIcon} alt="Projects" />
                        <h2 className="text-5xl font-bold text-[var(--color-theme)]">119+</h2>
                        <h3 className="text-4xl font-bold w-min">{t("projectsFinished")}</h3>
                    </div>
                     <div className=" flex justify-center flex-col items-center">
                        <img className="h-[75px] w-[75px]" src={YearsIcon} alt="Projects" />
                        <h2 className="text-5xl font-bold text-[var(--color-theme)]">1</h2>
                        <h3 className="text-4xl font-bold w-min">{t("yearsActive")}</h3>
                    </div>
                     <div className=" flex justify-center flex-col items-center">
                        <img className="h-[75px] w-[75px]" src={PeopleIcon} alt="Projects" />
                        <h2 className="text-5xl font-bold text-[var(--color-theme)]">1k+</h2>
                        <h3 className="text-4xl font-bold w-min">{t("peopleHelped")}</h3>
                    </div>
                     <div className=" flex justify-center flex-col items-center">
                        <img className="h-[75px] w-[75px]" src={PartnersIcon} alt="Projects" />
                        <h2 className="text-5xl font-bold text-[var(--color-theme)]">4+</h2>
                        <h3 className="text-4xl font-bold w-min">{t("partners")}</h3>
                    </div>
           

            </div>
                    </div>
    </section>
  )
}

export default AboutStats
