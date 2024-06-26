import { useState } from "react";
import MobileMenu from "./MobileMenu";

const NavBar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-tyrian md:flex md:justify-around sticky top-0 z-10">
      <nav className="grid text-center md:flex" aria-label="logo">
        <a href="/" className="font-arima font-bold text-3xl p-3">
          Ana Franco 
        </a>
      </nav>
      <a
            href="https://ana-game-portfolio.vercel.app/"
            target="_blank"
          >
            <i className="fa-solid fa-gamepad hidden md:block text-3xl mt-3 hover:text-cherry-400 active:text-cherry-200 hover:ease-in-out transition-all duration-500"></i>
          </a>
      <nav className="hidden md:flex gap-3 text-cherry content-center self-center font-bold" aria-label="main">
        <a href="#projects" className="hover:bg-cadet-800 hover:text-tyrian hover:ease-in-out transition-all duration-500 px-3 py-2 rounded-full">Projects</a>
        <a href="#skills" className="hover:bg-cadet-800 hover:text-tyrian hover:ease-in-out transition-all duration-500 px-3 py-2 rounded-full">Skills</a>
        <a href="#about" className="hover:bg-cadet-800 hover:text-tyrian hover:ease-in-out transition-all duration-500 px-3 py-2 rounded-full">About Me</a>
        <a href="#contact" className="hover:bg-cadet-800 hover:text-tyrian hover:ease-in-out transition-all duration-500 px-3 py-2 rounded-full">Contact</a>
      </nav>

    <button
        id="hamburger-button"
        className="text-3xl cursor-pointer md:hidden absolute top-0 right-0 mr-3 mt-3"
        onClick={toggleMobileMenu}
      >
        &#9776;
      </button>
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />

    </div>
  );
};

export default NavBar;
