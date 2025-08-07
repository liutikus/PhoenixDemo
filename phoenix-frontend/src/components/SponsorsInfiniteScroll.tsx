import type { Sponsor } from "../types/types";
import { useEffect, useState } from "react";
import { BaseURL, fetchSponsors } from "../api/strapi";

const SponsorsInfiniteScroll = () => {

  
        const [sponsors, setSponsors] = useState<Sponsor[] | null>(null);
    
        useEffect(()=>{
            fetchSponsors()
                .then(setSponsors)
                .catch(console.error)
        },[]);
  return (
  <section>
  <div className="overflow-hidden w-full bg-transparent py-4">
    <div className="relative w-full">
      {/* Inline animation style */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(400%); }
            100% { transform: translateX(-200%); }
          }
        `}
      </style>

      <div
        className="flex w-max animate-scroll"
        style={{
          animation: "scroll 10s linear infinite",
        }}
      >
        {sponsors?.map(({ Logo, CompanyName }, index) => (
          <img
            key={index}
            src={BaseURL + Logo.url}
            alt={CompanyName}
            className="h-[50px] w-auto mx-6"
          />
        ))}
      </div>
    </div>
  </div>
</section>

  )
}

export default SponsorsInfiniteScroll
