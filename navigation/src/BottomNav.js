import React from "react";
import { NavLink } from 'react-router-dom';
import './BottomNav.css';



const BottomNav = () => {

  const activeStyle = {
   
};

const deactiveStyle = {
 
}

  return (
    <nav className="wrapper">
      <div>
        <NavLink to="/home" className="nav-link" >
           <img alt="홈"   src="https://generation-sessions.s3.amazonaws.com/3d5242ac3f71bcd30b434afaa1779940/img/mingcute-home-4-fill-4@2x.png"/>
        </NavLink>  
      </div> 
      <div>
        <NavLink to="/activity" className="nav-link">
           <img alt="활동"   src="https://generation-sessions.s3.amazonaws.com/20ef55f1b94888c4d84ed622729622c3/img/mdi-briefcase.svg" />
        </NavLink>
      </div> 
      <div>
        <NavLink to="/badge" className="nav-link">
           <img alt="뱃지"  src="https://generation-sessions.s3.amazonaws.com/3d5242ac3f71bcd30b434afaa1779940/img/award-5.svg"/>
        </NavLink>
      </div> 
      <div>
        <NavLink to="/community" className="nav-link" style={({isActive}) => {
          return isActive ? activeStyle : deactiveStyle;
        }}>
           <img alt="커뮤니티" src="https://generation-sessions.s3.amazonaws.com/8d248fff35e65ca3ac7bf073a2b1b973/img/vector-7-5.svg"/>
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