import React from "react";
import { SkillLogo } from "./Skills.style";

function SkillItem({ logo, text }) {
  return (
    <li>
      <div>
        <img src={logo} alt={text} />
      </div>
      <span>
        {!text.includes(" ")
          ? text
          : text.split(" ").map((line) => (
              <React.Fragment key={line}>
                {line}
                <br />
              </React.Fragment>
            ))}
      </span>
    </li>
  );
}

export default SkillItem;
