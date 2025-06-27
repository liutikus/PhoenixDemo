import { useEffect, useState, type ReactNode } from "react"
import LogoColor from "../assets/icons/logo-color.svg?react"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


type MobileMenuProps = {
    children:ReactNode,
    navItems:{
        name:string,
        path:string
    }[];
}

const MobileMenu = ({children, navItems} :MobileMenuProps) => {
    
    const {t} = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isMobileMenuOpen]);
  return (
    <div className="">
    <div className="flex justify-between items-center bg-white p-4">
        <div className="w-[150px] aspect-[2/1]">
            <LogoColor className="w-full h-full"/>
        </div>
        <div className="flex justify-between items-center">
            <div>

      {children}
            </div>
       <div
      className="mx-4 cursor-pointer"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <div
        className={`w-6 h-0.5 rounded-full bg-[var(--color-theme)] my-2 transition-transform duration-300 ${
          isMobileMenuOpen ? "rotate-45 translate-y-3" : ""
        }`}
      />
      <div
        className={`w-6 h-0.5 rounded-full bg-[var(--color-theme)] my-2 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`w-6 h-0.5 rounded-full bg-[var(--color-theme)] my-2 transition-transform duration-300 ${
          isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </div>
        </div>
    </div>
        <div
  className={`absolute z-1000 bg-white w-full h-full overflow-hidden transition-all duration-300 ease-in-out ${
    isMobileMenuOpen ? "opacity-100 max-h-[1000px] pointer-events-auto" : "opacity-0 max-h-0 pointer-events-none"
  }`}
>
            {navItems.map(({name, path},index)=>(
                name === t("projects") ? (
                    <div key={index} className="p-4">
                    <p className="text-xl font-bold border-b-2 pb-2 mx-4 border-[var(--color-accent)] text-[var(--color-theme)]">{name}</p>
                  <div className="grid grid-cols-2 gap-2 px-4 py-2">
  <Link to={`${path}/active`} 
  className="flex"
  onClick={()=>setIsMobileMenuOpen(false)}
  >
    <p className="flex-1 flex items-center justify-center text-lg text-center text-[var(--color-theme)] p-2 bg-[var(--color-bg)] rounded font-semibold">
      {t("projectsActive")}
    </p>
  </Link>
  <Link to={`${path}/finished`}
  onClick={()=>setIsMobileMenuOpen(false)}
   
   className="flex">
    <p className="flex-1 flex items-center justify-center text-center text-lg text-[var(--color-theme)] p-2 bg-[var(--color-bg)] rounded font-semibold">
      {t("projectsImplemented")}
    </p>
  </Link>
</div>
                    
                    
                    </div>
                ) : (
            <div key={index} className="p-4">
                    <Link to={path}>
                    <p className="text-xl font-bold border-b-2 pb-2 mx-4 border-[var(--color-accent)] text-[var(--color-theme)]">{name}</p>
                    </Link>
                </div>
                )
            ))}
        </div>
    </div>
  )
}

export default MobileMenu
