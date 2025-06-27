import { Trans, useTranslation } from "react-i18next"
import AboutImg1 from "/page-images/about-1.png"
import AboutImg2 from "/page-images/about-2.png"
import AboutImg3 from "/page-images/about-3.png"



const AboutCompany = () => {

    const {t} = useTranslation();

  return (
    <section className="md:py-[4em] p-[16px] md:px-[60px]">
      <div className="md:flex items-center pb-10 md:pb-[6em] ">
      <div className=" h-[200px] md:h-[480px] md:w-[48%] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0">
      
                  <div
                      className="absolute bg-center inset-0 bg-cover z-0 rounded-2xl scale-155"
                      style={{ backgroundImage: `url(${AboutImg1})` }}
                  />
                  
                  <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-95%" />
      
              </div>
        <div className="md:pl-[1.5em] md:w-[50%]">
            <h2 className="text-4xl text-[var(--color-theme)] font-bold  pb-2 md:pb-[1em]">{t("aboutTitle1")}</h2>
            <p className="text-[var(--color-text)]">
              

 <Trans
        i18nKey="aboutText1"
        components={[
          <a
            href="https://moldova.travel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-link)] underline"
          />,
          <span className="block py-4 md:py-[2em]"/>
        ]}
      />

</p>
        </div>
      </div>

<div className="flex flex-col-reverse md:flex-row items-center pb-10 md:pb-[6em]">
  <div className="w-full md:pr-[1.5em] md:w-[48%] md:mt-4 ">
    <h2 className="text-4xl text-[var(--color-theme)] font-bold pb-2 md:pb-[1em]">{t("aboutTitle2")}</h2>
    <p className="text-[var(--color-text)]">
      <Trans
        i18nKey="aboutText2"
        components={[
          <a
            href="https://moldova.travel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-link)] underline"
          />,
          <span className="block py-4 md:py-[2em]" />
        ]}
      />
    </p>
  </div>
  <div className="h-[200px] md:h-[480px] w-full md:w-[50%] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0 mb-4 md:mb-0">
    <div
      className="absolute bg-top inset-0 bg-cover z-0 rounded-2xl"
      style={{ backgroundImage: `url(${AboutImg2})` }}
    />
    <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-95%" />
  </div>
</div>



<div className="md:flex items-center md:pb-[6em]">
  <div className="h-[200px] md:h-[480px] md:w-[48%] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0">
    <div
      className="absolute bg-center inset-0 bg-cover z-0 rounded-2xl scale-90"
      style={{ backgroundImage: `url(${AboutImg3})` }}
    />
    <div className="z-0 absolute inset-0 bg-gradient-to-b from-[var(--color-theme)] from-[-11100%] to-transparent to-2220%" />
  </div>
  <div className="md:pl-[1.5em] md:w-[50%] mt-4 md:mt-0">
    <h2 className="text-4xl text-[var(--color-theme)] font-bold pb-2 md:pb-[1em]">{t("aboutTitle1")}</h2>
    <p className="text-[var(--color-text)]">
      <Trans
        i18nKey="aboutText1"
        components={[
          <a
            href="https://moldova.travel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-link)] underline"
          />,
          <span className="block py-4 md:py-[2em]" />
        ]}
      />
    </p>
  </div>
</div>

    </section>
  )
}

export default AboutCompany
