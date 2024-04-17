import Project from "./ProjectItem";

const Projects = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto p-10" id="projects">
      <h2 className="text-4xl mt-12 font-arima font-bold text-cherry p-0">
        Portfolio
      </h2>
      <span className="mx-6 font-wellfleet">▪ My Projects</span>
      <div>
        <Project />
      </div>
    </div>
  );
};

export default Projects;
