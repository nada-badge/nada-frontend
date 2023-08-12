import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ActivityList from './routes/ActivityList';
import Home from './routes/Home';
import React from 'react';
import ActivityDetail from './routes/ActivityDetail';
import ActivityWrite from './routes/ActivityWrite';
import ActivityUpdate from './routes/ActivityUpdate';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/Activity" element={<ActivityList />} />
        <Route path="/Activity/:_id" element={<ActivityDetail />} />
        <Route path="/ActivityWrite" element={<ActivityWrite />} />
        <Route path="/ActivityUpdate" element={<ActivityUpdate />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
