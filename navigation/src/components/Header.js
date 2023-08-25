import { useState } from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import { headerStatusSelector } from "../modules/headerStatus";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {

   const { pageStatus,  pageNameStatus  } = useSelector( headerStatusSelector ) 
   const navigate = useNavigate()
   console.log("headerstatus 정보입니다.",pageStatus, pageNameStatus);

   return (
      <div className="top">
        {["function-notice", "notice-menu"].includes(pageStatus) && (
          <>
            <div className={`octicon-bell-fill ${pageStatus}`}>
              {pageStatus === "notice-menu" && (
                <div className="overlap-group">
                  <img
                    className="vector"
                    alt="Vector"
                    src="https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/vector-4.svg"
                  />
                  <div className="ellipse" />
                </div>
              )}
              </div>
              {pageStatus === "function-notice" && <div className="text-wrapper">{pageNameStatus}</div>}
            

              {pageStatus === "notice-menu" && <div className="text-wrapper">{pageNameStatus}</div>}
            <div className={`div property-1-${pageStatus}`}>
              
  
              {pageStatus === "function-notice" && (
                <div className="overlap-group">
                  <img
                    className="vector"
                    alt="Vector"
                    src="https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/vector-4.svg"
                  />
                  <div className="ellipse" />
                </div>
              )}
            </div>
          </>
        )}
  
        {["function-notice", "main", "notice-menu"].includes(pageStatus) && (
          <img
            className={`element property-1-0-${pageStatus}`}
            alt="Element"
            onClick={pageStatus === "function-notice"? () => navigate(-1):() => navigate(0)}
            src={
              pageStatus === "notice-menu"
                ? "https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/menu-1.svg"
                : pageStatus === "function-notice"
                ? "https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/chevron-left-1.svg"
                : "https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/-----1.svg"
            }
          />
        )}
  
        {pageStatus === "funtion-only" && (
          <>
            <div className="text-wrapper">{pageNameStatus}</div>
            <img
              className="chevron-left"
              alt="Chevron left"
              onClick={() => navigate(-1)}
              src="https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/chevron-left-1.svg"
            />
          </>
        )}
  
        {["function-only-notice", "main"].includes(pageStatus) && (
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/vector-4.svg"
              />
              <div className="ellipse" />
            </div>
          </div>
        )}
  
        {pageStatus === "function-only-notice" && <div className="text-wrapper">{pageNameStatus}</div>}
      </div>
    );
  
    
  };
  
  

  export default Header;