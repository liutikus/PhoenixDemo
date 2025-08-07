import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"
import { useEffect } from 'react';
import i18n from '../i18n';
import { useParams } from "react-router-dom";
import OurValues from "../components/OurValues";
import TeamSection from "../components/TeamSection";
import CompanyStats from "../components/CompanyStats";
import Testimonials from "../components/Testimonials";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";



const Home = () => {
  const { lng } = useParams();


    useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);
  
  return (
    <div>
      <NavBar/>
    <HeroSection/>
    <OurValues/>
    <TeamSection/>
    <CompanyStats/>
    <Testimonials/>
    <Sponsors/>
    <Footer/>
    </div>
  )
}

export default Home
