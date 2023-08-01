import React from "react";
import './BottomNav.css';
import home_fill from './icon/home-fill.png'
import calendar_fill from './icon/calendar-fill.png'
import award_fill from './icon/award-fill.png'
import activity_fill from './icon/activity-fill.png'
import mypage_fill from './icon/mypage-fill.png'


const BottomNav = () => {
  return (
    <nav className="wrapper">
      <div>
        <img className="navImg" alt="홈" src={home_fill} />
      </div> 
      <div><img className="navImg" alt="일정" src={calendar_fill} /></div>
      <div><img className="navImg" alt="뱃지" src={award_fill} /></div>
      <div><img className="navImg" alt="활동" src={activity_fill} /></div>
      <div><img className="navImg" alt="마이페이지" src={mypage_fill} /></div>
    </nav>
  );
};

export default BottomNav;