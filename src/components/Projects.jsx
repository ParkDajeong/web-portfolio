import React from "react";
import { Section } from "./Projects.style";
import Movie from "../images/projects/Movie.PNG";

function Projects() {
  return (
    <Section>
      <h1>Projects</h1>
      {/* 타임라인처럼 스타일링 */}
      <div>
        <p>2020.08 ~ 2020.08</p>
        <h2>Movie</h2>
        <img src={Movie} alt="Movie 프로젝트 홈 스크린샷" />
        {/* 이미지 마우스 오버 => 깃허브 링크 연결 뜨도록 */}
        <div>
          <a href="#" target="_blank">
            GitHub로 이동하기 🚀
          </a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, suscipit!</p>
      </div>
    </Section>
  );
}

export default Projects;
