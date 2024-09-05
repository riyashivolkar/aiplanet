import "./App.css";
import ChallengesMenu from "./components/ChallengesMenu";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import { FilterProvider } from "./context/FilterContext"; // Update the path accordingly

function App() {
  return (
    <div className=" overflow-x-hidden ">
      <FilterProvider>
        <Header />
        <Hero />
        <Info />
        <ChallengesMenu />
      </FilterProvider>
    </div>
  );
}

export default App;
