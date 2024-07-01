import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StorContextProvider from "./component/Context/StorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StorContextProvider>
      <App />
    </StorContextProvider>
  </BrowserRouter>
);
