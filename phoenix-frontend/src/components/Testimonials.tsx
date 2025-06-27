import { useTranslation } from 'react-i18next';
import TestiCard from './TestiCard';
import TestiProfileImg1 from '/page-images/testi-profile-1.png';
import TestiProfileImg2 from '/page-images/testi-profile-2.png';
import TestiProfileImg3 from '/page-images/testi-profile-3.png';
import { useRef, useState } from 'react';

const Testimonials = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

const testi = [
  {
    name: t("testiName1"),
    job: t("testiJob1"),
    text: t("testiText1"),
    profileImg: TestiProfileImg1,
  },
  {
    name: t("testiName2"),
    job: t("testiJob2"),
    text: t("testiText2"),
    profileImg: TestiProfileImg2,
  },
  {
    name: t("testiName3"),
    job: t("testiJob3"),
    text: t("testiText3"),
    profileImg: TestiProfileImg3,
  },
  {
    name: t("testiName3"),
    job: t("testiJob3"),
    text: t("testiText3"),
    profileImg: TestiProfileImg3,
  },
  {
    name: t("testiName3"),
    job: t("testiJob3"),
    text: t("testiText3"),
    profileImg: TestiProfileImg3,
  },
];


  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.scrollWidth / testi.length;
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="md:py-[60px] md:px-[60px] px-[16px]">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-[var(--color-theme)] font-bold">{t("testiTitle")}</h1>
        <p className="md:w-[50%] text-center pt-[1em]">{t("testiSubTitle")}</p>
      </div>

      <div
        ref={containerRef}
        className="flex md:overflow-x-hidden overflow-x-auto gap-2 md:gap-5 scroll-smooth snap-x snap-mandatory pt-[3em] pb-[2em] hide-scrollbar"
      >
        {testi.map(({ name, job, text, profileImg }, index) => (
          <div key={index} className="snap-start shrink-0 w-[90%] md:w-[52%] ">
            <TestiCard name={name} job={job} text={text} profileImg={profileImg} />
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-1 mt-[2em]">
        {testi.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-[10px] w-[10px] rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'bg-[#D9D9D9]'
                : 'border-solid border-1 border-[#D9D9D9]'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
