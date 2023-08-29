import React from 'react';
import './BottomNav.css';
import { NavLink } from 'react-router-dom';

export const BottomNav = ({}) => {
  return (
    <nav className="navi">
      <NavLink to="/home" className="home">
        {({ isActive }) => (
          <>
            <div className={isActive ? `home-acttext` : 'home-deacttext'}>
              홈
            </div>
            <img
              className="img"
              alt="home"
              src={
                isActive
                  ? 'https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mingcute-home-4-fill-1@2x.png'
                  : 'https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mingcute-home-4-fill-5@2x.png'
              }
            />
          </>
        )}
      </NavLink>
      <NavLink to="/activity" className="activity">
        {({ isActive }) => (
          <>
            <div
              className={isActive ? `activity-acttext` : 'activity-deacttext'}
            >
              활동
            </div>
            <img
              className="img"
              alt="activity"
              src={
                isActive
                  ? 'https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mdi-briefcase-5.svg'
                  : 'https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mdi-briefcase-4.svg'
              }
            />
          </>
        )}
      </NavLink>
      <NavLink to="/badge" className="badge">
        {({ isActive }) => (
          <>
            <div className={isActive ? `badge-acttext` : 'badge-deacttext'}>
              뱃지
            </div>
            <img
              className="img"
              alt="badge"
              src={
                isActive
                  ? 'https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/award-4.svg'
                  : 'https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/award-5.svg'
              }
            />
          </>
        )}
      </NavLink>
      <NavLink to="/community" className="community">
        {({ isActive }) => (
          <>
            <div
              className={isActive ? `community-acttext` : 'community-deacttext'}
            >
              커뮤니티
            </div>
            <img
              className="vector"
              alt="community"
              src={
                isActive
                  ? 'https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/vector-7-3.svg'
                  : 'https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/vector-7-5.svg'
              }
            />
          </>
        )}
      </NavLink>
      <NavLink to="/mypage" className="my">
        {({ isActive }) => (
          <>
            <div className={isActive ? `my-acttext` : 'my-deacttext'}>MY</div>
            <img
              className="img"
              alt="mypage"
              src={
                isActive
                  ? 'https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mingcute-user-2-fill-3.svg'
                  : 'https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mingcute-user-2-fill-2.svg'
              }
            />
          </>
        )}
      </NavLink>
    </nav>
  );
};

export default BottomNav;
