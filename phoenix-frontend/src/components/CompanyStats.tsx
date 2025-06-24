import {useTranslation } from 'react-i18next';
import AnimatedNumbers from "react-animated-numbers";
import { useInView } from "react-intersection-observer";
import BgStatsImg from '/page-images/company-stats-bg.png';

const CompanyStats = () => {

  const {t} = useTranslation();

   const {ref, inView } = useInView({
    triggerOnce: true,   
    threshold: 0.5       
  });
    
  return (<section className='py-[30px]'>
  <div className="relative w-full">
    

    <img
      src={BgStatsImg}
      alt="Stats"
      className="object-cover opacity-50 w-full h-full"
    />

   
    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-theme)] to-transparent" />

    
    <div className="absolute z-80 inset-0 flex items-end py-[60px] px-[100px] text-white">
      

      <div className="grid grid-cols-4 gap-4 w-full h-full">
        <div className="relative items-center m-auto">
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 pb-[1em] '>
         <div className='flex items-center' ref = {ref}>
        {inView ? ( <AnimatedNumbers
        useThousandsSeparator
        className=''
        transitions={() => ({
          type: "spring",
          duration: 2,
        })}
        animateToNumber={120}
        fontStyle={{
          fontSize: "4em",
          fontWeight: "bold",
          color: "var(--color-accent)",
        }}
      />): null}
          <p className='text-[3em] text-[var(--color-accent)] font-bold'>+</p>
      
    </div>
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 pt-[1em] text-center'>
          <h2 className='font-bold text-3xl'>{t("projectsFinished")}</h2>
        </div>
        </div>
        <div className="relative items-center m-auto">
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 pb-[1em] '>
         <div className='flex items-center'>
        {inView ? ( <AnimatedNumbers
        useThousandsSeparator
        className=''
        transitions={() => ({
          type: "spring",
          duration: 2,
        })}
        animateToNumber={1}
        fontStyle={{
          fontSize: "4em",
          fontWeight: "bold",
          color: "var(--color-accent)",
        }}
      />): null}
      
    </div>
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 pt-[1em] text-center'>
          <h2 className='font-bold text-3xl'>{t("yearsActive")}</h2>
        </div>
        </div>
        <div className="relative items-center m-auto">
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 pb-[1em] '>
         <div className='flex items-center'>
        {inView ? ( <AnimatedNumbers
        useThousandsSeparator
        className=''
        transitions={() => ({
          type: "spring",
          duration: 2,
        })}
        animateToNumber={1}
        fontStyle={{
          fontSize: "4em",
          fontWeight: "bold",
          color: "var(--color-accent)",
        }}
      />): null}
      <span className='text-[4em] text-[var(--color-accent)] font-bold' >k</span>
          <p className='text-[3em] text-[var(--color-accent)] font-bold'>+</p>
      
    </div>
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 pt-[1em] text-center'>
          <h2 className='font-bold text-3xl'>{t("peopleHelped")}</h2>
        </div>
        </div>
        <div className="relative items-center m-auto">
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 pb-[1em] '>
         <div className='flex items-center'>
        {inView ? ( <AnimatedNumbers
        useThousandsSeparator
        className=''
        transitions={() => ({
          type: "spring",
          duration: 2,
        })}
        animateToNumber={4}
        fontStyle={{
          fontSize: "4em",
          fontWeight: "bold",
          color: "var(--color-accent)",
        }}
      />): null}
          <p className='text-[3em] text-[var(--color-accent)] font-bold'>+</p>
      
    </div>
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 pt-[1em] text-center'>
          <h2 className='font-bold text-3xl'>{t("partners")}</h2>
        </div>
        </div>
      </div>

    </div>

  </div>
</section>

      
  )
}

export default CompanyStats

