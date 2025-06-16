import  FacebookIcon  from '../assets/icons/facebook.svg?react';

const NavBar = () => {
  return (
    <nav className="px-[60px] pt-[30px] flex justify-between bg-amber-500">
      <div className=" flex justify-between">
        <div className="">
        <img src="/logo/logo-white.png" alt="logo" />
        </div>
        <div className="flex py-[20px] px-[2em] ">
            <a href="#" className="font-bold px-[1.5em] text-[var(--color-accent)]">Prima</a>
            <a href="#" className="text-[white] font-bold px-[1.5em]">Despre</a>
            <a href="#" className="text-[white] font-bold px-[1.5em]">Proiecte</a>
            <a href="#" className="text-[white] font-bold px-[1.5em]">Noutăti</a>
            <a href="#" className="text-[white] font-bold px-[1.5em]">Contacte</a>
        </div>
      </div>
      <div className="flex">
        <div className="flex">
            <a href="#">face</a>
            <a href="#" ><div className='text-'><FacebookIcon className="w-7 h-6 "  /></div></a>
            <a href="#">face</a>
        </div>
        <div>Rom</div>
        <div>Button</div>
      </div>
    </nav>
  )
}

export default NavBar