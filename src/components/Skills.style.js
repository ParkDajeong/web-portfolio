import styled from "styled-components";

const Section = styled.section`
  width: 1000px;
  margin: auto;
`;

const SkillSet = styled.ul`
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 15px;
  }

  li > img {
    width: 100px;
    height: 100px;
  }
`;

export { Section, SkillSet };
