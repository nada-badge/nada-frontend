import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './testpage/home';
import Community from './testpage/Community';
import Badge from './testpage/badge';
import Activity from './testpage/activity';
import MyPage from './testpage/myPage';
import Communityy from './testpage/Community2';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BoardList from './routes/BoardList';
//import Home from './routes/Home';
import React from 'react';
import BoardDetail from './routes/BoardDetail';
import BoardWrite from './routes/BoardWrite';
import LogInSelect from './pages/auth/LoginSelect';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={<LogInSelect />} />
          <Route path="/login/personal" element={<LoginPage />} />
          <Route path="/login/team" element={<LoginPage />} />
          <Route path="/register/personal" element={<RegisterPage />} />
          <Route path="/register/team" element={<RegisterPage />} />

          <Route path="/" element={<Home />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/board/:_id" element={<BoardDetail />} />
          <Route path="/write" element={<BoardWrite />} />

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
}

export default App;
