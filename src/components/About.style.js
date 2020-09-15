import styled from "styled-components";

const Section = styled.section`
  width: 1000px;
  margin: auto;

  p {
    margin: 1.2rem 1.5rem 1rem;
  }
`;

const Profile = styled.div`
  display: flex;
  margin: 0 1.5rem;

  & > img {
    width: 180px;
    border-radius: 5px;
  }
  & > div {
    width: 100%;
    padding: 0 20px;
  }
  h3 {
    font-size: 1.7rem;
    margin-bottom: 5px;
  }
`;

const Contact = styled.ul`
  li {
    display: flex;
    align-items: center;
    padding: 3px 0;
  }

  li > img {
    width: 20px;
    margin-right: 7px;
  }
`;

export { Section, Profile, Contact };
