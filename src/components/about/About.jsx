import React from "react";
import { Section, Profile, Contact, MobileContact, ContactItem } from "./About.style";
import profile from "../../images/profile.png";
import phone from "../../images/contact/phone.png";
import mail from "../../images/contact/mail.png";
import github from "../../images/contact/github.png";

function About() {
  return (
    <Section>
      <h2>About me</h2>
      <Profile>
        <img src={profile} alt="박다정 증명사진" />
        <div>
          <h3>박다정</h3>
          <span>FrontEnd Developer</span>
          <Contact>
            <li>
              <img src={phone} alt="전화" />
              <a href="tel:010-8324-6601">010-8324-6601</a>
            </li>
            <li>
              <img src={mail} alt="이메일" />
              <a href="mailto:yswk0901@gmail.com">yswk0901@gmail.com</a>
            </li>
            <li>
              <img src={github} alt="깃허브" />
              <a //
                href="https://github.com/ParkDajeong"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ParkDajeong
              </a>
            </li>
          </Contact>
          <MobileContact>
            <ContactItem //
              href="tel:010-8324-6601"
              tooltip="010-8324-6601"
            >
              <img src={phone} alt="전화" />
            </ContactItem>
            <ContactItem //
              href="mailto:yswk0901@gmail.com"
              tooltip="yswk0901@gmail.com"
            >
              <img src={mail} alt="이메일" />
            </ContactItem>
            <ContactItem //
              href="https://github.com/ParkDajeong"
              target="_blank"
              rel="noopener noreferrer"
              tooltip="github.com/ParkDajeong"
            >
              <img src={github} alt="깃허브" />
            </ContactItem>
          </MobileContact>
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
