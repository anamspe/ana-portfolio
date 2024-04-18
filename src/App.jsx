import About from "./components/AboutCard";
import Contact from "./components/Contact";
import HeroCard from "./components/HeroCard";
import NavBar from "./components/NavBar";
import Projects from "./components/ProjectsCard";
import Skills from "./components/SkillsCard";

const App = () => {
  return (
    <div className=" bg-eerie_black-200 min-h-screen">
      <NavBar />
      <HeroCard />
      <hr className="mx-auto w-1/12" />
      <Projects />
      <hr className="mx-auto w-1/12" />
      <Skills />
      <hr className="mx-auto w-1/12" />
      <About />
      <hr className="mx-auto w-1/12" />
      <Contact />
    </div>
  );
};

export default App;
