import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
  }
`;

export default GlobalStyle;
