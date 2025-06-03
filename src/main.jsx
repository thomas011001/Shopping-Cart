import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from "./themes/Global";
import { ThemeProvider } from "styled-components";
import theme from "./themes/themes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>
);
