import styled from 'styled-components';
import Header from '../containers/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import PostList from '../../components/common/postList/PostList';
import { useGetPostList } from '../../Community/modules/queries/useGetCommunity';
import Category from '../../Community/containers/Category';
import Filter from '../../components/common/filter/Filter';
const CommunityManagePage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);

  // 서버에서 가져온 query 결과 가져오기
  const result = useGetPostList({ filter: filter });

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <LayoutStyle>
      <Header text={'커뮤니티 게시글'} url={'/community/PostWrite'} />
      <Category />
      <Filter />
      <PostList type={'community'} result={result} />
    </LayoutStyle>
  );
};

export default CommunityManagePage;

export const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 8px;
`;
