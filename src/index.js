import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Mobile, PC } from './styles/Responsive.js';
import './index.css';
import App from './App';
import ModalContainer from './components/common/usedInModal/ModalContainer.js';
import BottomNav from './components/bar/BottomNav';
import Header from './components/bar/Header';
import authSlice from './modules/auth';
import userSlice from './modules/user';
import activitySlice from './modules/activity';
import barSlice from './modules/bar';
import filterSlice from './modules/filter.js';
import postWriteSlice from './modules/community/postWrite.js';
import PostDetailSlice from './modules/community/postDetail.js';
import { modalSlice } from './modules/community/modal.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/common.scss';
import './styleguide.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    activity: activitySlice.reducer,
    bar: barSlice.reducer,
    modal: modalSlice.reducer,
    filter: filterSlice.reducer,
    postwrite: postWriteSlice.reducer,
    postdetail: PostDetailSlice.reducer,
  },
  devTools: true,
});

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <Mobile>
          <Header />
          <App />
          <ModalContainer />
          <BottomNav />
        </Mobile>
        <PC>
          <Header />
          <App />
          <ModalContainer />
          <BottomNav />
        </PC>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
);
