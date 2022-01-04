import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body {
    height: 100vh;
    width: 100vw;
  }

  body {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font: 400 16px Quicksand, sans-serif;
  }
`;
