import React from "react";
import { Section } from "./About.style";
import profile from "../images/profile.png";

function About() {
  return (
    <Section>
      <h1>About me</h1>
      <div>
        <img src={profile} alt="박다정 증명사진" />
        <div>
          <h2>박다정</h2>
          <span>FrontEnd Developer</span>
          <div>
            <span>전화번호</span>
            <span>메일 주소</span>
            <span>깃허브 주소</span>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, pariatur accusantium! Quidem iste nam ipsa magni? Eveniet, illum! In vitae
        architecto veritatis odio culpa voluptatibus adipisci. Quidem quos optio dolorem. Quidem harum est nulla recusandae dolorum commodi. Ab quas
        optio id, nemo nostrum facere ea! Beatae autem sunt dignissimos facilis?
      </p>
    </Section>
  );
}

export default About;
