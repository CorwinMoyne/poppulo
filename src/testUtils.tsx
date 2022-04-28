import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";

interface Props {
  children: JSX.Element;
}

const AllTheProviders: React.FunctionComponent<Props> = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
