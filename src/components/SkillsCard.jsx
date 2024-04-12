import icons from "../assets/icons";

const SkillCategory = ({ title, skills }) => {
  return (
    <div id="skills">
      <h2 className="ms-4 my-4 font-bold underline underline-offset-2">
        {title}
      </h2>
      <ul className="ms-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="inline-block transition-all duration-500 ease-in-out hover:opacity-70"
            title={skill.alt}
          >
            <img
              className="size-12 bg-cadet bg-opacity-50 mr-2 p-1 rounded "
              src={skill.src}
              alt={skill.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = [
    icons["js"],
    icons["ruby"],
    icons["html"],
    icons["css"],
  ];

  const frameworksAndLibraries = [
    icons["react"],
    icons["node"],
    icons["redux"],
    icons["tailwindcss"],
    icons["sass"],
    icons["express"],
    icons["ejs"],
    icons["jquery"],
    icons["rails"],
  ];

  const systemsAndDatabases = [icons["postgresql"], icons["git"]];

  const testingFrameworks = [
    icons["mocha"],
    icons["chai"],
    icons["jest"],
    icons["cypress"],
  ];

  const graphicDesign = [
    icons["illustrator"],
    icons["photoshop"],
    icons["premiere"],
    icons["aftereffects"],
  ];

  return (
    <div className="flex flex-col max-w-5xl mt-2 mx-auto p-10">
      <h2 className="text-4xl font-arima font-bold text-cherry p-0 mb-4">
        Skills
      </h2>
      <SkillCategory
        title="Programming Languages"
        skills={programmingLanguages}
      />
      <SkillCategory
        title="Frameworks & Libraries"
        skills={frameworksAndLibraries}
      />
      <SkillCategory title="Systems & Databases" skills={systemsAndDatabases} />
      <SkillCategory title="Testing Frameworks" skills={testingFrameworks} />
      <SkillCategory title="Graphic Design" skills={graphicDesign} />
    </div>
  );
};

export default Skills;
