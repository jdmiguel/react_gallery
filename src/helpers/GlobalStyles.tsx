import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 15px;
    color: #2f3235;
    background-color: #F3F3F3;
  }

  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
  }

  #root{
    overflow: auto;
  }
`;