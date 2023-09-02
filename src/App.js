import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BoardList from './routes/BoardList';
import Home from './pages/Home';
import React from 'react';
import BoardDetail from './routes/BoardDetail';
import BoardWrite from './routes/BoardWrite';
import LogInSelect from './pages/auth/LoginSelect';

const queryClient = new QueryClient();

const App = () => {
  return (
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
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
