import Project from "./ProjectItem";

const Projects = () => {
  return (
    <div className="flex flex-col max-w-5xl my-12 mx-auto p-10 border">
      <h2 className="text-2xl text-cherry p-0">Portfolio </h2>
      <span className="text-base">▪ My Projects</span>
      <div>
        <Project />
      </div>
    </div>
  );
};

export default Projects;
