import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalContextWrapper from "./context/globalContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalContextWrapper>
      <App />
    </GlobalContextWrapper>
  </React.StrictMode>
);
