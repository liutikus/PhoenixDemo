
import ProjectCard from "./ProjectCard"
import type { Project } from "../types/types"
import { useState } from "react"

type ProjectsSectionProps = {
  projects: Project[] | null;
};

const ProjectsSection = ({projects} : ProjectsSectionProps) => {

    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 6
    const totalItems = projects ? projects.length : 0;
    const totalPages = Math.ceil(totalItems / postsPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const pageProjects = projects?.slice(indexOfFirstPost, indexOfLastPost);

    return (
    <section className="p-[16px] md:px-[60px] md:py-[4em]">
        <div className="grid md:grid-cols-2 w-full gap-5">
            {pageProjects?.map(({title,active, bannerImage, documentId }, index)=>(
                <div key={index}>
                    <ProjectCard title={title} active={active} bannerImage={bannerImage} id={documentId}/>
                </div>
            ))}
        </div>
     <div className="flex justify-center py-[2em]">
    {Array.from({ length: totalPages }, (_, i) => (
  <button
   key={i}
   className={`px-[0.75em] text-2xl font-bold cursor-pointer
   ${currentPage === i + 1 ? "text-[var(--color-theme)]" :
   "text-[var(--color-text)]"
   }
    `}
   onClick={() => setCurrentPage(i + 1)}>
    {i + 1}
  </button>
))}
     </div>
    </section>
  )
}

export default ProjectsSection
