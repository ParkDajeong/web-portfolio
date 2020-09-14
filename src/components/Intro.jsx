import React from "react";
import { Section, DescBox } from "./Intro.style";
import profile from "../images/profile.png";

function Main() {
  return (
    <Section>
      {/* 이미지 나중에 여러개 돌아가게 */}
      <img src={profile} alt="박다정 증명사진" />
      <DescBox>
        <h1>
          안녕하세요,
          <br /> 저는 박다정입니다.
        </h1>
        <h2>현실에 안주하지 않고, 항상 발전하기 위해 노력하는 개발자</h2>
      </DescBox>
    </Section>
  );
}

export default Main;
