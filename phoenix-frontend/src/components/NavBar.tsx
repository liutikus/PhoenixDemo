import FacebookIcon from "../assets/icons/facebook.svg?react";
import LinkedInIcon from "../assets/icons/LinkedIn.svg?react";
import InstagramIcon from "../assets/icons/Instagram.svg?react";
import DonationBtn from "./buttons/DonationBtn";
import { useTranslation } from 'react-i18next';



const NavBar = () => {

   const { t } = useTranslation();



  return (
    <nav className="px-[60px] pt-[30px] flex justify-between absolute top-0 left-0 w-full z-30">
      <div className=" flex justify-between">
        <div>
          <img
            className="h-[64px] w-[183px]"
            src="/logo/logo-white.png"
            alt="logo"
          />
        </div>
        <div className="flex py-[1.2em] px-[2em] ">
          <a
            href="#"
            className="font-bold px-[1.5em] text-[var(--color-accent)]"
          >
            {t('home')}
          </a>
          <a href="#" className="text-[white] font-bold mx-[1.5em] border-b-2 border-transparent hover:border-b-[var(--color-accent)] transition-all duration-300">
            {t('about')}
          </a>
                   <a href="#" className="text-[white] font-bold mx-[1.5em] border-b-2 border-transparent hover:border-b-[var(--color-accent)] transition-all duration-300">

            {t('projects')}
          </a>
                   <a href="#" className="text-[white] font-bold mx-[1.5em] border-b-2 border-transparent hover:border-b-[var(--color-accent)] transition-all duration-300">

            {t('news')}
          </a>
                   <a href="#" className="text-[white] font-bold mx-[1.5em] border-b-2 border-transparent hover:border-b-[var(--color-accent)] transition-all duration-300">

            {t('contact')}
          </a>
        </div>
      </div>
      <div className="flex items-center-safe">
        <div className="flex items-center">
          <a href="#">
            <div className="text-white px-[5px] hover:text-[var(--color-accent)] transition-all duration-300">
              <FacebookIcon className="w-[16px] h-[16px]  " />
            </div>
          </a>

          <a href="#">
            <div className="text-white px-[5px] hover:text-[var(--color-accent)] transition-all duration-300">
              <LinkedInIcon className="w-[16px] h-[16px]  " />
            </div>
          </a>
          <a href="#">
            <div className="text-white px-[5px] hover:text-[var(--color-accent)] transition-all duration-300">
              <InstagramIcon className="w-[16px] h-[16px] " />
            </div>
          </a>
        </div>
        <div className="px-[45px] cursor-pointer">
          <img
            className="w-[26px] h-[26px]"
            src="/icons/rom-flag.png"
            alt="Ro"
          />
        </div>
        <div>
          <DonationBtn />
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
