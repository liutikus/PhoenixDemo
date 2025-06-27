import { useTranslation } from 'react-i18next';

const HeroCards = () => {

    const {t} = useTranslation();

  return (
   <div className="relative w-full flex justify-center -mt-30 md:-mt-40 z-30 pointer-events-auto">
      <div className="grid gap-4 md:grid-cols-2 p-[16px] md:px-[60px]">
         <div className="p-[30px] md:p-[60px] bg-white rounded-2xl shadow-xl">
            <h2 className="pb-3 w-fit text-[var(--color-theme)] font-bold text-xl md:text-2xl border-b-2 border-b-[var(--color-accent)]">{t("missionTitle")}</h2>
            <p className="text-2xl md:text-3xl font-bold text-[var(--color-text)] pt-6">{t("missionText")}</p>
         </div>
        <div className=" p-[30px] md:p-[60px] bg-white rounded-2xl shadow-xl">
            <h2 className="pb-3 w-fit text-[var(--color-theme)] font-bold text-xl md:text-2xl border-b-2 border-b-[var(--color-accent)]">{t("visionTitle")}</h2>
            <p className="text-2xl md:text-3xl font-bold text-[var(--color-text)] pt-6">{t("visionText")}</p>
         </div>
      </div>
  </div>
  )
}

export default HeroCards
