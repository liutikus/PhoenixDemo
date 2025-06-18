import { useTranslation } from 'react-i18next';

const HeroCards = () => {

    const {t} = useTranslation();

  return (
    <section className=" relative z-100 w-full top-[-130px] overflow-hidden">
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] p-[60px]">
         <div className=" p-[60px] bg-white rounded-2xl shadow-xl">
            <h2 className="pb-3 w-fit text-[var(--color-theme)] font-bold text-2xl border-b-2 border-b-[var(--color-accent)]">{t("missionTitle")}</h2>
            <p className="text-3xl font-bold text-[var(--color-text)] pt-6">{t("missionText")}</p>
         </div>
        <div className=" p-[60px] bg-white rounded-2xl shadow-xl">
            <h2 className="pb-3 w-fit text-[var(--color-theme)] font-bold text-2xl border-b-2 border-b-[var(--color-accent)]">{t("visionTitle")}</h2>
            <p className="text-3xl font-bold text-[var(--color-text)] pt-6">{t("visionText")}</p>
         </div>
      </div>
    </section>
  )
}

export default HeroCards
