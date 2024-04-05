import projects from "../assets/projects";

const Project = () => {
  const projectsKeys = Object.keys(projects)
  const projectSection = projectsKeys.map(item => {
    const project = projects[item];

    return (
      <div key={item} className="border">
        <div>
          <img src={project.img} alt="" className="w-lg h-60 rounded-3xl" />
        </div>
        <div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          {project.website && <a href={project.website}>Live Website</a>}
          <a href={project.repoLink}>Repo Link</a>
          <ul>
            {project.stack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  })

  return <div>{projectSection}</div>;
};

export default Project;
