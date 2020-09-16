import React from "react";
import { MainContainer } from "./Main.style";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "./Footer";

function Main() {
  return (
    <MainContainer>
      <div>
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </MainContainer>
  );
}

export default Main;
