import React from "react";
import { Section, TimeLine, Card } from "./Projects.style";
import Movie from "../../images/projects/Movie.PNG";

function Projects() {
  return (
    <Section>
      <h2>Projects</h2>
      <TimeLine date="2020.08">
        <h3>Movies</h3>
        <p>The Movie DB API를 이용한 영화 정보 사이트</p>
        <Card //
          href="https://github.com/ParkDajeong/movie.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Movie} alt="Movie 프로젝트 홈 스크린샷" />
          <div>GitHub로 이동하기 🚀</div>
        </Card>
      </TimeLine>
    </Section>
  );
}

export default Projects;
