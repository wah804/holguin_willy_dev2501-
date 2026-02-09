import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset and Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #F0F4F8; /* Very light cool gray/blue hint */
    color: #333;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul, ol {
    list-style: none;
  }
  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyles;
