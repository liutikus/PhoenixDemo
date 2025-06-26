import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import DonationPopUp from '../DonationPopUp';



const DonationBtn = ({isNavigate, amount} :{isNavigate: boolean, amount: string}) => {

  const {t} = useTranslation();
  const navigate = useNavigate();
  const {lng} = useParams(); 
  const [isOpen,setIsOpen] = useState(false)

  const HandleNavigate = ()=>{
    navigate(`/${lng}/donation`)
    
  }
  const HandleClose = () => setIsOpen(false);
  const HandleOpen = () => setIsOpen(true);

  return (
    <div>

    <button 
    className="bg-[var(--color-accent)] px-[26px] py-[20px] rounded-md font-semibold cursor-pointer hover:bg-[var(--color-accent-hover)]"
    onClick={()=>{isNavigate ? HandleNavigate() : HandleOpen()}}
    >
      {t("donation")}

    </button>
      {isOpen && <DonationPopUp handleClose={HandleClose} amount = {amount}/>}
    </div>

  )
}

export default DonationBtn
