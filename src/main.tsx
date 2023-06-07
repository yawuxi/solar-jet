import * as React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Suspense } from "react";
import { App } from "./App";
import "./index.module.scss";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);
