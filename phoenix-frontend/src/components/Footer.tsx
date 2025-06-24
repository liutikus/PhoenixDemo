import { useTranslation } from 'react-i18next'
import FooterLogo from '/logo/logo-footer.png'
import AddressIcon from '/icons/address.png'
import EmailIcon from '/icons/email.png'
import PhoneIcon from '/icons/phone.png'
import Facebook from '/icons/Facebook.png'
import Instagram from '/icons/Instagram.png'
import LinkedIn from '/icons/LinkedIn.png'
import PaynetIcon from '/icons/paynet-icon.png'
import VisaIcon from '/icons/visa-icon.png'
import PayPalIcon from '/icons/paypal-icon.png'


import { contacts } from '../data/data'



const Footer = () => {

    const {t} = useTranslation();

  return (
    <footer className="mt-[30px]  bg-[var(--color-theme-hover)]">
      <div className="flex px-[60px] pt-[4em] gap-[4em]">
    <div className="w-[50%]">
            <img src={FooterLogo} alt="Phoenix" />
            <h2 className="text-[var(--color-accent)] py-[2em] text-[1.5em] font-bold">{t("contact")}</h2>
            <p className="text-white">{t("footerText")}</p>
            <p className="text-white font-bold pt-[2em]">{t("footerTextHighlight")}</p>

    </div>
    <div className='w-[30%]'>
        <ul className='text-white'>
            <li className='pb-[1.2em]'>
                <div className='flex'>
                <img src={AddressIcon} alt="Adress Icon" className='h-auto w-auto max-h-[100px] object-contain pr-[12px]'/>
                <div>
                    <h3 className='font-bold'>{t("adress")}:</h3>
                    <p>{t("adressPhoenix")}</p>
                </div>

                </div>
            </li>
             <li className='py-[1.2em]'>
                <div className='flex'>
                <img src={PhoneIcon} alt="Phone Icon" className='h-auto w-auto max-h-[100px] object-contain pr-[12px]'/>
                <div>
                    <h3 className='font-bold'>{t("phone")}:</h3>
                    <a href={contacts.phoneNumber.href}>{contacts.phoneNumber.text}</a>
                </div>

                </div>
            </li>
             <li className='py-[1.2em]'>
                <div className='flex'>
                <img src={EmailIcon} alt="Email Icon" className='h-auto w-auto max-h-[100px] object-contain pr-[12px]'/>
                <div>
                    <h3 className='font-bold'>Email:</h3>
                    <a href={contacts.email.href}>{contacts.email.text}</a>
                </div>

                </div>
            </li>
            <li className='py-[1.2em] flex gap-3'>
             <a href={contacts.hrefFacebook}> <img src={Facebook} alt="" /></a>
             <a href={contacts.hrefInstagram}> <img src={Instagram} alt="" /></a>
             <a href={contacts.hrefLinkedIn}> <img src={LinkedIn} alt="" /></a>

            </li>

        </ul>
    </div>
      </div>
      <div className='text-white mt-[4em] py-[10px] bg-[var(--color-theme)] px-[60px] flex justify-between items-center'>
        <div>
            <p>{t("copyrightText")}</p>
        </div>
        <div className="flex gap-[2em] items-center">
            <p className='font-bold text-[var(--color-accent)]'>{t("paymentMethods")}</p>
            <a href="#"><img src={PaynetIcon} alt="PayNet" /></a>
            <a href="#"><img src={VisaIcon} alt="Visa" /></a>
            <a href="#"><img src={PayPalIcon} alt="PayPal" /></a>

        </div>
      </div>
    </footer>
  )
}

export default Footer
