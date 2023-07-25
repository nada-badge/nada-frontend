import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import EmailPage from './pages/register/EmailPage';
import PasswordPage from './pages/register/PasswordPage';
import BoardList from './routes/BoardList';
import Home from './routes/Home';
import React from 'react';
import BoardDetail from './routes/BoardDetail';
import BoardWrite from './routes/BoardWrite';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/email" element={<EmailPage />} />
        <Route path="/register/password" element={<PasswordPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:_id" element={<BoardDetail />} />
        <Route path="/write" element={<BoardWrite />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
