import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchProjectById } from "../api/strapi";
import type { Project } from "../types/types";
import NavBar from "../components/NavBar";
import ProjectDetailsHero from "../components/ProjectDetailsHero";
import ProjectInfo from "../components/ProjectInfo";
import SponsorsInfiniteScroll from "../components/SponsorsInfiniteScroll";
import Footer from "../components/Footer";
import ProjectStats from "../components/ProjectStats";
import ProjectGallery from "../components/ProjectGallery";

const ProjectDetails = () => {

    const {id} = useParams();
    const [projectDetails, setProjectDetails] = useState<Project | null>(null);

    useEffect(()=>{
        fetchProjectById(id)
            .then(setProjectDetails)
            .catch(console.error)

    },[])

    console.log(projectDetails)

  return (
    <div>
      <NavBar/>
      <ProjectDetailsHero imgURL = {projectDetails?.bannerImage.url} />
      <ProjectInfo isActive = {projectDetails?.active} title = {projectDetails?.title} results={projectDetails?.results} projectPurpose = {projectDetails?.projectPurpose} />
        <ProjectStats partners={projectDetails?.partners} location={projectDetails?.location} finishDate={projectDetails?.finishDate} startDate={projectDetails?.startDate}/>
        <div className="px-[60px] pb-[4em]">

        <ProjectGallery images = {projectDetails?.images}/>
        </div>

      <SponsorsInfiniteScroll/>
      <Footer/>
    </div>
  )
}

export default ProjectDetails
