const About = () => {
  return (
    <div className="flex flex-col max-w-5xl mt-2 mx-auto p-10" id="about">
      <h2 className="text-4xl font-arima font-bold text-cherry p-0 mb-4">
        About me
      </h2>
      <span className="mx-6">▪ Bio</span>
      <div>
        🔹 About Me: With a background in Communications and a knack for
        storytelling honed during my time as a video editor, I've recently
        embarked on an exciting journey into the world of web development. Armed
        with diplomas in television and video production from BCIT and
        full-stack web development from Lighthouse Labs, I'm passionate about
        leveraging technology to create innovative solutions and engaging user
        experiences.
      </div>{" "}
      <div>
        {" "}
        🔹 Journey & Identity: Born in vibrant Brazil and now proudly calling
        Canada home, my journey as an immigrant has infused my work with diverse
        perspectives and a deep appreciation for cultural exchange. Achieving
        Canadian citizenship last year was a milestone that solidified my
        commitment to contributing to and thriving in my adopted community.
      </div>{" "}
      <div>
        {" "}
        🔹 Interests & Hobbies: Beyond coding, I'm an avid enthusiast of video
        games, music, and cinema. Exploring the intersections of art and
        technology fuels my creativity, whether I'm crafting code or immersing
        myself in the latest indie film or gallery exhibit. When not in front of
        a screen, you'll likely find me planning my next adventure, whether it's
        a road trip to explore Canada's natural wonders or a journey to discover
        new culinary delights around the globe.
      </div>
    </div>
  );
};

export default About;
