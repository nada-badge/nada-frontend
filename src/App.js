import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./testpage/home"
import community from "./testpage/community";
import badge from "./testpage/badge";
import activity from "./testpage/activity";
import myPage from "./testpage/myPage";
import communityy from './testpage/community2';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BoardList from './routes/BoardList';
import Home from './routes/Home';
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

          <Route path="/home" Component={Home}  />
          <Route path="/activity" Component={activity} />
          <Route path="/badge" Component={badge} />
          <Route path="/community" Component={community} />
          <Route path="/community/child" Component={communityy} />
          <Route path="/myPage" Component={myPage} />
       </Routes>
      </QueryClientProvider>
    </div>
  );
}
