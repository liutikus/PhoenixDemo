import {useTranslation, Trans } from 'react-i18next';
import { fetchTeamMembers, fetchAmbasadors } from '../api/strapi';
import { useEffect, useState } from 'react';
import  {type Employee}  from '../types/types';
import TeamCard from './TeamCard';



const TeamSection = () => {

    const {t} = useTranslation();
    const [teamMembers, setTeamMembers] = useState<Employee[] | null>(null);
    const [ambasadors, setAmbasadors] = useState<Employee[] | null>(null);

    useEffect(()=>{
        fetchTeamMembers()
            .then(setTeamMembers)
            .catch(console.error);

        fetchAmbasadors()
            .then(setAmbasadors)
            .catch(console.error)

    },[])
    console.log(ambasadors, teamMembers)
  return (
    <section className="py-[4em] px-[60px]">
       <div className=" h-full p-[60px] py-[96px] bg-white rounded-2xl shadow-md relative top-0 left-0 w-ful flex flex-col justify-center items-center text-center">
              <div className="pb-[20px] flex z-10 justify-center ">
                  <h2 className="w-fit text-[var(--color-theme)] font-bold text-4xl ">{t("teamTitle")}</h2>
                 
              </div>
                  <p className="z-10 w-[70%] text-[var(--color-text)]"> <Trans
              i18nKey="teamText"
              components={{ highlight: <span className="font-bold" /> }}
            /></p>
            <div className="z-0 absolute rounded-2xl inset-0 bg-gradient-to-b from-[var(--color-theme)] from-[-1000%] to-transparent to-120%" />
      
              </div>
        <div className="pt-[2em]">
            <h2 className="pb-3 mb-[2em] w-fit text-[var(--color-theme)] font-bold text-2xl border-b-2 border-b-[var(--color-accent)]">{t("teamPhoenix")}</h2>
       <div className=" grid grid-cols-4 gap-4 items-stretch">
        {teamMembers ? teamMembers.map(({Image, Role, Name, id} : Employee)=>(
            <div key={id}>
                <TeamCard Image={Image} Role={Role} Name={Name} id={id}/>
            </div>
        )) : null}
            </div>
        </div>
        <div className="pt-[2em]">
            <h2 className="pb-3 mb-[2em] w-fit text-[var(--color-theme)] font-bold text-2xl border-b-2 border-b-[var(--color-accent)]">{t("ambasadorsPhoenix")}</h2>
       <div className=" grid grid-cols-4 gap-4 items-stretch">
        {ambasadors ? ambasadors.map(({Image, Role, Name, id} : Employee)=>(
            <div key={id}>
                <TeamCard Image={Image} Role={Role} Name={Name} id={id}/>
            </div>
        )) : null}
            </div>
        </div>
    </section>
  )
}

export default TeamSection
