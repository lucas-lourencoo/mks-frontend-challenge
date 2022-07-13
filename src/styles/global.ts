import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --white-400: #FFFFFF;
    --white-500: #F9F9F9;
    --white-600: #EEEEEE;
    --gray-200: #bfbfbf;
    --gray-400: #373737;
    --gray-500: #2C2C2C;
    --blue: #0F52BA;
    --black: #000000;
  }

  html {
    font-size: 62.5%;   
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  img{
    max-width: 100%;
  }

  button, input, select, textarea{
    border: 0;
    background: none;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;  
  }
  
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

export default GlobalStyle;
