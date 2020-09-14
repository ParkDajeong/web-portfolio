import styled from "styled-components";

const Section = styled.section`
  width: 1000px;
  margin: auto;
`;

const Profile = styled.div`
  display: flex;

  & > img {
    width: 180px;
    border-radius: 5px;
  }
  & > div {
    width: 100%;
    padding: 0 20px;
  }
  h2 {
    font-size: 1.8rem;
    margin-bottom: 5px;
  }
`;

const Contact = styled.ul``;

export { Section, Profile, Contact };
