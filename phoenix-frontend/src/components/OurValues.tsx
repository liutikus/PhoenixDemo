import {useTranslation } from 'react-i18next';
import ValueCard from './ValueCard';
import BgValuesImg from '/page-images/valorile-noastre.jpg'

type Value = {
    title: string,
    textKey: string,
    icon: string
}



const OurValues = () => {

    const {t}=useTranslation();

    const values: Value[] =[{
            title: t("valueTitle_1"),
            textKey: "valueText_1",
            icon:"/icons/value-icon-1.png",
        },{
            title: t("valueTitle_2"),
            textKey: "valueText_2",
            icon:"/icons/value-icon-2.png",
        },{
            title: t("valueTitle_3"),
            textKey: "valueText_3",
            icon:"/icons/value-icon-3.png",
        },{
            title: t("valueTitle_4"),
            textKey: "valueText_4",
            icon:"/icons/value-icon-4.png",
        },{
            title: t("valueTitle_5"),
            textKey: "valueText_5",
            icon:"/icons/value-icon-5.png",
        },{
            title: t("valueTitle_6"),
            textKey: "valueText_6",
            icon:"/icons/value-icon-6.png",
        },]


  

  return (
    <section className=" px-[60px]">
      <div className="relative top-0 left-0 w-full">
        <img src={BgValuesImg} alt="Valorile Noastre" className="object-cover"/>
      <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] to-transparent" />
      
      <div className="absolute z-80 flex bottom-0 py-[60px] px-[100px] flex-col items-start  text-white ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4leading-[1.5]">{t("ourValuesTitle")}</h1>
      </div>

      </div>
       <div className="pt-[2em] grid grid-cols-2 gap-6 items-stretch">
    {values.map(({textKey, title, icon} : Value, index)=>(
        <div key={index}> 
        <ValueCard textKey = {textKey} title = {title} icon = {icon}/>
        </div>
        ))}
      </div>
    </section>
  )
}

export default OurValues
