import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="button-next">
        <div className="text-wrapper">다음</div>
      </div>
      <div className="title">
        <h1 className="h-1">
          사용할 닉네임을
          <br />
          입력해 주세요
        </h1>
      </div>
      <div className="div">
        <div className="id">
          <div className="text-wrapper-2">마이스펙</div>
        </div>
        <div className="div-2">
          <div className="caution">
            <img className="check" alt="Check" src="check.svg" />
            <div className="text-wrapper-3">1-8자</div>
          </div>
          <div className="caution-2">
            <img className="check" alt="Check" src="image.svg" />
            <div className="text-wrapper-3">한글 또는 영문</div>
          </div>
        </div>
      </div>
      <div className="caution-3">
        <div className="img-wrapper">
          <img className="img" alt="Img" src="image-2.svg" />
        </div>
        <div className="text-wrapper-4">이미 등록된 이메일이에요</div>
      </div>
    </div>
  );
};
