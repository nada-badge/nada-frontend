import './App.css';
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
import ManageActivityList from './routes/ManageActivityList';
import React from 'react';
import ManageActivityDetail from './routes/ManageActivityDetail';
import ManageActivityWrite from './routes/ManageActivityWrite';
import ManageActivityUpdate from './routes/ManageActivityUpdate';
import LogInSelect from './pages/auth/LoginSelect';
import ManageHome from './routes/ManageHome';

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
          <Route
            path="/manage/ActivityUpdate"
            element={<ManageActivityUpdate />}
          />

          <Route path="/home" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/badge" element={<Badge />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Community/child" element={<Communityy />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
