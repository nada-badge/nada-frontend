import React from "react";
import BoardCardList from "../community/BoardCardList/BoardCardList";
import PostList from "../community/PostList/PostList";
import Category from "../community/Category";
import Filter from "../community/Filter";
import {
  CommunityPage,
  Search,
  Border,
  Border2,
  Contents,
} from "../styles/CommunityStyle";

const Community = () => {
  return (
    <CommunityPage>
      <Search>
        <div className="Input">
          <div className="Text">검색어를 입력하세요</div>
          <img
            className="SearchImg"
            alt="Search"
            src="https://c.animaapp.com/hs22pPSO/img/search.svg"
          />
        </div>
      </Search>
      <Border />
      {/*검색창*/}
      <BoardCardList />
      <Contents>
        <div className="content">
          <Category />
          <Border2 />
          <Filter />
          <PostList />
        </div>
      </Contents>
    </CommunityPage>
  );
};

export default Community;
