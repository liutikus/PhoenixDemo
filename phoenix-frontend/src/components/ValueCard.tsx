import { Trans} from 'react-i18next';

type Value = {
    title: string,
    textKey: string,
    icon: string
}


const ValueCard = ({textKey, title, icon} : Value ) => {

  

  return (
    <div className=" h-full p-[60px] pt-[30px] bg-white rounded-2xl shadow-md relative top-0 left-0 w-ful">
        <div className="pb-[20px] flex z-10 justify-between items-end">
            <h2 className="w-fit text-[var(--color-theme)] font-bold text-2xl ">{title}</h2>
            <img className='' src={icon} alt="Value Icon" />
        </div>
            <p className="z-10 text-[var(--color-text)]"> <Trans
              i18nKey={textKey}
              components={{ highlight: <span className="font-bold" /> }}
            /></p>
      <div className="z-0 absolute rounded-2xl inset-0 bg-gradient-to-b from-[var(--color-theme)] from-[-1000%] to-transparent to-120%" />

        </div>
  )
}

export default ValueCard
