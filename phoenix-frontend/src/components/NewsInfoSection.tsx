import { useTranslation } from "react-i18next"
import type { News } from "../types/types"
import ArrowIcon from "../assets/icons/small-arrow.svg?react"
import { BaseURL } from "../api/strapi"
import ProjectGallery from "./ProjectGallery"



type NewsInfoSectionProps = {
    newsDetails: News | null
}

const NewsInfoSection = ({newsDetails} : NewsInfoSectionProps) => {

    const {t} = useTranslation();
    const date = newsDetails? newsDetails?.publishDate : "";
    const [year, month, day] = date.split("-");
    const formatedDate = `${day}.${month}.${year}`;


    return (
    <section className="px-[60px] pb-[4em] relative bottom-30 z-50">
      <div className="bg-white shadow-xl w-full h-full rounded-2xl p-[60px]">
        <div className="flex justify-between pb-[2em]">
            <div className="flex items-center text-[var(--color-text)]">
                <p>{t("home")}</p>
                <span className="px-1 text-transparent"><ArrowIcon className="h-[10px]"/></span>
                <p>{t("news")}</p>
            </div>
            <div>
                <p>{formatedDate}</p>
            </div>
        </div>

        <div className="pb-[6em]">
            <h2 className="text-6xl font-bold text-[var(--color-theme)]">{newsDetails?.title}</h2>
        </div>

        <div>
            <div className="relative">
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden px-[60px]">
            
       <img src={BaseURL + newsDetails?.mainImage.url} alt="About"
        className="absolute bg-top blur-[2px] top-0 left-0 w-full h-full object-cover"
      />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-theme)] to-transparent" />
        
        </div>
        
    </div >
        </div>
        <div className="py-[2em]">
            <p>{newsDetails?.descriptions[0].description}</p>
        </div>
        <ProjectGallery images = {newsDetails?.images}/>

        <div className="py-[2em]">
            {newsDetails?.descriptions.map(({description},index)=>(
                <p key={index} className="py-[0.5em]">{description}</p>
            ))}

        </div>

      </div>
    </section>
  )
}

export default NewsInfoSection
