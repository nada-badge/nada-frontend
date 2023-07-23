import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import EmailPage from './pages/register/EmailPage';
import PasswordPage from './pages/register/PasswordPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/email" element={<EmailPage />} />
        <Route path="/register/password" element={<PasswordPage />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
