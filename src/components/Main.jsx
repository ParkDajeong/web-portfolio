import React from "react";
import { MainContainer } from "./Main.style";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
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
