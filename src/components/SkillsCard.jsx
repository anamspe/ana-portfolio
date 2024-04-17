import icons from "../assets/icons";
import { Tooltip } from "react-tooltip";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="max-w-48 justify-center">
      <h2 className="mb-4 font-bold min-w-60">{title}</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="transition-all duration-500 ease-in-out hover:opacity-70"
            data-tooltip-id="skill-tt"
            data-tooltip-content={skill.alt}
            data-tooltip-delay-show={300}
          >
            <Tooltip id="skill-tt" place="bottom-start" />
            <img
              className="size-12 bg-cadet-700 bg-opacity-50 m-1 p-1 rounded "
              src={skill.src}
              alt={skill.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = [
    icons["js"],
    icons["html"],
    icons["css"],
    icons["ruby"],
  ];

  const frameworksAndLibraries = [
    icons["react"],
    icons["node"],
    icons["redux"],
    icons["sass"],
    icons["tailwindcss"],
    icons["bootstrap"],
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
    <div className="max-w-7xl mx-auto p-10 place-content-center section-min-height" id="skills">
      <h2 className="text-4xl mt-12 pl-32 font-arima font-bold text-cherry">
        Skills
      </h2>
      <span className="mx-6 pl-32 font-wellfleet">▪ My technical abilities</span>
      <div className="flex p-10 my-10 place-content-around bg-tyrian drop-shadow-sm shadow-paynes rounded-3xl">
        <SkillCategory
          title="Programming Languages"
          skills={programmingLanguages}
        />
        <SkillCategory
          title="Frameworks & Libraries"
          skills={frameworksAndLibraries}
        />
        <SkillCategory
          title="Systems & Databases"
          skills={systemsAndDatabases}
        />
        <SkillCategory title="Testing Frameworks" skills={testingFrameworks} />
        <SkillCategory title="Graphic Design" skills={graphicDesign} />
      </div>
    </div>
  );
};

export default Skills;
