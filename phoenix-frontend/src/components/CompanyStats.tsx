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
    
  return (<section className='py-[30px] ' ref = {ref}>
    <div className='hidden md:block'>

    
  <div className="relative w-full">
    

    <img
      src={BgStatsImg}
      alt="Stats"
      className="object-cover opacity-50 w-full h-full"
    />

   
    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-theme)] to-transparent" />

    
    <div className="absolute z-80 inset-0 flex items-end py-[60px] px-[100px] text-white">
      

      <div className="grid grid-cols-4 gap-4 w-full h-full " >
        <div className="relative items-center m-auto">
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 pb-[1em] '>
         <div className='flex items-center' >
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
  </div>

  <div className="md:hidden p-[16px]">
    <div className="grid grid-cols-2 gap-2">
     <div className=" h-[200px] w-[100%] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0 group">
     
                 <div
                     className="absolute bg-top inset-0 bg-cover z-0 rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                     style={{ backgroundImage: `url(${BgStatsImg})` }}
                 />
                 
                 <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-135%" />
     
                 <div className="absolute z-20 pb-[30px] bottom-0 left-1/2 transform -translate-x-1/2 text-center w-max">
                 <div className='flex flex-col items-center' >
                  <div className='flex items-center'>
        {inView ? ( <AnimatedNumbers
        useThousandsSeparator
        className=''
        transitions={() => ({
          type: "spring",
          duration: 2,
        })}
        animateToNumber={120}
        fontStyle={{
          fontSize: "3em",
          fontWeight: "bold",
          color: "var(--color-accent)",
        }}
      />): null}
          <p className='text-[2em] text-[var(--color-accent)] font-bold inline'>+</p>
      
    </div>

     <h2 className='font-bold text-white w-min text-2xl'>{t("projectsFinished")}</h2>
                  </div>
                 </div>
     
             </div>
            <div className=" h-[200px] w-[100%] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0 group">
     
                 <div
                     className="absolute bg-right inset-0 bg-cover z-0 rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                     style={{ backgroundImage: `url(${BgStatsImg})` }}
                 />
                 
                 <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-135%" />
     
                 <div className="absolute z-20 pb-[30px] bottom-0 left-1/2 transform -translate-x-1/2 text-center w-max">
                 <div className='flex flex-col items-center' >
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
          fontSize: "3em",
          fontWeight: "bold",
          color: "var(--color-accent)",
        }}
      />): null}
          <p className='text-[2em] text-[var(--color-accent)] font-bold inline'>+</p>
      
    </div>

     <h2 className='font-bold text-white w-min text-2xl'>{t("yearsActive")}</h2>
                  </div>
                 </div>
     
             </div>
               <div className=" h-[200px] w-[100%] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0 group">
     
                 <div
                     className="absolute bg-left inset-0 bg-cover z-0 rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                     style={{ backgroundImage: `url(${BgStatsImg})` }}
                 />
                 
                 <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-135%" />
     
                 <div className="absolute z-20 pb-[30px] bottom-0 left-1/2 transform -translate-x-1/2 text-center w-max">
                 <div className='flex flex-col items-center' >
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
          fontSize: "3em",
          fontWeight: "bold",
          color: "var(--color-accent)",
        }}
      />): null}
               <span className='text-[3em] text-[var(--color-accent)] font-bold' >k</span>


          <p className='text-[2em] text-[var(--color-accent)] font-bold inline'>+</p>
      
    </div>

     <h2 className='font-bold text-white w-min text-2xl'>{t("peopleHelped")}</h2>
                  </div>
                 </div>
     
             </div>
               <div className=" h-[200px] w-[100%] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0 group">
     
                 <div
                     className="absolute bg-bottom inset-0 bg-cover z-0 rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                     style={{ backgroundImage: `url(${BgStatsImg})` }}
                 />
                 
                 <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-135%" />
     
                 <div className="absolute z-20 pb-[30px] bottom-0 left-1/2 transform -translate-x-1/2 text-center w-max">
                 <div className='flex flex-col items-center' >
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
          fontSize: "3em",
          fontWeight: "bold",
          color: "var(--color-accent)",
        }}
      />): null}
          <p className='text-[2em] text-[var(--color-accent)] font-bold inline'>+</p>
      
    </div>

     <h2 className='font-bold text-white w-min text-2xl'>{t("partners")}</h2>
                  </div>
                 </div>
     
             </div>
             
    </div>
  </div>
</section>

      
  )
}

export default CompanyStats

