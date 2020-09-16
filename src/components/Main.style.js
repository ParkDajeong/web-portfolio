import styled from "styled-components";

const MainContainer = styled.section`
  position: relative;
  background-color: white;
  margin-top: 100vh;
  padding-top: 50px;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;

  @media only screen and (max-width: 767px) {
    & > div {
      padding: 0 2%;
    }
  }
  @media only screen and (min-width: 768px) {
    & > div {
      padding: 0 5%;
    }
  }
  @media only screen and (min-width: 992px) {
    & > div {
      padding: 0 9%;
    }
  }
  @media only screen and (min-width: 1200px) {
    & > div {
      padding: 0 15%;
    }
  }
`;

export { MainContainer };
