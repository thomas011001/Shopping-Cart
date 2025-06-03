import { createGlobalStyle } from "styled-components";
import RobotoRegular from "../assets/fonts/Roboto-VariableFont_wdth,wght.ttf";
import RobotoItalic from "../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular}) format("truetype");
    font-weight: 100 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoItalic}) format("truetype");
    font-weight: 100 900;
    font-style: italic;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
background: linear-gradient(-135deg, #ffffff, #f0f6ff, #339af0);

    position: relative;
    font-family: "Roboto", sans-serif;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
