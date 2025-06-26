import type { ReactNode } from "react"


type InfoCardProps = {
    children:ReactNode
}

const InfoCard = ({children} : InfoCardProps) => {
  return (
    <section className="px-[60px] py-[2em]">
        <div className="p-[60px] bg-white shadow-md rounded-2xl">

    {children}
        </div>
    </section>
  )
}

export default InfoCard
