import React from "react";
import "./index.css";
import App from "./App";
import BottomNav from "./BottomNav";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BottomNav /> 
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
);
