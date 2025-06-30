import MoreBtn from "./buttons/MoreBtn"
import { useTranslation } from 'react-i18next';
import HeroCards from "./HeroCards";


const HeroSection = () => {

  const {t} = useTranslation()

  return (
 <section>
  <div className="relative w-full pb-[130px] h-auto md:h-screen overflow-visible px-[16px] md:px-[60px] ">
    <video
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/videos/cover-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-theme)] to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-theme)] to-transparent z-10" />
    <div className="relative z-20 flex flex-col md:justify-center md:items-start items-center pt-8 h-full text-white">
      <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold mb-4 md:w-[70%] text-center md:text-start leading-[1.5]">
        {t("heroTitleWhite")} <span className="text-[var(--color-accent)]">{t("heroTitleAccent")}</span>
      </h1>
      <MoreBtn />
    </div>
  </div>

 <HeroCards/>
</section>
  )
}

export default HeroSection
