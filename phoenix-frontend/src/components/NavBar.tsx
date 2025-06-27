import FacebookIcon from "../assets/icons/facebook.svg?react";
import LinkedInIcon from "../assets/icons/LinkedIn.svg?react";
import InstagramIcon from "../assets/icons/Instagram.svg?react";
import Logo from "../assets/icons/logo-white.svg?react"
import DonationBtn from "./buttons/DonationBtn";
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import FlagRoIcon from "../assets/icons/flag-ro.svg?react"
import FlagEnIcon from "../assets/icons/flag-en.svg?react"
import i18n from "../i18n";
import ArrowIcon from "../assets/icons/nav-arrow.svg?react"
import MobileMenu from "./MobileMenu";





const NavBar = () => {

   const { t } = useTranslation();
   const {lng} = useParams();
   const location = useLocation();
   const currentPath = location.pathname
    const [isMouseOver, setIsMouseOver] = useState(false)
   

   

   const navItems = [{
    name: t("home"),
    path: `/${lng}`
   },{
    name: t("about"),
    path: `/${lng}/about`
   },{
    name: t("projects"),
    path: `/${lng}/projects`
   },{
    name: t("news"),
    path: `/${lng}/news`
   },{
    name: t("contact"),
    path: `/${lng}/contact`
   },]

 const navigate = useNavigate();

const handleLanguageChange = () => {
  const newLang = lng === "ro" ? "en" : "ro";
  i18n.changeLanguage(newLang);

  const newPath = location.pathname.replace(`/${lng}`, `/${newLang}`);
  navigate(newPath);
};


  return (
    <nav>
      <div  className="px-[60px] pt-[30px] hidden md:flex justify-between absolute top-0 left-0 w-full z-30">

      
      
       <div className="flex justify-between">
        <div>
         <Logo className=" lg:w-[200px] h-[80px] cursor-pointer w-[150px]" />
        </div>
        <div className="flex items-center">
          {navItems.map(({name, path}, index)=>(
            name === t("projects") ? (
                 <div
                 key={index}
                 onMouseEnter={()=>setIsMouseOver(true)}
                 onMouseLeave={()=>setIsMouseOver(false)}
                 >
              <div className={`${currentPath === path ? "text-[var(--color-accent)]" : "text-[white]  cursor-pointer"} font-bold mx-2 lg:mx-[1.5em] border-b-2 border-transparent transition-all duration-300`}>
                <div className="relative flex items-center">{name}
                    <ArrowIcon className={`${isMouseOver ? "origin-center rotate-180": ""} text-transparent h-[10px] w-[10px] mx-1 transform transition-all ease-in-out duration-300`}/>

                </div>
            <div className={`${isMouseOver ? " opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"} absolute bg-[var(--color-bg)] text-[var(--color-theme)] rounded-md rounded-tl-none p-2`}>
             <Link 
             to={`${path}/active`}
             >
             <p className="p-1 hover:bg-[var(--color-bg-hover)] rounded font-semibold">{t("projectsActive")}</p>
             </Link>
               <Link 
             to={`${path}/finished`}
             >
             <p className="p-1 hover:bg-[var(--color-bg-hover)] rounded font-semibold">{t("projectsImplemented")}</p>
             </Link>
            </div>
                
                </div>
            </div>
            ) : (
            <div key={index}>
                <Link to={path} className={`${currentPath === path ? "text-[var(--color-accent)] cursor-default" : "text-[white] te cursor-pointer hover:border-b-[var(--color-accent)]"} font-bold lg:mx-[1em] mx-2 border-b-2 border-transparent transition-all duration-300`}>
            {name}
          </Link>
            </div>

            )
          ))}
         
        
        </div>
      </div>
      <div className="flex items-center-safe">
        <div className="hidden lg:flex items-center">
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
        <div 
        onClick={handleLanguageChange}
        className=" mx-[20px] lg:mx-[40px] cursor-pointer text-transparent">
         {lng === "ro" ? (<FlagRoIcon className="w-[24px] h-[24px]" />) : (<FlagEnIcon className="w-[24px] h-[24px]" />)}
        </div>
        <div>
          <DonationBtn isNavigate={true} amount=""/>
        </div>

      </div>
      </div>
      <div className="md:hidden ">
        <MobileMenu navItems={navItems}>
        <div className="flex items-center-safe">
        <div 
        onClick={handleLanguageChange}
        className=" mx-[20px] lg:mx-[40px] cursor-pointer text-transparent">
         {lng === "ro" ? (<FlagRoIcon className="w-[24px] h-[24px] rounded-full " />) : (<FlagEnIcon className="w-[24px] h-[24px]" />)}
        </div>
        <div>
          <DonationBtn isNavigate={true} amount=""/>
        </div>

      </div>
        </MobileMenu>
      </div>
    </nav>
  );
};

export default NavBar;
