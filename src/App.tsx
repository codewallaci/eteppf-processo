import { useState } from "react";
import CarouselComp from "./components/CarouselComp";
import Cursos from "./components/Cursos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Tutorial from "./components/Tutorial";
import Soon from "./pages/Soon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <CarouselComp />
      <Hero />
      <Tutorial />
      <Cursos />
      <Footer />
    </>
  );
}

export default App;
