import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="max-w-[1920px] mx-auto w-full">
        <Navbar />
        <Hero />
        <div></div>
      </section>
    </>
  );
}

export default App;
