import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { GlobalStyle } from "./GlobalStyles";
import { store } from "./store/store";
import { theme } from "./theme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <ErrorBoundary>
          <Router>
            <App />
          </Router>
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
