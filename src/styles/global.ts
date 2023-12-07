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

  button {
    border: none;
  }

  a {
    text-decoration: none;
  }

  * {
    scrollbar-width: 10px;
    scrollbar-color: #8c8c8c;
  }

  *::-webkit-scrollbar{
      width: 8px;
  }
    
  *::-webkit-scrollbar-thumb{
    background-color: #8c8c8c;
    border-radius: 20px;
  }
`;
 
export default GlobalStyle;