import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "./store/store";
import { theme } from "./theme";

interface Props {
  children: JSX.Element;
}

const AllTheProviders: React.FunctionComponent<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>{props.children}</Router>
      </Provider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
