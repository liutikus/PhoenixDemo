import { useTranslation } from "react-i18next"
import ArrowIcon from "/icons/arrow-icon.png"

const HeroAbout = ({pageName, bgImg} : {pageName: string, bgImg:string}) => {

    const {t} = useTranslation();

  return (
     <section>
        <div className="relative w-full h-[400px] overflow-hidden px-[60px]">
            
       <img src={bgImg} alt="About"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-theme)] to-transparent" />
      <div className="relative z-20 flex justify-center items-center h-full text-white ">
        <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4  leading-[1.5]">{pageName}</h1>
        <div className="uppercase flex justify-center items-center" >
            <a className="text-[var(--color-accent)]" href="/">{t("home")}</a>
            <img src={ArrowIcon} alt=">" className="h-auto px-[5px] w-auto object-contain "/>
            <h2>{pageName}</h2>
            </div>
        </div>
           
      </div>
        </div>
    </section >
  )
}

export default HeroAbout
