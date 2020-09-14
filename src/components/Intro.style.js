import styled from "styled-components";

const Section = styled.section`
  background-color: #bbd196;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;

  img {
    border-radius: 50%;
  }
`;

const DescBox = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.6rem;
  }
`;

export { Section, DescBox };
