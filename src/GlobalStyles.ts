import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

export const GlobalStyle = createGlobalStyle<Props>`
  * {
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.colors.foreground};
    font-family: ${(props) => props.theme.fontFamily};
  }
`;
