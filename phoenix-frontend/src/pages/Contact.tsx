import { useTranslation } from "react-i18next"
import HeroAbout from "../components/HeroAbout"
import NavBar from "../components/NavBar"
import BgHeroContact from "/page-images/contact-bg-hero.png"
import SponsorsInfiniteScroll from "../components/SponsorsInfiniteScroll"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import InfoCard from "../components/InfoCard"
import ContactInfoCardContent from "../components/ContactInfoCardContent"

const Contact = () => {

    const {t} = useTranslation();

  return (
    <div className="bg-[var(--color-bg)]">
      <NavBar/>
      <HeroAbout pageName={t("contact")} bgImg={BgHeroContact} />
        <ContactForm/>
        <InfoCard>
            <ContactInfoCardContent/>
        </InfoCard>


      <SponsorsInfiniteScroll/>
      <Footer/>
    </div>
  )
}

export default Contact
