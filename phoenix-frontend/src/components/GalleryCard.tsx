import { BaseURL } from "../api/strapi"

const GalleryCard = ({img} : {img:string}) => {
  return (
    <div className=" h-[250px] md:h-[350px] w-full overflow-hidden bg-white rounded-2xl shadow-md relative top-0 left-0 group mb-[1em]">
    
                <div
                    className="absolute bg-top inset-0 bg-cover z-0 rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${BaseURL + img})` }}
                />
                
                <div className="z-10 absolute rounded-2xl inset-0 bg-gradient-to-t from-[var(--color-theme)] from-[0%] to-transparent to-95%" />
    
                <div className="absolute z-20 pb-[30px] bottom-0 left-1/2 transform -translate-x-1/2 text-center w-max">
                </div>
    
            </div>
  )
}

export default GalleryCard
