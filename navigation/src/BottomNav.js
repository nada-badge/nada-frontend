import React from "react";
import { NavLink } from 'react-router-dom';
import './BottomNav.css';



const BottomNav = () => {

  const activeStyle = {
    background : 'black'
};

const deactiveStyle = {
  fill :'current',
  color: 'black',
  textDecoration: 'none'
}

  return (
    <nav className="wrapper">
      <div>
        <NavLink to="/home" className="nav-link" style={({isActive}) => {
          return isActive ? activeStyle : deactiveStyle;
        }}>
           테스트입니다.
        </NavLink>
      </div> 
      <div>
        <NavLink to="/calendar" className="nav-link" style={({isActive}) => {
          return isActive ? activeStyle : deactiveStyle;
        }}>
           <img alt="일정" src="https://generation-sessions.s3.amazonaws.com/20ef55f1b94888c4d84ed622729622c3/img/calendar.svg"
 />
        </NavLink>
      </div> 
      <div>
        <NavLink to="/badge" className="nav-link">
           <img alt="뱃지"  src="https://generation-sessions.s3.amazonaws.com/20ef55f1b94888c4d84ed622729622c3/img/mdi-briefcase.svg"
/>
        </NavLink>
      </div> 
      <div>
        <NavLink to="/activity" className="nav-link">
           <img alt="활동"   src="https://generation-sessions.s3.amazonaws.com/20ef55f1b94888c4d84ed622729622c3/img/mdi-briefcase.svg"
 />
        </NavLink>
      </div> 
      <div>
        <NavLink to="/mypage" className="nav-link">
           <img alt="마이페이지"  src="https://generation-sessions.s3.amazonaws.com/20ef55f1b94888c4d84ed622729622c3/img/mingcute-user-2-fill.svg" />
        </NavLink>
      </div> 
    </nav>
  );
};

export default BottomNav;