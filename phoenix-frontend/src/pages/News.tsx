import { useTranslation } from "react-i18next"
import HeroAbout from "../components/HeroAbout"
import NavBar from "../components/NavBar"
import BgNewsImg from "/page-images/hero-news.png"
import SponsorsInfiniteScroll from "../components/SponsorsInfiniteScroll"
import Footer from "../components/Footer"
import NewsSection from "../components/NewsSection"

const News = () => {

    const {t} = useTranslation();

  return (
    <div>
      <NavBar/>
      <HeroAbout pageName = {t("news")} bgImg = {BgNewsImg}/>
      <NewsSection/>

      <SponsorsInfiniteScroll/>
      <Footer/>
    </div>
  )
}

export default News
