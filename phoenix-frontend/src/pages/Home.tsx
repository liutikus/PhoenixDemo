import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"
import { useEffect } from 'react';
import i18n from '../i18n';
import { useParams } from "react-router-dom";
import HeroCards from "../components/HeroCards";
import OurValues from "../components/OurValues";
import TeamSection from "../components/TeamSection";



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
    <HeroCards/>
    <OurValues/>
    <TeamSection/>
    </div>
  )
}

export default Home
