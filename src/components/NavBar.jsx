const NavBar = () => {
  return (
    <div className="bg-tyrian flex justify-around sticky top-0 z-10">
      <nav className="flex" aria-label="logo">
        {/* <img src="../../img/AnaFrancoLogo.png" alt="" className="h-14"/> */}
        <a href="#hero" className="font-arima font-bold text-3xl p-3">
          {/* <span className="text-2xl font-emoji">👩‍💻</span>  */}
          Ana Franco 
        </a>
      </nav>
      <nav className="flex gap-3 text-cherry content-center self-center font-bold" aria-label="main">
        <a href="#projects" className="hover:bg-cadet-800 hover:text-tyrian hover:ease-in-out transition-all duration-500 px-3 py-2 rounded-full">Projects</a>
        <a href="#skills" className="hover:bg-cadet-800 hover:text-tyrian hover:ease-in-out transition-all duration-500 px-3 py-2 rounded-full">Skills</a>
        <a href="#about" className="hover:bg-cadet-800 hover:text-tyrian hover:ease-in-out transition-all duration-500 px-3 py-2 rounded-full">About Me</a>
        <a href="#contact" className="hover:bg-cadet-800 hover:text-tyrian hover:ease-in-out transition-all duration-500 px-3 py-2 rounded-full">Contact</a>
      </nav>
    </div>
  );
};

export default NavBar;
