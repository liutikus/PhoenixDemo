import type { ReactNode } from "react"


type InfoCardProps = {
    children:ReactNode
}

const InfoCard = ({children} : InfoCardProps) => {
  return (
    <section className="md:px-[60px] md:py-[2em] p-[16px]">
        <div className="p-[16px] md:p-[60px] bg-white shadow-md rounded-2xl">

    {children}
        </div>
    </section>
  )
}

export default InfoCard
