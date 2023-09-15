import React from "react";
import "../community/style.css";
import BoardCardList from "../community/BoardCardList/BoardCardList";
import PostList from "../community/PostList/PostList";
import Category from "../community/Category";
import Filter from "../community/Filter";

const Community = () => {
  return (
    <div className="community">
      <div className="area-search">
        <div className="input-search">
          <div className="div">검색어를 입력하세요</div>
          <img
            className="search"
            alt="Search"
            src="https://c.animaapp.com/hs22pPSO/img/search.svg"
          />
        </div>
      </div>
      <div className="border" />
      {/*검색창*/}
      <BoardCardList />
      <div className="area-contents">
        <div className="contents">
          <Category />
          <div className="border-2" />
          <Filter />
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Community;
