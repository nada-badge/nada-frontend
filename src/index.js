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
import authSlice from './modules/redux/auth.js';
import activitySlice from './modules/redux/activity.js';
import barSlice from './modules/redux/bar.js';
import filterSlice from './modules/redux/filter.js';
import postWriteSlice from './modules/redux/community/postWrite.js';
import PostDetailSlice from './modules/redux/community/postDetail.js';
import { modalSlice } from './modules/redux/modal.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/common.scss';
import './styleguide.css';
import searchSlice from './modules/search/search.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    activity: activitySlice.reducer,
    bar: barSlice.reducer,
    modal: modalSlice.reducer,
    filter: filterSlice.reducer,
    postwrite: postWriteSlice.reducer,
    postdetail: PostDetailSlice.reducer,
    search: searchSlice.reducer,
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
