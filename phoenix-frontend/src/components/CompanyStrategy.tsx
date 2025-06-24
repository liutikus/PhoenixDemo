import { Trans, useTranslation } from "react-i18next"

const CompanyStrategy = () => {

    const {t} = useTranslation();

  return (
    <section>
       <div className=" h-full p-[60px] py-[96px] bg-white relative top-0 left-0 w-ful flex flex-col justify-center items-center text-center">
                    <div className="pb-[20px] z-10 ">
                        <h2 className="w-fit text-[var(--color-theme)] font-bold text-4xl ">{t("strategyTitle")}</h2>   
                    </div>
                        <p className="z-10 w-[70%] text-[var(--color-text)]">{t("strategySubTitle")}</p>
                  <div className="z-0 absolute inset-0 bg-gradient-to-b from-[var(--color-theme)] from-[-11100%] to-transparent to-2220%" />
            <div className="grid w-full grid-cols-3 gap-4 pt-[3em]">
                     <div className="bg-white z-50 p-[60px] rounded-2xl" >
                        <div className="flex justify-between text-start">
                        <h3 className="text-xl text-[var(--color-theme)] font-bold w-min">{t("strategyCardTitle1")}</h3>
                        <h2 className="text-5xl font-bold text-[var(--color-accent)]">1</h2>
                        </div>
                        <div className="text-start">
                            <p><Trans
                                    i18nKey="strategyCardText1"
                                    components={[
                                      <span className="block py-[2em]"/>
                                    ]}
                                  /></p>
                        </div>
                    </div>
                     <div className="bg-white z-50 p-[60px] rounded-2xl" >
                        <div className="flex justify-between text-start">
                        <h3 className="text-xl text-[var(--color-theme)] font-bold">{t("strategyCardTitle2")}</h3>
                        <h2 className="text-5xl font-bold text-[var(--color-accent)]">2</h2>
                        </div>
                        <div className="text-start">
                            <p><Trans
                                    i18nKey="strategyCardText2"
                                    components={[
                                      <span className="block py-[2em]"/>
                                    ]}
                                  /></p>
                        </div>
                    </div>
                     <div className="bg-white z-50 p-[60px] rounded-2xl" >
                        <div className="flex justify-between text-start">
                        <h3 className="text-xl text-[var(--color-theme)] font-bold w-min">{t("strategyCardTitle3")}</h3>
                        <h2 className="text-5xl font-bold text-[var(--color-accent)]">3</h2>
                        </div>
                        <div className="text-start">
                            <p><Trans
                                    i18nKey="strategyCardText3"
                                    components={[
                                      <span className="block py-[2em]"/>
                                    ]}
                                  /></p>
                        </div>
                    </div>
           

            </div>
                    </div>
    </section>
  )
}

export default CompanyStrategy
