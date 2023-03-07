import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./utils/globalstyle";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./utils/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
