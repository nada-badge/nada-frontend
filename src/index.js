import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./styleguide.css";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./module/Community/ModalStatus";
import { Provider } from "react-redux";
import ModalContainer from "./components/Modal/Community/ModalContainer";
import communitySlice from "./module/Community/CommunityStatus";
import postWriteSlice from "./module/Community/PostWriteStatus";
import PostDetailSlice from "./module/Community/PostDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rootReducer = combineReducers({
  modal: modalSlice.reducer,
  community: communitySlice.reducer,
  postwrite: postWriteSlice.reducer,
  postdetail: PostDetailSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ModalContainer />
    </BrowserRouter>
  </Provider>
);
