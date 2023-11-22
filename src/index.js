import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Mobile, PC } from './styles/Responsive.js';
import './index.css';
import App from './App';
import ModalContainer from './components/Modal/Community/ModalContainer';
import BottomNav from './components/bar/BottomNav';
import Header from './components/bar/Header';
import authSlice from './modules/auth';
import calendarSlice from './modules/calendar';
import userSlice from './modules/user';
import activitySlice from './modules/activity';
import barSlice from './modules/bar';
import communitySlice from './modules/Community/community';
import postWriteSlice from './modules/Community/postWrite';
import PostDetailSlice from './modules/Community/postDetail.js';
import { modalSlice } from './modules/Community/modal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/common.scss';
import './styleguide.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    calendar: calendarSlice.reducer,
    activity: activitySlice.reducer,
    bar: barSlice.reducer,
    modal: modalSlice.reducer,
    community: communitySlice.reducer,
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
