import styled from "styled-components";

const Section = styled.section`
  width: 1000px;
  margin: auto;
  padding-top: 30px;
`;

const SkillSet = styled.ul`
  display: flex;
  justify-content: space-around;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 15px;
  }

  li > img {
    width: 110px;
    height: 110px;
  }

  li > span {
    font-weight: 500;
    padding: 10px 0;
  }
`;

export { Section, SkillSet };
