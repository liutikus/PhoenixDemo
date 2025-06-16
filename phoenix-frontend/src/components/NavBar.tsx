import { ReactComponent as Icon } from '/images/icons/facebook.svg';

const NavBar = () => {
  return (
    <nav className="px-[60px] pt-[30px] flex justify-between bg-amber-500">
      <div className=" flex justify-between">
        <div className="">
        <img src="/images/logo/logo-white.png" alt="logo" />
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
            <a href="#"><img className="text-[var(--color-accent)]" src="/images/icons/facebook.svg" alt="facebook" /></a>
            <a href="#">face</a>
            <a href="#">face</a>
        </div>
        <div>Rom</div>
        <div>Button</div>
      </div>
    </nav>
  )
}

export default NavBar
