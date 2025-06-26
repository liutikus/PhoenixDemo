import { useState } from "react";
import { Trans, useTranslation } from "react-i18next"
import ArrowIcon from "../assets/icons/small-arrow.svg?react"

const DonationTax = () => {

    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-theme)]">{t("taxTitle")}</h2>
        <p className="py-4 text-[var(--color-text)] ">{t("taxText")}</p>
      </div>
      <div className="border-2 text-[var(--color-text)] border-[var(--color-accent)] p-4 rounded-md">
        <div className="flex justify-between items-center">
            <p>{isOpen ? t("hideInstruction"): t("showInstruction")}</p>
            <button 
            onClick={()=>setIsOpen(!isOpen)}
            className="cursor-pointer text-transparent">
                <ArrowIcon className={`${isOpen ? "origin-center rotate-270" : "origin-center rotate-90"} transition-all duration-500 ease-in-out`}/>
                </button>
        </div>
          <div
        className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? " opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <ul >
            <li className="py-4"><span className="text-[var(--color-theme)] font-bold text-xl pr-2">1</span>
            <Trans
        i18nKey="taxInstruction1"
        components={[
          <a
            href="https://servicii.fisc.md/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-link)] underline"
          />,
           <a
            href="https://servicii.fisc.md/login.aspx?ReturnUrl=%2fedec.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-link)] underline"
          />,
          <span className="font-bold "/>,
          <ArrowIcon className="inline text-transparent h-[10px]"/>

        ]}
      />
            </li>
            <li className="py-4"><span className="text-[var(--color-theme)] font-bold text-xl pr-2">2</span>
            <Trans
        i18nKey="taxInstruction2"
        components={[
          <span className="font-bold "/>,
          <ArrowIcon className="inline text-transparent h-[10px]"/>

        ]}
      />
            </li>
            <li className="py-4"><span className="text-[var(--color-theme)] font-bold text-xl pr-2">3</span>
            <Trans
        i18nKey="taxInstruction3"
        components={[
          <span className="font-bold "/>,
          <ArrowIcon className="inline text-transparent h-[10px]"/>

        ]}
      />
            </li>
               <li className="py-4"><span className="text-[var(--color-theme)] font-bold text-xl pr-2">4</span>
            <Trans
        i18nKey="taxInstruction4"
        components={[
          <span className="font-bold "/>,
          <ArrowIcon className="inline text-transparent h-[10px]"/>

        ]}
      />
            </li>
              <li className="py-4"><span className="text-[var(--color-theme)] font-bold text-xl pr-2">5</span>
            <Trans
        i18nKey="taxInstruction5"
        components={[
          <span className="font-bold "/>,
          <ArrowIcon className="inline text-transparent h-[10px]"/>

        ]}
      />
            </li>
              <li className="py-4"><span className="text-[var(--color-theme)] font-bold text-xl pr-2">6</span>
            <Trans
        i18nKey="taxInstruction6"
        components={[
          <span className="font-bold "/>,
          <ArrowIcon className="inline text-transparent h-[10px]"/>

        ]}
      />
            </li>
              <li className="py-4"><span className="text-[var(--color-theme)] font-bold text-xl pr-2">7</span>
            <Trans
        i18nKey="taxInstruction7"
        components={[
          <span className="font-bold "/>,
          <ArrowIcon className="inline text-transparent h-[10px]"/>

        ]}
      />
            </li>
            
            
        </ul>
        <p className="px-5 py-4 text-[var(--color-text)]">{t("taxInstructionAnotation")}</p>

        </div>
      </div>
    </div>
  )
}

export default DonationTax
