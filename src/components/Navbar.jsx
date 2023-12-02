import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className=' sm:visible hover:scale-125 w-12 h-12 object-contain rounded-md' />
      </NavLink>
      <nav className='flex flex-col sm:flex-row text-lg gap-3 sm:gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? " hover:scale-125 scale-125 btn" : "hidden sm:inline hover:scale-125 btn" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "hover:scale-125 scale-125 btn" : "hover:scale-125 btn max-h-[40px]"}>
          Portfolio
        </NavLink>
        <NavLink to='/old/' className={({ isActive }) => isActive ? "hover:scale-125 scale-125 btn" : "overflow-hidden hover:scale-125 btn max-h-[40px]"}>
          2D Website
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;