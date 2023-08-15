import { useState } from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import { headerStatusSelector } from "../modules/headerStatus";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {

   const { logoStatus, backStatus, pageNameStatus, alarmStatus, menuStatus } = useSelector( headerStatusSelector ) 
   const navigate = useNavigate()

    return (
      <div className="headers" >
         <div className="left">
            <div>MY SPEC</div>
            <img alt ="뒤로가기" onClick={() => navigate(-1)} src="https://generation-sessions.s3.amazonaws.com/827ba834ca374278e05524e587d4a061/img/chevron-left-3.svg"/>
         </div>
         <div className="center">
            <div>{pageNameStatus}</div>
         </div>
         <div className="right">
            <img alt="알림"   src="https://generation-sessions.s3.amazonaws.com/827ba834ca374278e05524e587d4a061/img/vector-7.svg"/>
            <img alt="메뉴"   src="https://generation-sessions.s3.amazonaws.com/827ba834ca374278e05524e587d4a061/img/menu-1.svg"/>
         </div>
         

     </div>
    );
  };
  
  export default Header;