import React from "react";
import { Section, SkillSet } from "./Skills.style";
import SkillItem from "./SkillItem";
import html_logo from "../../images/skills/HTML_logo.png";
import css_logo from "../../images/skills/CSS_logo.png";
import js_logo from "../../images/skills/JS_logo.png";
import react_logo from "../../images/skills/react_logo.png";
import redux_logo from "../../images/skills/redux_logo.png";
import sc_logo from "../../images/skills/styled-components_logo2.png";

function Skills() {
  return (
    <Section>
      <h2>Skills</h2>
      <SkillSet>
        <SkillItem logo={html_logo} text="HTML5" />
        <SkillItem logo={css_logo} text="CSS" />
        <SkillItem logo={js_logo} text="JavaScript" />
        <SkillItem logo={react_logo} text="React" />
        <SkillItem logo={redux_logo} text="Redux" />
        <SkillItem logo={sc_logo} text="Styled Components" />
        {/* TypeScript, Sass, Node.js, Express, MongoDB, MySQL */}
      </SkillSet>
    </Section>
  );
}

export default Skills;
