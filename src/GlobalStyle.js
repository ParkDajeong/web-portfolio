import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
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
`;

export default GlobalStyle;
