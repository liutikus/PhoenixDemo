import { useTranslation } from "react-i18next";
import DonationBtn from "./buttons/DonationBtn";
import { useState } from "react";

const ChooseDonation = () => {
  const { t } = useTranslation();

  const [donationAmount, setDonationAmount] = useState([
    { amount: "50", isSelected: false, id: 1 },
    { amount: "100", isSelected: false, id: 2 },
    { amount: "200", isSelected: false, id: 3 },
    { amount: "500", isSelected: false, id: 4 },
    { amount: "1000", isSelected: false, id: 5 },
  ]);

  const [amount, setAmount] = useState("");

  const handleAmountClick = (clickedAmount: string, btnId: number) => {
    setAmount(clickedAmount);

    setDonationAmount((prev) =>
      prev.map((item) => ({
        ...item,
        isSelected: item.id === btnId,
      }))
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-theme)]">
        {t("chooseDonationTitle")}
      </h2>
      <p className="py-4 text-[var(--color-text)]">{t("chooseDonationText")}</p>
      <div>
        <div className="md:flex justify-between gap-2 flex-wrap">
          {donationAmount.map(({ amount, isSelected, id }) => (
            <button
              key={id}
              className={`${
                isSelected
                  ? "text-white bg-[var(--color-theme-hover)] border-[var(--color-theme-hover)]"
                  : "border-[var(--color-accent)] text-[var(--color-text)]"
              } border py-2 px-4 m-1 md:m-0 md:py-4 md:px-8 rounded-md cursor-pointer`}
              onClick={() => handleAmountClick(amount, id)}
            >
              {amount} MDL
            </button>
          ))}
          <input
            type="number"
            min={0}
            placeholder={t("otherSum")}
            className="py-2 md:py-4 md:px-3 m-1 md:m-0 text-center rounded-md border border-[var(--color-accent)] text-[var(--color-text)]"
            onChange={(e) => {
              setAmount(e.target.value);
              setDonationAmount((prev) =>
                prev.map((item) => ({
                  ...item,
                  isSelected: false, // unselect all when typing custom amount
                }))
              );
            }}
            value={amount && !donationAmount.some(d => d.amount === amount) ? amount : ""}
          />
          <div className="mt-4 md:mt-0">

          <DonationBtn isNavigate={false} amount = {amount} />
          </div>
        </div>
        <p className="pt-4">
          {t("chooseDonationTitle")}
          <span className="text-[red]">*</span>
        </p>
      </div>
    </div>
  );
};

export default ChooseDonation;
