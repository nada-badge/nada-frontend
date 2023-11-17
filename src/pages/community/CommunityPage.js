/** CommunityPage 커뮤니티 메인 페이지 */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BoardCardList from '../../components/community/BoardCardList/BoardCardList';
import PostList from '../../containers/community/PostList';
import Category from '../../containers/community/Category';
import Filter from '../../containers/community/Filter';
import { PostWriteButton } from '../../containers/community/PostWriteButton';
import { setBarStatus } from '../../modules/bar';
import { initializeAll } from '../../modules/Community/community';
import { initializeAll as initializeAllPostWrite } from '../../modules/Community/postWrite';
import {
  CommunityPage,
  Search,
  Border,
  Contents,
} from '../../styles/Community/CommunityStyle';

const Community = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'bell',
        text: '커뮤니티',
        isShowBottom: true,
      }),
    );
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
