import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BottomNav from './containers/BottomNav';
import { BrowserRouter } from 'react-router-dom';
import Header from './containers/Header';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Mobile, PC } from './styles/Responsive.js';
import './styles/common.scss';
import authSlice from './modules/auth';
import activitySlice from './modules/activity';
import barStatusSlice from './modules/barStatus';
import calendarSlice from './modules/calendar';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    activity: activitySlice.reducer,
    barStatus: barStatusSlice.reducer,
    calendar: calendarSlice.reducer,
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
