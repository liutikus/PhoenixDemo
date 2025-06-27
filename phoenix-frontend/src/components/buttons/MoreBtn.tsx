import { useTranslation } from 'react-i18next';

const MoreBtn = () => {

  const {t} = useTranslation();

  return (
    <button className="md:px-[26px] p-[12px] rounded-md font-semibold cursor-pointer border-2 text-[var(--color-accent)] hover:text-white hover:bg-[var(--color-theme-hover)] hover:border-[var(--color-theme-hover)]">
      {t("more")}
    </button>
  )
}

export default MoreBtn
