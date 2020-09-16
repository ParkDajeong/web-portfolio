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
    display: inline-block;
    font-size: 2rem;
    font-family: "Lora", serif;
    font-style: italic;
    background: linear-gradient(to top, #b2dbba 40%, transparent 40%);
  }
`;

export default GlobalStyle;
