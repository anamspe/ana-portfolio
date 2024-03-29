const NavBar = () => {
  return (
    <div className="h-14 bg-tyrian flex justify-around">
      <nav className="flex" aria-label="logo">
        {/* <img src="../../img/AnaFrancoLogo.png" alt="" className="h-14"/> */}
        <div className="font-arima font-bold text-3xl p-3 pl-1">Ana Franco</div>
      </nav>
      <nav className="flex gap-8 text-cherry content-center self-center font-bold" aria-label="main">
        <a href="#projects" className="hover:bg-cadet-800 hover:text-tyrian px-3 py-2 rounded-full"> Projects</a>
        <a href="#skills" className="hover:bg-cadet-800 hover:text-tyrian px-3 py-2 rounded-full"> Skills</a>
        <a href="#about" className="hover:bg-cadet-800 hover:text-tyrian px-3 py-2 rounded-full"> About Me</a>
        <a href="#contact" className="hover:bg-cadet-800 hover:text-tyrian px-3 py-2 rounded-full"> Contact</a>
      </nav>
    </div>
  );
};

export default NavBar;
