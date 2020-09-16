import styled from "styled-components";

const Section = styled.section`
  padding-top: 30px;
`;

const SkillSet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 16.666%;

    div {
      width: 60%;
      height: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }

    span {
      padding: 10px 0;
    }
  }

  @media only screen and (max-width: 768px) {
    li {
      width: 25%;
      margin: 0.8rem 0;

      div {
        width: 50%;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    li {
      width: 50%;

      div {
        width: 45%;
      }
    }
  }
`;

const SkillLogo = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 100px;

  /* img {
    visibility: hidden;
  } */
`;

export { Section, SkillSet, SkillLogo };
