import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

export const GlobalStyle = createGlobalStyle<Props>`
  * {
    box-sizing: border-box;
  }

  html, body{
    margin: 0;
    min-height: 100vh;
  }

  body {
    color: ${(props) => props.theme.colors.foreground};
    font-family: ${(props) => props.theme.fontFamily};
  }
`;
