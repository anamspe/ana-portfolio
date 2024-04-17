const About = () => {
  return (
    <section className="flex flex-col max-w-5xl mt-2 mx-auto p-10 " id="about">
      <h2 className="text-4xl mt-12 font-arima font-bold text-cherry ">About me</h2>
      <span className="mx-6 font-wellfleet">▪ A little bit about myself</span>
      <div className="max-w-3xl mt-10 mx-auto">
        <p className="text-center">
          Hi! I'm Ana Franco. <span className="font-emoji">👋</span>
        </p>
        <p className="my-4">
          I'm a Junior Full Stack Developer, with a background in Communications
          and Video Editing. I have a big aptitude for storytelling, which was
          largely practiced during my time as a video editor, but I've recently
          decided to dive deep into the world of web development. My first
          connection with coding was when as a teenager, I kept a blog and
          decided it was time to learn at least the basics so I had my own input
          in how my blog looked. Since then, I've exercised my creativity in
          many different ways, but coding was always something I wanted to get
          back to. Now, armed with a full-stack web development diploma from
          Lighthouse Labs, I'm eager to expand my skills as a developer, and
          also make use of skills from my past works to create innovative
          products and engaging user experiences.
        </p>
        <div>
          <p className="text-xl text-bold font-wellfleet">Education</p>
          <p>
            <span className="font-emoji">🎓</span> Full Stack Web Development
            Diploma - Lighthouse Labs
          </p>
          <p>
            <span className="font-emoji">🎓</span> Television and Video
            Production Diploma - British Columbia Institute of Technology (BCIT)
          </p>
          <p>
            <span className="font-emoji">🎓</span> Bachelor's Degree in
            Communications - Universidade Federal do Maranhão (Brazil)
          </p>
        </div>
      </div>

      <div className="flex mt-12 gap-6 justify-center">
        <div className="p-6 bg-tyrian rounded-lg max-w-xs">
          <h2 className="text-xl text-bold font-wellfleet text-center">
            Journey & Identity
          </h2>
          <p className="text-sm my-4">
            I was born in Brazil but now I proudly call Canada home. My journey
            as an immigrant has had a big influence on my work, awarding me
            diverse perspectives and an appreciation for cultural exchange.
          </p>
          <p className="text-sm my-4">
            I'm genuinely excited about connecting with people, exchanging ideas
            and making meaningful contributions to my work and community. I like
            bringing a cheerful and enthusiastic approach to my work, because I
            believe that a positive mindset plays a big role in our confidence
            and competence.
          </p>
        </div>

        <div className="p-6 bg-tyrian rounded-lg max-w-xs">
          <h2 className="text-xl text-bold font-wellfleet text-center">
            Interests & Hobbies
          </h2>
          <p className="text-sm my-4">
            Beyond coding, I'm a video games, music, and cinema lover. Exploring
            art and technology and finding common points between them fuel my
            creativity, whether I'm creating smart code or editing my personal
            video content. When not in front of a screen, I also enjoy road
            trips - my favourite way of exploring Canada's natural wonders - and
            baking the most delicious breads and desserts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
