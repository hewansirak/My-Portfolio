import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-r from-rose-500 via-pink-500 to-red-500">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
