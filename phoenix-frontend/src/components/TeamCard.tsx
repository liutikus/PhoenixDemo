import type { Employee } from "../types/types"
import { BaseURL } from "../api/strapi"

const TeamCard = ({ Image, Role, Name, id }: Employee) => {

    return (
        <div className=" h-[300px] w-[300px] overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0 group">

            <div
                className="absolute bg-top inset-0 bg-cover z-0 rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${BaseURL + Image?.url})` }}
            />
            
            <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-95%" />

            <div className="absolute z-20 pb-[30px] bottom-0 left-1/2 transform -translate-x-1/2 text-center w-max">
            <h2 className=" text-white font-bold text-[1.2em] ">{Name}</h2>
            <p className=" text-white"> {Role}</p>
            </div>

        </div>
    )
}

export default TeamCard
