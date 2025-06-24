import { useTranslation } from "react-i18next"
import BgBeneficiaresImg from "/page-images/benficiarii-about.png"
import BeneficiariesCard from "./BeneficiariesCard";
import BeneCardImg1 from "/page-images/bene-about1.png"
import BeneCardImg2 from "/page-images/bene-about2.png"
import BeneCardImg3 from "/page-images/bene-about3.png"
import BeneCardImg4 from "/page-images/bene-about4.png"
import BeneCardImg5 from "/page-images/bene-about5.png"


const OurBeneficiares = () => {

    const {t} = useTranslation();

    const beneficiaries = [{
        title: t("beneTitle1"),
        text: t("beneText1"),
        img: BeneCardImg1
    },{
        title: t("beneTitle2"),
        text: t("beneText2"),
        img: BeneCardImg2
    },{
        title: t("beneTitle3"),
        text: t("beneText3"),
        img: BeneCardImg3
    },{
        title: t("beneTitle4"),
        text: t("beneText4"),
        img: BeneCardImg4
    },{
        title: t("beneTitle5"),
        text: t("beneText5"),
        img: BeneCardImg5
    },]

  return (
    <section className="px-[60px]">
       <div className="relative top-0 left-0 w-full">
        <img src={BgBeneficiaresImg} alt="Valorile Noastre" className="object-cover"/>
      <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] to-transparent" />
      
      <div className="absolute z-80 flex bottom-0 py-[60px] px-[100px] flex-col items-start  text-white ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4leading-[1.5]">{t("ourBeneficiaries")}</h1>
      </div>

      </div>

      <div className="py-[1.5em]">
        {beneficiaries.map(({title,text,img}, index)=>(
            <div key={index}>
                
        <BeneficiariesCard text={text} title={title} img={img} i={index}/>
            </div>
        ))}
      </div>
    </section>
  )
}

export default OurBeneficiares
