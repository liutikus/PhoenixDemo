import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import type { Sponsor } from "../types/types";
import { BaseURL, fetchSponsors } from "../api/strapi";


const Sponsors = () => {

    const {t} = useTranslation();
    const [sponsors, setSponsors] = useState<Sponsor[] | null>(null);

    useEffect(()=>{
        fetchSponsors()
            .then(setSponsors)
            .catch(console.error)
    },[]);

  return (
    <section className="p-[16px] md:py-[30px] md:px-[60px]">
       <div className=" h-full p-[16px] md:p-[60px] md:py-[96px] bg-white rounded-2xl shadow-sm relative top-0 left-0 w-ful flex flex-col justify-center items-center text-center">
                    <div className="pb-[20px] flex z-10 justify-center ">
                        <h2 className="w-fit text-[var(--color-theme)] font-bold text-4xl ">{t("sponsorsTitle")}</h2>
                       
                    </div>
                        <p className="z-10 md:w-[70%] text-[var(--color-text)]">{t("sponsorsSubTitle")}</p>
                  <div className="z-0 absolute rounded-2xl inset-0 bg-gradient-to-b from-[var(--color-theme)] from-[-1000%] to-transparent to-120%" />
            
                    </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-[2em]">
        {sponsors?.map(({CompanyName, Logo}, index)=>(
            <div key={index}><img className=" mt-[2em]" src={BaseURL + Logo.url} alt={CompanyName} /></div>

        ))}
        </div>
    </section>
  )
}

export default Sponsors
