import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import FacebookIcon from "../assets/icons/facebook.svg?react"
import InstagramIcon from "../assets/icons/Instagram.svg?react"
import LinkedInIcon from "../assets/icons/LinkedIn.svg?react"


const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeTerms: false,
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value, type } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value,
  }));
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
  };

  return (
    <section className="md:px-[60px] md:py-[5em] p-[16px]">
      <div className="md:flex justify-between items-center text-[var(--color-text)]">
        <div className="md:w-[50%] md:pr-4">
          <h2 className="text-4xl font-bold text-[var(--color-theme)]">{t("contactTitle")}</h2>
          <Trans
            i18nKey={"contactText"}
            components={[<p className="md:py-4 py-1 text-[var(--color-text)]" />]}
          />
          <div className="pb-5 md:pb-0">
            <h3 className="text-lg font-bold ">{t("socialMedia")}</h3>
            <div className="md:pt-4 pt-1 lg:flex items-center">
             <div className="flex items-center pr-4">
                <a href="#" className="bg-[var(--color-theme)] p-[6px] rounded-full">
                    <FacebookIcon className=" text-white"/></a>
                    <p className="font-semibold px-2">Facebook</p>
            </div>
             <div className="flex items-center lg:py-0 py-2 pr-4">
                <a href="#" className="bg-[var(--color-theme)] p-[6px] rounded-full">
                    <InstagramIcon className=" text-white"/></a>
                    <p className="font-semibold px-2">Instagram</p>
            </div>
             <div className="flex items-center pr-4">
                <a href="#" className="bg-[var(--color-theme)] p-[6px] rounded-full">
                    <LinkedInIcon className=" text-white"/></a>
                    <p className="font-semibold px-2">LinkedIn</p>
            </div>
            </div>
           
            

          </div>
        </div>

        <div>
          <div className="z-50 bg-white shadow-md p-[16px] md:p-[60px] rounded-2xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 w-full max-w-lg text-[var(--color-text)]">
              <div>
                <label className="block mb-2 font-bold" htmlFor="name">
                  {t("nameSurName")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-[var(--color-border)] px-8 py-4 rounded-xl"
                  placeholder={t("nameSurName")}
                  required
                />
              </div>

              <div className="md:pt-[1.5em] pt-4">
                <label className="block mb-2 font-bold" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[var(--color-border)] px-8 py-4 rounded-xl"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="md:pt-[1.5em] pt-4">
                <label className="block mb-2 font-bold" htmlFor="message">
                  {t("messageTitle")}<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-[var(--color-border)] px-8 py-4 rounded-xl"
                  placeholder={t("messagePlaceholder") || "Write your message..."}
                />
              </div>

              <div>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mr-2 mt-4"
                  required
                />
                <label htmlFor="agreeTerms" className="select-none">
                  <Trans
                    i18nKey="agreeTerms"
                    components={[
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-accent)] underline"
                      />,
                      <a href="#" className="text-[var(--color-accent)] underline" />,
                    ]}
                  />
                </label>
              </div>
              <div className="pt-6">
              <button
               className="bg-[var(--color-accent)] px-6 py-4 rounded font-bold text-lg hover:bg-[var(--color-accent-hover)] "
               type="submit"
              >{t("sendMessage")}</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
