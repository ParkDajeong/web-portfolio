import styled from "styled-components";

const Section = styled.section`
  padding-top: 30px;
`;

const SkillSet = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 1%;
  }

  li > img {
    width: 110px;
    height: 110px;
  }

  li > span {
    padding: 10px 0;
  }
`;

export { Section, SkillSet };
