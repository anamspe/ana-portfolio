import projects from "../assets/projects";
import icons from "../assets/icons";
import { Tooltip } from "react-tooltip";

const Project = () => {
  const projectsKeys = Object.keys(projects);
  const projectSection = projectsKeys.map((item) => {
    const project = projects[item];

    return (
      <div key={item} className="flex flex-col sm:flex-row p-4 gap-5">
        <div className="sm:w-1/3">
          <img
            src={project.img}
            alt={project.name}
            className="h-60 w-full rounded-lg m-2 border-2 border-cherry-400"
          />
        </div>
        <div className="sm:w-2/3">
          <h1 className="text-2xl text-center sm:text-left mb-2">{project.name}</h1>
          <p className="mb-6">{project.description}</p>
          {project.website && (
            <a
              href={project.website}
              className="bg-tyrian hover:bg-tyrian-600 active:bg-tyrian-800 p-2 mr-2 rounded-md hover:ease-in-out transition-all duration-500"
              target="_blank"
            >
              Live Website
            </a>
          )}
          <a
            href={project.repoLink}
            className="bg-tyrian hover:bg-tyrian-600 active:bg-tyrian-800 p-2 rounded-md hover:ease-in-out transition-all duration-500"
            target="_blank"
          >
            Repo
          </a>
          <ul className="mt-5">
            {project.stack.map((tech, index) => (
              <li
                key={index}
                className="display: inline-block transition-all duration-500 ease-in-out hover:opacity-70"
              >
                <img
                  className="size-9 bg-cadet-700 bg-opacity-20 mr-2 p-1 rounded"
                  src={icons[tech]?.src}
                  alt={icons[tech]?.alt}
                  title={icons[tech]?.alt}
                  data-tooltip-id="skill-tt"
                  data-tooltip-content={icons[tech]?.alt}
                  data-tooltip-delay-show={300}
                />
                <Tooltip id="skill-tt" place="bottom-start" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  });

  return <div>{projectSection}</div>;
};

export default Project;
