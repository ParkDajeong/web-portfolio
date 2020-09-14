import React from "react";
import { Section, SkillSet } from "./Skills.style";
import html_logo from "../images/skills/HTML_logo.png";
import css_logo from "../images/skills/CSS_logo.png";
import js_logo from "../images/skills/JS_logo.png";
import react_logo from "../images/skills/react_logo.png";
import redux_logo from "../images/skills/redux_logo.png";
import sc_logo from "../images/skills/styled-components_logo.png";

function Skills() {
  return (
    <Section>
      <h2>Skills</h2>
      <SkillSet>
        <li>
          <img src={html_logo} alt="HTML5" />
          <span>HTML5</span>
        </li>
        <li>
          <img src={css_logo} alt="CSS" />
          <span>CSS</span>
        </li>
        <li>
          <img src={js_logo} alt="JavaScript" />
          <span>JavaScript</span>
        </li>
        <li>
          <img src={react_logo} alt="React" />
          <span>React</span>
        </li>
        <li>
          <img src={redux_logo} alt="Redux" />
          <span>Redux</span>
        </li>
        <li>
          <img src={sc_logo} alt="Styled-Components" />
          <span>Styled-Components</span>
        </li>
        {/* TypeScript, Sass, Node.js, Express, MongoDB, MySQL */}
      </SkillSet>
    </Section>
  );
}

export default Skills;
