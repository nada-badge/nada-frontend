import styled from 'styled-components';
import Header from '../containers/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import PostList from '../../components/common/postList/PostList';
import { useGetPostList } from '../../Community/modules/queries/useGetCommunity';
import Category from '../../Community/containers/Category';
import Filter from '../../components/common/filter/Filter';
import { ReportsButton } from '../components/ReportsButton';

const CommunityManagePage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);
  const [showReports, setShowReports] = useState(false);
  const [posts, setPosts] = useState([]);
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

  useEffect(() => {
    if (result) {
      if (showReports) {
        const filteredActivity = result.data.filter((item) => item.reports);
        console.log('filteredCommunity: ', filteredActivity);
        setPosts(filteredActivity);
      } else {
        setPosts(result);
      }
    }
  }, [showReports]);

  return (
    <LayoutStyle>
      <Header text={'커뮤니티 게시글'} url={'/community/PostWrite'} />
      <Category />
      <Filter />
      <ReportsButton
        showReports={showReports}
        setShowReports={setShowReports}
      />
      <PostList type={'community'} result={posts} />
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
