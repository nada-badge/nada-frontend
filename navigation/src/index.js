import React from "react";
import "./index.css";
import App from "./App";
import BottomNav from "./BottomNav";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Mobile, PC } from './styles/Responsive.js';
import "./styles/common.scss"




import HeaderStatusSlice from "./modules/headerStatus";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({  
  reducer: { headerStatus: HeaderStatusSlice.reducer},
  devTools: true,
});


root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Mobile>
            <Header/>
            <App /> 
            <BottomNav /> 
          </Mobile>
          <PC>
            <Header/>
            <App /> 
            <BottomNav /> 
          </PC>
        </BrowserRouter>  
      </Provider>
    </React.StrictMode>
);
