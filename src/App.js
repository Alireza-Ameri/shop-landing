import react from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import Discover from "./Components/Discover/Discover";

const App = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Discover />
    </div>
  );
};

export default App;
