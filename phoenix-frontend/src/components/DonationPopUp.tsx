import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import CardIcon from "../assets/icons/card-icon.svg?react"
import PayPalIcon from "../assets/icons/paypal-icon.svg?react"
import PayNetIcon from "../assets/icons/paynet-icon.svg?react"


type DonationPopUpProps = {
    handleClose: () => void;
    amount: string,
}

type FormData = {
    name: string,
    email: string,
    phoneNumber: string,
    country: string,
    city: string,
    agreeTerms: boolean,
    amount: string,
    paymentMethod: string
}


const DonationPopUp = ({ handleClose, amount }: DonationPopUpProps) => {

    const { t } = useTranslation();

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phoneNumber: "",
        country: "",
        city: "",
        agreeTerms: false,
        amount: amount,
        paymentMethod: ""
    })

    const paymentMethods = [{
        icon: <CardIcon />,
        text: t("payWithCard"),
        method: "card"
    }, {
        icon: <PayPalIcon />,
        text: t("payWithPayPal"),
        method: "payPal"
    }, {
        icon: <PayNetIcon />,
        text: t("payWithPayNet"),
        method: "payNet"
    },]

    console.log(amount)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;
  const method = submitter?.getAttribute("data-method");

  if (!method) {
    alert("Please select a payment method.");
    return;
  }

  const submissionData = {
    ...formData,
    paymentMethod: method,
  };

  try {
    const response = await fetch("http://localhost:1337/api/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: submissionData }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit donation.");
    }

    const result = await response.json();
    console.log("Donation submitted:", result);

   
    handleClose();

  } catch (err: any) {
    console.error(err);
    alert("An error occurred. Please try again.");
  }
};


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return (
        <section className="absolute top-[100%] inset-0 z-40 flex items-center justify-center">
            <div
                className="fixed inset-0 bg-[var(--color-theme)] opacity-50"
                onClick={() => handleClose()}
            />
            <div className="z-50 bg-white p-[60px] rounded-2xl">
                <div className="grid grid-cols-1">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 w-full max-w-lg text-[var(--color-text)]">
                        <div>
                            <label className="block mb-2 text-[var(--color-text)] font-bold" htmlFor="name">{t("nameSurName")} <span className="text-[red]">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-1 border-[var(--color-border)] px-8 py-4 rounded-xl"

                                placeholder={t("nameSurName")}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <label className="block mb-2  font-bold" htmlFor="email">Email<span className="text-[red]">*</span></label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-1 border-[var(--color-border)] px-8 py-4 rounded-xl"

                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <label className="block mb-2  font-bold" htmlFor="phoneNumber">{t("phoneNumber")} <span className="text-[red]">*</span></label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full border-1 border-[var(--color-border)] px-8 py-4 rounded-xl"
                                placeholder={t("phoneNumber")}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div>
                                <label className="block mb-2  font-bold" htmlFor="country">{t("country")} <span className="text-[red]">*</span></label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="w-full border-1 border-[var(--color-border)] px-8 py-4 rounded-xl"

                                    placeholder={t("country")}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2  font-bold" htmlFor="city">{t("city")} <span className="text-[red]">*</span></label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full border-1 border-[var(--color-border)] px-8 py-4 rounded-xl"

                                    placeholder={t("city")}
                                    required
                                />
                            </div>

                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="agreeTerms"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                className="mr-2 mt-4 "
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
                                        <a href="#" className="text-[var(--color-accent)] underline" />
                                    ]}
                                />
                            </label>
                        </div>
                        <div className="pt-[2em]">
                            <div className="flex justify-between text-3xl font-bold text-[var(--color-text)]">
                                <h2>{t("sum")}</h2>
                                <p className="w-min flex">
                                 <input
                                type="number"
                                min={0}
                                id="amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className="w-auto text-right bg-transparent outline-none"
                                required
                            />
                                    MDL
                                </p>
                               
                            </div>
                            <div className="bg-[var(--color-accent)] my-[1.5em] p-[1px]"></div>
                            {paymentMethods.map(({ method, icon, text }, index) => (
                                <div key={index} className="mb-2">
                                    <button 
                                    type="submit"
                                    data-method={method}
                                    className="flex cursor-pointer hover:bg-[var(--color-accent-hover)]  text-xl font-bold bg-[var(--color-accent)] px-[1.5em] py-4 rounded-md justify-between w-full items-center text-[var(--color-text)]">
                                        <p>{text}</p>
                                        <p className="text-4xl">{icon}</p>
                                    </button>
                                </div>
                            ))}



                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default DonationPopUp
