const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <section
      id="mobile-menu"
      className={`bg-tyrian w-full text-4xl flex flex-col items-center justify-evenly fixed top-0 left-0 h-full transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
    >
      <i className="fa-solid fa-xmark fixed top-7 right-7 active:text-cherry-400" onClick={toggleMenu}></i>
      <nav className="flex flex-col gap-5 mt-20">
        <a href="/" className="text-white active:text-cherry-400" onClick={toggleMenu}>
          Home
        </a>
        <a href="#projects" className="text-white active:text-cherry-400" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#skills" className="text-white active:text-cherry-400" onClick={toggleMenu}>
          Skills
        </a>
        <a href="#about" className="text-white active:text-cherry-400" onClick={toggleMenu}>
          About Me
        </a>
        <a href="#contact" className="text-white active:text-cherry-400" onClick={toggleMenu}>
          Contact
        </a>
      </nav>
      <nav>
        <a href="https://ana-game-portfolio.vercel.app/" target="_blank">
          <i className="fa-solid fa-gamepad text-5xl mt-3 text-white active:text-cherry-400"></i>
        </a>
      </nav>
    </section>
  );
};

export default MobileMenu;
