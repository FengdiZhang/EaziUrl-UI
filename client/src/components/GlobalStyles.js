import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url('/photos/container.jpg');
  background-size: cover;
  background-position: center;
    
  }

  
`;

export default GlobalStyle;
