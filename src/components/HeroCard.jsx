const HeroCard = () => {
  return (
    <div
      className="flex flex-col-reverse sm:flex-row gap-16 sm:gap-10 sm:my-12 p-10 justify-center items-center section-min-height scroll-mt-20"
      id="hero"
    >
      <i className="fa-solid fa-circle-arrow-down text-2xl animate-bounce sm:hidden"></i>
      <div className="text-base text-center sm:text-left">
        <p>Welcome! My name is</p>
        <p className="text-5xl font-bold font-arima py-2">Ana Franco</p>

        <p className="sm:w-2/3">
          I'm a Full Stack Software Developer based in Vancouver, Canada
        </p>
        <div className="flex my-5 py-5 items-center justify-evenly sm:justify-normal text-5xl sm:text-4xl gap-5">
          <a href="https://github.com/anamspe" target="_blank" title="GitHub">
            <i className="fa-brands fa-github hover:text-cherry-400 active:text-cherry-200 hover:ease-in-out transition-all duration-500"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anamspe/"
            target="_blank"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin hover:text-cherry-400 active:text-cherry-200 hover:ease-in-out transition-all duration-500"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1T9eviciaMyrbHl_fOqfhGzcNzGgRY_p3/view?usp=sharing"
            target="_blank"
            title="Resume"
          >
            <i className="fa-solid fa-file-lines hover:text-cherry-400 active:text-cherry-200 hover:ease-in-out transition-all duration-500"></i>
          </a>
          <a href="mailto:anamspe.fr@gmail.com" target="_blank" title="email">
            <i className="fa-solid fa-envelope hover:text-cherry-400 active:text-cherry-200 hover:ease-in-out transition-all duration-500"></i>
          </a>
        </div>
      </div>
      <div>
        <img
          src="../../img/ana-profile.JPG"
          alt="Profile Ana Franco"
          className=" max-h-60 sm:max-h-80 rounded-full"
        />
      </div>
    </div>
  );
};

export default HeroCard;
