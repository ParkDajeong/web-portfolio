import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
  a:link {
    color: #4b70fd;
  }
  a:visited {
    color: #8c59b9;
  }

  h2 {
    font-size: 2rem;
    font-family: "Lora", serif;
    font-style: italic;
  }

  @media only screen and (max-width: 768px) {
    h2 {
      text-align: center;
    }
  }
`;

export default GlobalStyle;
