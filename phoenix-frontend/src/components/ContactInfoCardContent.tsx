import LocationIcon from "../assets/icons/location-icon.svg?react"
import ClockIcon from "../assets/icons/clock-icon.svg?react"
import EmailIcon from "../assets/icons/email-icon.svg?react"
import { useTranslation } from "react-i18next"
import { contacts } from "../data/data"


const ContactInfoCardContent = () => {

    const {t} = useTranslation();

  return (
    <div className="grid md:grid-cols-3">
      <div className="flex flex-col items-center">
        <div className="border-1 p-2 border-[var(--color-theme)] w-min rounded-full ">
        <LocationIcon className="text-[var(--color-accent)] w-[24px] h-[24px]"/>
        </div>
        <div className="pt-4 text-center">
            <h3 className="text-lg pb-2 font-bold text-[var(--color-theme)]">{t("adress")}</h3>
            <p className="">{t("adressPhoenix")}</p>
        </div>

      </div>
       <div className="flex flex-col items-center">
        <div className="border-1 p-2 border-[var(--color-theme)] w-min rounded-full ">
        <ClockIcon className="text-[var(--color-accent)] w-[24px] h-[24px]"/>
        </div>
        <div className="pt-4 text-center">
            <h3 className="text-lg pb-2 font-bold text-[var(--color-theme)]">{t("phone")}</h3>
            <a href={contacts.phoneNumber.href} className=""><span className="font-bold">(+373)</span> 69 025 424</a>
        </div>

      </div>
       <div className="flex flex-col items-center">
        <div className="border-1 p-2 border-[var(--color-theme)] w-min rounded-full ">
        <EmailIcon className="text-[var(--color-accent)] w-[24px] h-[24px]"/>
        </div>
        <div className="pt-4 text-center">
            <h3 className="text-lg pb-2 font-bold text-[var(--color-theme)]">Email</h3>
            <a href={contacts.email.href} className="">{contacts.email.text}</a>
        </div>

      </div>
    </div>
  )
}

export default ContactInfoCardContent
