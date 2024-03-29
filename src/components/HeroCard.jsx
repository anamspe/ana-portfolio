const HeroCard = () => {
  return (
    <div className="flex gap-10 my-12 p-10 justify-center items-center">
      <div className="text-base">
        <p>Welcome! My name is</p>
        <p className="text-5xl font-bold font-arima py-2">Ana Franco</p>

        <p className="w-2/3">
          I'm a Full Stack Software Developer based in Vancouver, Canada
        </p>
        <div className="flex my-5 py-5 items-center text-3xl gap-5">
          <a href="https://github.com/anamspe" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/anamspe/" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
          <a href="http://" title="Resume"><i class="fa-solid fa-file-lines"></i></a>
          <a href="mailto:anamspe.fr@gmail.com" target="_blank" title="email"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>
      <div>
        <img
          src="../../img/ana-profile.JPG"
          alt="Profile Ana Franco"
          className="max-h-80 rounded-full"
        />
      </div>
    </div>
  );
};

export default HeroCard;