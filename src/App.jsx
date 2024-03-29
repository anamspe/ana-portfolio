import HeroCard from "./components/HeroCard";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className=" bg-eerie_black-100 h-screen">
      <NavBar />
      <HeroCard />
      <hr class="mx-auto w-1/2" />
    </div>
  );
};

export default App;
