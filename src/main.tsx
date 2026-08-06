import { createRoot } from "react-dom/client";
import "./index.css";
import { ContentProvider } from "./content";
import { ThemeProvider } from "./theme";
import { createElement } from "react";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  createElement(ThemeProvider, null,
    createElement(ContentProvider, null,
      createElement(App)
    )
  )
);
