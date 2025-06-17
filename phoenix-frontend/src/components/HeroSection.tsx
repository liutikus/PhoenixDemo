import MoreBtn from "./buttons/MoreBtn"

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden px-[60px]">
       <video
        // autoPlay
        // loop
        muted
        // playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="videos/cover-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-theme)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-theme)] to-transparent z-10" />

      <div className="relative z-20 flex flex-col justify-center items-start h-full text-white ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 w-[70%] leading-[1.5]">Din solidaritate și dragoste clădim <span className="text-[var(--color-accent)]">destine fericite</span> </h1>
        <MoreBtn/>
      </div>
    </section >
  )
}

export default HeroSection
