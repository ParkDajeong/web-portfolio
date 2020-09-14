import React from "react";
import { Section } from "./Main.style";
import profile from "../images/profile.png";

function Main() {
  return (
    <Section>
      <img src={profile} alt="박다정 증명사진" />
      <div>
        <h1>안녕하세요, 저는 박다정입니다.</h1>
        <h2>나를 나타낼 수 있는 문장...</h2>
      </div>
    </Section>
  );
}

export default Main;
