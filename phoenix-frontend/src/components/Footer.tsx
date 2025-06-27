import { useTranslation } from 'react-i18next'
import FooterLogo from "../assets/icons/logo-footer.svg?react"
import LocationIcon from "../assets/icons/location-icon.svg?react"
import PhoneIcon from "../assets/icons/phone-icon.svg?react"
import EmailIcon from "../assets/icons/email-icon.svg?react"
import PayNetIcon from "../assets/icons/paynet-footer.svg?react"
import PayPalIcon from "../assets/icons/paypal-footer.svg?react"
import TaxIcon from "../assets/icons/tax-icon-footer.svg?react"
import LinkedInIcon from "../assets/icons/LinkedIn.svg?react";
import InstagramIcon from "../assets/icons/Instagram.svg?react";
import FacebookIcon from "../assets/icons/facebook.svg?react";




import { contacts } from '../data/data'



const Footer = () => {

    const {t} = useTranslation();

  return (
    <footer className="md:mt-[30px]  bg-[var(--color-theme-hover)]">
      <div className="md:flex p-[30px] md:px-[60px] md:pt-[4em] md:gap-[4em]">
    <div className="md:w-[50%]">
            <p><FooterLogo className="w-auto h-[60px] md:h-[100px] aspect-[2/1]"/></p>
            <h2 className="text-[var(--color-accent)] pt-4 md:py-[1em] text-[1.5em] font-bold">{t("contact")}</h2>
            <p className="text-white">{t("footerText")}</p>
            <p className="text-white font-bold py-[1.5em] ">{t("footerTextHighlight")}</p>

    </div>
    <div className='lg:w-[30%]'>
        <ul className='text-white'>
            <li className='pb-[1.2em]'>
                <div className='flex items-center'>
                <div className="border-1 h-min w-min p-2 rounded-full mr-4"><LocationIcon/></div>
                <div>
                    <h3 className='font-bold'>{t("adress")}:</h3>
                    <p>{t("adressPhoenix")}</p>
                </div>

                </div>
            </li>
             <li className='py-[1.2em]'>
                <div className='flex items-center'>
                                <div className="border-1 h-min w-min p-2 rounded-full mr-4"><PhoneIcon/></div>

                <div>
                    <h3 className='font-bold'>{t("phone")}:</h3>
                    <a href={contacts.phoneNumber.href}>{contacts.phoneNumber.text}</a>
                </div>

                </div>
            </li>
             <li className='py-[1.2em]'>
                <div className='flex items-center'>
                                <div className="border-1 h-min w-min p-2 rounded-full mr-4"><EmailIcon/></div>

                <div>
                    <h3 className='font-bold'>Email:</h3>
                    <a href={contacts.email.href}>{contacts.email.text}</a>
                </div>

                </div>
            </li>
            <li className='py-[1.2em]  [@media(min-width:400px)]:flex gap-3'>
             <a href={contacts.hrefFacebook} className='flex items-center my-1'>  <div className="border-1 h-min w-min p-2 rounded-full mr-1"> <FacebookIcon/></div><span className='font-semibold'>Facebook</span></a>
             <a href={contacts.hrefInstagram} className='flex items-center my-1'>  <div className="border-1 h-min w-min p-2 rounded-full mr-1"> <InstagramIcon/></div><span className='font-semibold'>Instagram</span></a>
             <a href={contacts.hrefLinkedIn} className='flex items-center my-1'>  <div className="border-1 h-min w-min p-2 rounded-full mr-1"> <LinkedInIcon/></div><span className='font-semibold'>LinkedIn</span></a>

            </li>
            <div>
            <p className='font-bold text-[var(--color-accent)]'>{t("paymentMethods")}</p>

           <div className='grid grid-cols-3 mt-2'>
  <a href="#" className="flex items-center justify-center">
    <PayNetIcon className='w-auto h-[40px] aspect-[2/1]' />
  </a>
  <a href="#" className="flex items-center justify-center">
    <TaxIcon className='w-auto h-[40px] aspect-[2/1]' />
  </a>
  <a href="#" className="flex items-center justify-center">
    <PayPalIcon className='w-auto h-[40px] aspect-[2/1]' />
  </a>
</div>
            </div>
        </ul>
    </div>
      </div>
      <div className='text-white md:mt-[4em] py-[10px] bg-[var(--color-theme)] px-[60px] flex justify-between items-center'>
        <div className='text-center md:text-start'>
            <p>{t("copyrightText")}</p>
        </div>
        <div className="hidden md:flex gap-[2em] items-center">
            <p className='font-bold text-[var(--color-accent)]'>{t("paymentMethods")}</p>
            <a href="#"><PayNetIcon/></a>
            <a href="#"><TaxIcon/></a>
            <a href="#"><PayPalIcon/></a>

        </div>
      </div>
    </footer>
  )
}

export default Footer
