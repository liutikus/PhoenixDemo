import { useTranslation, Trans } from 'react-i18next';
import { fetchTeamMembers, fetchAmbasadors } from '../api/strapi';
import { useEffect, useState } from 'react';
import { type Employee } from '../types/types';
import TeamCard from './TeamCard';

const TeamSection = () => {
  const { t } = useTranslation();
  const [teamMembers, setTeamMembers] = useState<Employee[] | null>(null);
  const [ambasadors, setAmbasadors] = useState<Employee[] | null>(null);

  useEffect(() => {
    fetchTeamMembers()
      .then(setTeamMembers)
      .catch(console.error);
    fetchAmbasadors()
      .then(setAmbasadors)
      .catch(console.error);
  }, []);

  return (
    <section className="md:py-[4em] px-[16px] md:px-[60px] ">
      <div className="h-full p-[30px] md:p-[60px] md:py-[96px] bg-white rounded-2xl shadow-md relative w-full flex flex-col justify-center items-center text-center">
        <div className="pb-[20px] flex z-10 justify-center">
          <h2 className="w-fit text-[var(--color-theme)] font-bold text-4xl">{t("teamTitle")}</h2>
        </div>
        <p className="z-10 md:w-[70%] text-[var(--color-text)]">
          <Trans i18nKey="teamText" components={{ highlight: <span className="font-bold" /> }} />
        </p>
        <div className="z-0 absolute rounded-2xl inset-0 bg-gradient-to-b from-[var(--color-theme)] from-[-1000%] to-transparent to-120%" />
      </div>

      <div className="pt-[2em]">
        <h2 className="pb-2 mb-4 md:mb-[2em] w-fit text-[var(--color-theme)] font-bold text-2xl border-b-2 border-b-[var(--color-accent)]">{t("teamPhoenix")}</h2>
        <div className="flex overflow-x-auto md:overflow-x-hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
          {teamMembers?.map(({ Image, Role, Name, id }: Employee) => (
            <div key={id} className="min-w-[250px] flex-shrink-0 md:min-w-0">
              <TeamCard Image={Image} Role={Role} Name={Name} id={id} />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-[2em]">
        <h2 className="pb-2 mb-4 md:mb-[2em] w-fit text-[var(--color-theme)] font-bold text-2xl border-b-2 border-b-[var(--color-accent)]">{t("ambasadorsPhoenix")}</h2>
               <div className="flex overflow-x-auto md:overflow-x-hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">

          {ambasadors?.map(({ Image, Role, Name, id }: Employee) => (
            <div key={id} className="min-w-[250px] flex-shrink-0 md:min-w-0">
              <TeamCard Image={Image} Role={Role} Name={Name} id={id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
