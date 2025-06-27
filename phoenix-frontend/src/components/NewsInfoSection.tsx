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
    <section className="p-[16px] md:px-[60px] md:pb-[4em] relative bottom-30 z-50">
      <div className="bg-white shadow-xl w-full h-full rounded-2xl p-[16px] md:p-[60px]">
        <div className="flex justify-between pb-6 md:pb-[2em]">
            <div className="flex items-center text-[var(--color-text)]">
                <p>{t("home")}</p>
                <span className="px-1 text-transparent"><ArrowIcon className="h-[10px]"/></span>
                <p>{t("news")}</p>
            </div>
            <div>
                <p>{formatedDate}</p>
            </div>
        </div>

        <div className="md:pb-[6em] pb-4">
            <h2 className="md:text-6xl text-3xl font-bold text-[var(--color-theme)]">{newsDetails?.title}</h2>
        </div>

        <div>
            <div className="relative">
        <div className="relative w-full h-[150px] md:h-[500px] rounded-2xl overflow-hidden ">
            
       <img src={BaseURL + newsDetails?.mainImage.url} alt="About"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-theme)] to-transparent" />
        
        </div>
        
    </div >
        </div>
        <div className="md:py-[2em] py-4">
            <p>{newsDetails?.descriptions[0].description}</p>
        </div>
        <ProjectGallery images = {newsDetails?.images}/>

        <div className="md:py-[2em]">
            {newsDetails?.descriptions.map(({description},index)=>(
                <p key={index} className="py-[0.5em]">{description}</p>
            ))}

        </div>

      </div>
    </section>
  )
}

export default NewsInfoSection
