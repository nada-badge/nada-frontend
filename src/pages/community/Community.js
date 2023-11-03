import React, { useEffect } from "react";
import BoardCardList from "../../community/BoardCardList/BoardCardList";
import PostList from "../../community/PostList/PostList";
import Category from "../../community/Category";
import Filter from "../../community/Filter";
import { PostWriteButton } from "../../community/PostWriteButton";
import { useDispatch } from "react-redux";
import { initializeAll } from "../../module/Community/CommunityStatus";
import { initializeAll as initializeAllPostWrite } from "../../module/Community/PostWriteStatus";

import {
  CommunityPage,
  Search,
  Border,
  Contents,
} from "../../styles/CommunityStyle";

const Community = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(initializeAllPostWrite());
      dispatch(initializeAll());
    };
  }, []);

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
      {/*검색창*/}
      <BoardCardList />
      <Contents>
        <div className="content">
          <Category />
          <Border />
          <Filter />
          <PostList />
        </div>
      </Contents>
      <PostWriteButton />
    </CommunityPage>
  );
};

export default Community;
