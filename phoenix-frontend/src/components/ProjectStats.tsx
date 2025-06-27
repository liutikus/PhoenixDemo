import PartnersIcon from "../assets/icons/partners-icon.svg?react"
import CalendarIcon from "../assets/icons/calendar-icon.svg?react"
import LocationIcon from "../assets/icons/location-icon.svg?react"
import { useTranslation } from "react-i18next"


type ProjectStatsProps = {
  location: string | undefined,
  finishDate: string | undefined,
  startDate: string | undefined,
  partners: [{
    partnerName:string
  }] |undefined
  
};

const ProjectStats = ({location, partners, finishDate, startDate}:ProjectStatsProps) => {

    const {t} = useTranslation(); 
    const startYear = startDate ? new Date(startDate).getFullYear() : "";
    const finishYear = finishDate ? new Date(finishDate).getFullYear() : "";

    

  return (
    <section className="md:px-[60px] md:pb-[4em] p-[16px]">
       <div className=" h-full p-[16px] md:p-[60px] bg-white relative top-0 left-0 w-ful flex flex-col ">
                  <div className="z-0 absolute inset-0 rounded-2xl bg-gradient-to-b from-[var(--color-theme)] from-[-11100%] to-transparent to-2220%" />
            <div className="grid w-full md:grid-cols-3 gap-4">
               
                    <div className="flex md:justify-start ">
                        <div className="pt-2 px-2"><PartnersIcon className="h-[24px] w-[24px]"/></div>
                       <div className="">
                        <h3 className="font-bold  text-[var(--color-theme)]">{t("partnersTitle")}</h3>
                        {partners?.map(({partnerName})=>(
                            <p>{partnerName}</p>
                        ))}
                       </div>
                    </div>
                       <div className="flex md:justify-center text-start">
                        <div className="pt-2 px-2"><CalendarIcon className="h-[24px] w-[24px]"/></div>
                       <div className="">
                        <h3 className="font-bold  text-[var(--color-theme)]">{t("yearsTitle")}</h3>
                        <p><span>{startYear}</span><span>{finishYear === "" ? "" : ` - ${finishYear}`}</span></p>
                       </div>
                    </div>
                       <div className="flex md:justify-end text-start">
                        <div className="pt-2 px-2 text-[var(--color-theme)]"><LocationIcon className="h-[24px] w-[24px]"/></div>
                       <div className="">
                        <h3 className="font-bold  text-[var(--color-theme)]">{t("locationTitle")}</h3>
                        <p>{location}</p>
                       </div>
                    </div>
            </div>
                    </div>
    </section>
  )
}

export default ProjectStats
