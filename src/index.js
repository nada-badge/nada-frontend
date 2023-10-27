import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BottomNav from './components/bar/BottomNav';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/bar/Header';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Mobile, PC } from './styles/Responsive.js';
import './styles/common.scss';
import authSlice from './modules/auth';
import calendarSlice from './modules/calendar';
import './styles/common.scss';
import activitySlice from './modules/ManageActivity';
import barStatusSlice from './modules/barStatus';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    activity: activitySlice.reducer,
    barStatus: barStatusSlice.reducer,
  },
  devTools: true,
});

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Mobile>
        <Header />
        <App />
        <BottomNav />
      </Mobile>
      <PC>
        <Header />
        <App />
        <BottomNav />
      </PC>
    </BrowserRouter>
  </Provider>,
);
