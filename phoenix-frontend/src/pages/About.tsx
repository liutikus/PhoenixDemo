import AboutCompany from "../components/AboutCompany"
import AboutStats from "../components/AboutStats"
import CompanyStrategy from "../components/CompanyStrategy"
import Footer from "../components/Footer"
import HeroAbout from "../components/HeroAbout"
import NavBar from "../components/NavBar"
import OurBeneficiares from "../components/OurBeneficiares"
import SponsorsInfiniteScroll from "../components/SponsorsInfiniteScroll"
import { useTranslation } from "react-i18next"
import HeroBg from "/page-images/about-hero.png"

const About = () => {

    const {t} = useTranslation();

  return (
    <div>
      <NavBar/>
      <HeroAbout pageName= {t("about")} bgImg = {HeroBg}/>
      <AboutStats/>
      <AboutCompany/>
      <OurBeneficiares/>
      <CompanyStrategy/>
      <SponsorsInfiniteScroll/>

      <Footer/>
    </div>
  )
}

export default About
