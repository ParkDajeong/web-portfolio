import React from "react";
import { Section, Profile, Contact } from "./About.style";
import profile from "../images/profile.png";

function About() {
  return (
    <Section>
      <h2>About me</h2>
      <Profile>
        <img src={profile} alt="박다정 증명사진" />
        <div>
          <h2>박다정</h2>
          <span>FrontEnd Developer</span>
          <Contact>
            <li>
              <a href="tel:010-8324-6601">010-8324-6601</a>
            </li>
            <li>
              <a href="mailto:yswk0901@gmail.com">yswk0901@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/ParkDajeong">github.com/ParkDajeong</a>
            </li>
          </Contact>
        </div>
      </Profile>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, pariatur accusantium! Quidem iste nam ipsa magni? Eveniet, illum! In vitae
        architecto veritatis odio culpa voluptatibus adipisci. Quidem quos optio dolorem. Quidem harum est nulla recusandae dolorum commodi. Ab quas
        optio id, nemo nostrum facere ea! Beatae autem sunt dignissimos facilis?
      </p>
    </Section>
  );
}

export default About;
