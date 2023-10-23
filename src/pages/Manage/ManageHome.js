import React from 'react';
import { Link } from 'react-router-dom';

const ManageHome = () => {
  return (
    <div>
      <div>관리자 홈 화면 입니다.</div>
      <Link to="/manage">홈</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <Link to="/manage/Activity">게시판</Link>
      <hr />
    </div>
  );
};

export default ManageHome;
