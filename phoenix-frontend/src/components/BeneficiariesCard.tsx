
const BeneficiariesCard = ({text, img, title, i}: {text: string, img: string, title:string, i:number}) => {

    const imgSection = ()=>{
        return(
             <div className=" h-[180px] md:w-[280px] w-auto my-2 md:my-0 overflow-hidden bg-white rounded-2xl relative top-0 left-0 group">
            
                        <div
                            className="absolute bg-center inset-0 bg-cover z-0 rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                            style={{ backgroundImage: `url(${img})` }}
                        />

                    </div>
        )
    }

    const textSection = ()=>{

        const paddingClass = i%2===0 ? "md:pl-[1.5em]" : "md:pr-[1.5em]";

        return(
             <div className={`${paddingClass} md:w-[77%]`}>
            <h2 className="text-2xl text-[var(--color-theme)] font-semibold">{title}</h2>
            <p className="text-[var(--color-text)]">{text}</p>
        </div>
        )
    }
    
  return (
    <div className="shadow-md my-6 md:my-2 md:flex justify-between items-center p-[16px] md:p-[60px] rounded-2xl">
        {i % 2 === 0 ? (
        <>
          {imgSection()}
          {textSection()}
        </>
      ) : (
        <>
          {textSection()}
          {imgSection()}
        </>
      )}
        
      
    </div>
  )
}

export default BeneficiariesCard
