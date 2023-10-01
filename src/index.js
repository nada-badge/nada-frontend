import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './modules/auth';
import scheduleSlice from './modules/schedule';
import calendarSlice from './modules/calendar';
import './styles/common.scss';
import { Mobile, PC } from './styles/Responsive';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    schedule: scheduleSlice.reducer,
    calendar: calendarSlice.reducer,
  },
  devTools: true,
});

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Mobile>
        <App />
      </Mobile>
      <PC>
        <App />
      </PC>
    </BrowserRouter>
  </Provider>,
);
