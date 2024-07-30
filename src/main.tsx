import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/index.css";
import GlobalValContextProvider from "@/context/globalVal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalValContextProvider>
      <App />
    </GlobalValContextProvider>
  </React.StrictMode>
);
