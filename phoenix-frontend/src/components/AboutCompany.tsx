import { Trans, useTranslation } from "react-i18next"
import AboutImg1 from "/page-images/about-1.png"
import AboutImg2 from "/page-images/about-2.png"
import AboutImg3 from "/page-images/about-3.png"



const AboutCompany = () => {

    const {t} = useTranslation();

  return (
    <section className="py-[4em] px-[60px]">
      <div className="flex items-center pb-[6em]">
      <div className=" h-[480px] w-[48%] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0">
      
                  <div
                      className="absolute bg-center inset-0 bg-cover z-0 rounded-2xl scale-155"
                      style={{ backgroundImage: `url(${AboutImg1})` }}
                  />
                  
                  <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-95%" />
      
              </div>
        <div className="pl-[1.5em] w-[50%]">
            <h2 className="text-4xl text-[var(--color-theme)] font-bold pb-[1em]">{t("aboutTitle1")}</h2>
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
          <span className="block py-[2em]"/>
        ]}
      />

</p>
        </div>
      </div>
      <div className="flex items-center pb-[6em] ">
         <div className="pr-[1.5em] w-[48%]">
            <h2 className="text-4xl text-[var(--color-theme)] font-bold pb-[1em]">{t("aboutTitle2")}</h2>
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
          <span className="block py-[2em]"/>
        ]}
      />

</p>
        </div>
      <div className=" h-[480px] w-[50%] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0">
      
                  <div
                      className="absolute bg-top inset-0 bg-cover z-0 rounded-2xl "
                      style={{ backgroundImage: `url(${AboutImg2})` }}
                  />
                  
                  <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-95%" />
      
              </div>
       
      </div>
      <div className="flex items-center pb-[6em]">
      <div className=" h-[480px] w-[48%] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0">
      
                  <div
                      className="absolute bg-center inset-0 bg-cover z-0 rounded-2xl scale-90 "
                      style={{ backgroundImage: `url(${AboutImg3})` }}
                  />
                  <div className="z-0 absolute inset-0 bg-gradient-to-b from-[var(--color-theme)] from-[-11100%] to-transparent to-2220%" />
                  
      
              </div>
        <div className="pl-[1.5em] w-[50%]">
            <h2 className="text-4xl text-[var(--color-theme)] font-bold pb-[1em]">{t("aboutTitle1")}</h2>
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
          <span className="block py-[2em]"/>
        ]}
      />

</p>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
