import { useTranslation } from "react-i18next"
import { BaseURL } from "../api/strapi"
import ArrowIcon from "../assets/icons/arrow.svg?react";
import { useNavigate, useParams } from "react-router-dom";


const ProjectCard = ({title, bannerImage, active, id}: {title:string, bannerImage:{url:string}, active: boolean, id:string}) => {

  const navigate = useNavigate();
  const {t} = useTranslation();
  const {lng, projectStatus} = useParams();

  const HandleClick = (id: string)=>{
    navigate(`/${lng}/projects/${projectStatus}/${id}`)
  }

  return (
   <div className=" h-[250px] md:h-[390px] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0 group">
  
              <div
                  className="absolute bg-top inset-0 bg-cover z-0 rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${BaseURL + bannerImage.url})` }}
              />
              
              <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-95%" />
  
              <div className="absolute z-20 p-[16px] md:p-[2em] bottom-0 left-1/2 transform -translate-x-1/2  w-[100%] ">
              <h2 className=" text-white font-bold text-xl md:text-3xl ">{title}</h2>
              <div className="flex items-center justify-between">
              <p className=" text-white pt-[1.5em]">{active? t("active") : t("finished")}</p>
              <button onClick={()=>HandleClick(id)} className="p-[10px] border-2 cursor-pointer border-white rounded-full text-white hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-black  transition-all duration-400" ><ArrowIcon className=" h-[20px] w-[20px] " /></button>
              </div>
              </div>
  
          </div>
  )
}

export default ProjectCard
