import { useTranslation } from "react-i18next"
import HeroAbout from "../components/HeroAbout"
import ProjectsActiveBgImg from "/page-images/projects-hero.png"
import ProjectsFinishedBgImg from "/page-images/projects-finished-hero.png"
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/ProjectsSection";
import { useParams } from "react-router-dom";
import SponsorsInfiniteScroll from "../components/SponsorsInfiniteScroll";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { fetchProjects } from "../api/strapi";
import type { Project } from "../types/types";

const Projects = () => {

    const {projectStatus} = useParams();
    const {t} = useTranslation();
    const [projects, setProjects] = useState<Project[] | null>(null)

    const HeroSection = ()=>{
   if(projectStatus === "active"){
        
        return(
      <HeroAbout pageName={t("projectsActive")} bgImg = {ProjectsActiveBgImg}/>

        )
      }if(projectStatus === "finished"){
        
        return(
        <HeroAbout pageName={t("projectsImplemented")} bgImg = {ProjectsFinishedBgImg}/>
      )}
    }
const CheckProjectsStatus = () => {
  setProjects((prev) => {
    if (!prev) return null;

    if (projectStatus === "active") {
      return prev.filter(({ active }) => active);
    }

    if (projectStatus === "finished") {
      return prev.filter(({ active }) => !active);
    }

    return prev;
  });
};

    
    useEffect(()=>{
      fetchProjects()
        .then(setProjects)
        .then(()=>CheckProjectsStatus())
        .catch(console.error)
    },[projectStatus])

  return (
    <div>
        <NavBar/>
      {HeroSection()}
      <ProjectsSection projects = {projects}/>
      <SponsorsInfiniteScroll/>
      <Footer/>
    </div>
  )
}

export default Projects
