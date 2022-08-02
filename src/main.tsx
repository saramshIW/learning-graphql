import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import client from "./config/apolloClient";
import GlobalContextWrapper from "./context/globalContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalContextWrapper>
        <App />
      </GlobalContextWrapper>
    </ApolloProvider>
  </React.StrictMode>
);
