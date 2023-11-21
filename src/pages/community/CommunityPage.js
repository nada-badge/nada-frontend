/** CommunityPage 커뮤니티 메인 페이지 */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardList from '../../components/cardList/CardList';
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
  const community_cards = [
    { id: 1, title: '유용한 활동 사이트', category: '자유' },
    { id: 2, title: '같이 공모전 나가실 분', category: '홍보' },
    { id: 3, title: '팀원 모집합니다.', category: '홍보' },
  ];
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

      <CardList
        title={'지금 인기 있는 게시글이에요🔥'}
        cards={community_cards}
        type={'board'}
      />
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
