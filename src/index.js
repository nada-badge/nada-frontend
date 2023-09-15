import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styleguide.css";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./module/ModalStatus";
import { Provider } from "react-redux";
import ModalContainer from "./components/Modal/ModalContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rootReducer = combineReducers({
  modal: modalSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

root.render(
  <Provider store={store}>
    <App />
    <ModalContainer />
  </Provider>
);
