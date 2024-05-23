const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <section
      id="mobile-menu"
      className={`bg-tyrian w-full text-5xl flex flex-col items-center justify-center fixed top-0 left-0 h-full transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
    >
      <nav className="flex flex-col gap-3 mt-20">
        <a
          href="#projects"
          className="text-white hover:text-cherry-400"
          onClick={toggleMenu}
        >
          Projects
        </a>
        <a
          href="#skills"
          className="text-white hover:text-cherry-400"
          onClick={toggleMenu}
        >
          Skills
        </a>
        <a
          href="#about"
          className="text-white hover:text-cherry-400"
          onClick={toggleMenu}
        >
          About Me
        </a>
        <a
          href="#contact"
          className="text-white hover:text-cherry-400"
          onClick={toggleMenu}
        >
          Contact
        </a>
      </nav>
    </section>
  );
};

export default MobileMenu;
