import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { store } from "./app/store";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
