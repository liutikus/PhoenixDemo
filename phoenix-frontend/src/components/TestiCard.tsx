import {type Testimonial } from "../types/types"

const TestiCard = ({name, job, text, profileImg} : Testimonial) => {
  return (
  <div className=" h-full p-[16px] md:p-[60px] pt-[30px] bg-white rounded-2xl relative top-0 left-0 w-ful">
          <div className="pb-[30px] flex z-10">
              <img className='h-auto w-auto max-h-[100px] object-contain pr-[12px]' src={profileImg} alt="Value Icon" />
              <div>
              <h2 className="w-fit text-[var(--color-theme)] font-bold text-xl ">{name}</h2>
              <h4 className="text-[0.8em] font-semibold w-[80%]">{job}</h4>
              </div>
          </div>
              <p className="z-10 ">{text}</p>
        <div className="z-0 absolute rounded-2xl inset-0 bg-gradient-to-b from-[var(--color-theme)] from-[-1000%] to-transparent to-120%" />
  
    </div>
  )
}

export default TestiCard
