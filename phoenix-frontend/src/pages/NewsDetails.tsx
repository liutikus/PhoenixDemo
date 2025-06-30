import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react";
import { fetchNewsById } from "../api/strapi";
import SponsorsInfiniteScroll from "../components/SponsorsInfiniteScroll";
import Footer from "../components/Footer";
import type { News } from "../types/types";
import ProjectDetailsHero from "../components/ProjectDetailsHero";
import NewsInfoSection from "../components/NewsInfoSection";

const NewsDetails = () => {

    const {id} = useParams();
    const [newsDetails,setNewsDetails] = useState<News | null>(null)
    const {lng} = useParams();

    useEffect(()=>{
        fetchNewsById(id, lng)
            .then(setNewsDetails)
            .catch(console.error)
    },[lng])

  return (
    <div>
      <NavBar/>
        <ProjectDetailsHero imgURL = {newsDetails?.mainImage.url}/>
        <NewsInfoSection newsDetails = {newsDetails}/>
      <SponsorsInfiniteScroll/>
      <Footer/>
    </div>
  )
}

export default NewsDetails
