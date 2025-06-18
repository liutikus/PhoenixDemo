import { useTranslation } from 'react-i18next';



const DonationBtn = () => {

  const {t} = useTranslation();

  return (
    <button className="bg-[var(--color-accent)] px-[26px] py-[20px] rounded-md font-semibold cursor-pointer hover:bg-[var(--color-accent-hover)]">
      {t("donation")}
    </button>
  )
}

export default DonationBtn
