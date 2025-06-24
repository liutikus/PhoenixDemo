import { BaseURL } from "../api/strapi";

type ProjectDetailsProps = {
  imgURL: string | undefined;
};

const ProjectDetailsHero = ({imgURL} : ProjectDetailsProps) => {


  return (
     <section className="relative">
        <div className="relative w-full h-[380px] overflow-hidden px-[60px]">
            
       <img src={BaseURL + imgURL} alt="About"
        className="absolute bg-top blur-[2px] top-0 left-0 w-full h-full object-cover"
      />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-theme)] to-transparent" />
        
      <div className="absolute inset-0 bg-gradient-to-t  from-[white]  from-[0%] via-[rgba(255,255,255,0)] to-20% to-transparent z-10" />
        </div>
        
    </section >
  )
}

export default ProjectDetailsHero
