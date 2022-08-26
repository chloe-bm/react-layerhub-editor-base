import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as LayerhubProvider } from "@layerhub-io/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <LayerhubProvider>
      <App />
    </LayerhubProvider>
  // </React.StrictMode>
);
