import './App.css';
import { Route, Routes } from 'react-router-dom';
import { StyledToastContainer } from './components/common/Toast';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import LogInSelect from './pages/auth/LoginSelect';

import HomePage from './pages/Manage/HomePage.';
import ActivityDetailPage from './pages/Manage/ActivityDetailPage';
import ActivityWritePage from './pages/Manage/ActivityWritePage.';
import ActivityListPage from './pages/Manage/ActivityListPage.';

import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import ActivityPage from './pages/activity/ActivityPage';
import DetailActivityPage from './pages/activity/DetailActivityPage';
import Badge from './testpage/badge';
import CommunityPage from './pages/community/CommunityPage';
import PostWritePage from './pages/community/PostWritePage';
import PostDetailPage from './pages/community/PostDetailPage';
import CommentPage from './pages/community/CommentPage';
import MyPage from './testpage/myPage';
import SearchActivityPage from './pages/activity/SearchActivityPage';

import BadgePage from './pages/badge/BadgePage';
import DetailBadgePage from './pages/badge/DetailBadgePage';
import ActWritePage from './pages/activity/ActWritePage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogInSelect />} />
        <Route path="/login/personal" element={<LoginPage />} />
        <Route path="/login/team" element={<LoginPage />} />
        <Route path="/register/personal" element={<RegisterPage />} />
        <Route path="/register/team" element={<RegisterPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />

        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/activity/:_id" element={<DetailActivityPage />} />
        <Route path="/activity/search" element={<SearchActivityPage />} />
        <Route path="/activity/ActWrite" element={<ActWritePage />} />

        <Route path="/badge" element={<Badge />} />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/PostWrite" element={<PostWritePage />} />
        <Route path="/community/PostDetail/:_id" element={<PostDetailPage />} />
        <Route path="/community/Comment/:_id" element={<CommentPage />} />

        <Route path="/myPage" element={<MyPage />} />

        <Route path="/manage" element={<HomePage />} />

        <Route path="/manage/Activity" element={<ActivityListPage />} />
        <Route path="/manage/Activity/:_id" element={<ActivityDetailPage />} />
        <Route path="/manage/ActivityWrite" element={<ActivityWritePage />} />

        <Route path="/badge" element={<BadgePage />} />
        <Route path="/badge/detail" element={<DetailBadgePage />} />
      </Routes>
      <StyledToastContainer limit={1} />
    </div>
  );
};

export default App;
