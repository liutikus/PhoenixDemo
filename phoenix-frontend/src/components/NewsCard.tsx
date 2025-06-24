import { useTranslation } from "react-i18next"
import { BaseURL } from "../api/strapi"
import ArrowIcon from "../assets/icons/arrow.svg?react";
import type { Employee } from "../types/types"
import { useNavigate, useParams } from "react-router-dom";

type NewsCardProps = {
    title: string,
    teamMember: Employee,
    publishDate:string,
    id:string
}

const NewsCard = ({title, teamMember,id, publishDate} : NewsCardProps) => {

    const {t} = useTranslation();
    const navigate = useNavigate();
    const [year, month, day] = publishDate.split("-");
    const formatedDate = `${day}.${month}.${year}`;
    const {lng} = useParams();

     const HandleClick = (id: string)=>{
    navigate(`/${lng}/news/${id}`)
  }

  return (
    <div className=" bg-white mt-[1.5em] p-[60px] shadow-md rounded-2xl flex flex-col h-full justify-between">
        <div className="h-full">

        <h2 className="text-[2em] font-bold text-[var(--color-theme)]">{title}</h2>
        </div>
        <div className="flex text-[var(--color-text)]  justify-between items-center pt-[1.5em]">
            <div className="flex">
              <div className="relative bg-white z-10 h-[48px] w-[48px] rounded-full overflow-hidden">
                    <img
                        src={BaseURL + teamMember.Image.url}
                        alt="Profile Image"
                        className="w-full h-full object-cover object-top scale-120"
                    />
                </div>
                <div className="px-4">
                    <p className="font-bold">{teamMember.Name}</p>
                    <p>{t("published")}: {formatedDate}</p>
                </div>

            </div>
            <div>
            <button className="p-[10px] border-2 cursor-pointer border-[var(--color-accent)] rounded-full text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white  transition-all duration-400"
             onClick={()=> HandleClick(id)}
             >
                <ArrowIcon className=" h-[20px] w-[20px]"/>
                </button>
            </div>
            </div>
            <div>
        </div>
      
    </div>
    
  )
}

export default NewsCard
