import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Community from './testpage/community';
import Badge from './testpage/badge';
import MyPage from './testpage/myPage';
import Communityy from './testpage/community2';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/Manage/HomePage.';
import ActivityDetailPage from './pages/Manage/ActivityDetailPage';
import ActivityWritePage from './pages/Manage/ActivityWritePage.';
import ActivityListPage from './pages/Manage/ActivityListPage.';
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

          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/activity/detail" element={<DetailActivityPage />} />
          <Route path="/" element={<Home />} />

          <Route path="/badge" element={<Badge />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Community/child" element={<Communityy />} />
          <Route path="/myPage" element={<MyPage />} />

          <Route path="/manage" element={<HomePage />} />
          <Route path="/manage/Activity" element={<ActivityListPage />} />
          <Route
            path="/manage/Activity/:_id"
            element={<ActivityDetailPage />}
          />
          <Route path="/manage/ActivityWrite" element={<ActivityWritePage />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
