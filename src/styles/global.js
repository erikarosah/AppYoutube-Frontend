import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({theme}) => theme.COLORS.BLACK};
    font-family: 'Roboto', sans-serif;
  }

  button, a {
    cursor: pointer;
  } 
`;
 
export default GlobalStyle;