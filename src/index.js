import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './modules/auth';
import scheduleSlice from './modules/activity';

import Header from './layout/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({  
  reducer: { auth: authSlice.reducer, schedule: scheduleSlice.reducer},
  devTools: true,
});

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </Provider>,
);
