import { useTranslation } from "react-i18next"
import Footer from "../components/Footer"
import HeroAbout from "../components/HeroAbout"
import NavBar from "../components/NavBar"
import SponsorsInfiniteScroll from "../components/SponsorsInfiniteScroll"
import BgHeroDonation from "/page-images/donation-bg-hero.png"
import InfoCard from "../components/InfoCard"
import ChooseDonation from "../components/ChooseDonation"
import DonationBtn from "../components/buttons/DonationBtn"
import DonationTax from "../components/DonationTax"

const Donation = () => {

    const {t} = useTranslation();

  return (
    <div className="bg-[var(--color-bg)]">
      <NavBar/>
      <HeroAbout pageName= {t("donation")} bgImg={BgHeroDonation}/>
      <div className="pt-[4em]">
        <InfoCard>
         <ChooseDonation/>
        </InfoCard>
      </div>
       <InfoCard>
            <div>
                <div className="flex justify-between items-center text-[var(--color-text)]">
                    <div>
                        
                <h2 className="text-2xl font-bold text-[var(--color-theme)]">{t("bankTransferDonation")}</h2>
                <p className="py-4">{t("phoenixAO")}</p>
    <ul>
                        <li className="py-2"><span className="font-bold ">IDNO:</span> 1014620007050 </li>
                        <li className="py-2"><span className="font-bold ">IBAN:</span> MD76EX0000002251678911MD </li>
                        <li className="py-2"><span className="font-bold ">BIC:</span> EXMMMD22422 </li>
                        <li className="py-2"><span className="font-bold ">B.C.</span> EXIMBANK S.A. suc. nr. 9 Chișinău  </li>

                    </ul>
                    </div>
                
                    <div className="w-[30%]">
                        <h3 className="font-bold pb-4">{t("legalAddress")}</h3>
                        <p>{t("adressPhoenix")}</p>
                    </div>
                    <div>
                        <DonationBtn isNavigate={false} amount="0"/>
                    </div>
                </div>
            </div>
        </InfoCard>
         <InfoCard>
            <DonationTax/>
        </InfoCard>
      <SponsorsInfiniteScroll/>
      <Footer/>
    </div>
  )
}

export default Donation
