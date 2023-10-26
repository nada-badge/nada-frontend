import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Community from './testpage/community';
import Badge from './testpage/badge';
import Activity from './testpage/activity';
import MyPage from './testpage/myPage';
import Communityy from './testpage/community2';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ManageHome from './pages/Manage/ManageHome';
import ManageActivityDetail from './pages/Manage/ManageActivityDetail';
import ManageActivityWrite from './pages/Manage/ManageActivityWrite';
import ManageActivityList from './pages/Manage/ManageActivityList';
import LogInSelect from './pages/auth/LoginSelect';
import CalendarPage from './pages/CalendarPage';
import ActivityPage from './pages/activity/ActivityPage';
import DetailActivityPage from './pages/activity/DetailActivityPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={<LogInSelect />} />
          <Route path="/login/personal" element={<LoginPage />} />
          <Route path="/login/team" element={<LoginPage />} />
          <Route path="/register/personal" element={<RegisterPage />} />
          <Route path="/register/team" element={<RegisterPage />} />

          <Route path="/manage" element={<ManageHome />} />
          <Route path="/manage/Activity" element={<ManageActivityList />} />
          <Route
            path="/manage/Activity/:_id"
            element={<ManageActivityDetail />}
          />
          <Route
            path="/manage/ActivityWrite"
            element={<ManageActivityWrite />}
          />

          <Route path="/badge" element={<Badge />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Community/child" element={<Communityy />} />
          <Route path="/myPage" element={<MyPage />} />

          <Route path="/calendar" element={<CalendarPage />} />

          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/activity/detail" element={<DetailActivityPage />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
