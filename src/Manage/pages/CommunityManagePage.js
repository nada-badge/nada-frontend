import { LayoutStyle } from './HomePage.';
import Header from '../containers/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import PostList from '../../components/postList/PostList';
import { useGetPostList } from '../../Community/modules/queries/useGetCommunity';
import Category from '../../Community/containers/Category';
import Filter from '../../components/filter/Filter';
import { initializeForm } from '../../modules/redux/postData';
import { initializeAll as initializeFilter } from '../../modules/redux/filter';
import { CommunityReportsButton } from '../containers/CommunityReportsButton';

const CommunityManagePage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);
  const [posts, setPosts] = useState([]);
  // 서버에서 가져온 query 결과 가져오기
  const result = useGetPostList({ filter: filter });
  const [showPostReports, setShowPostReports] = useState(false);
  const [showCommentReports, setShowCommentReports] = useState(false);

  useEffect(() => {
    dispatch(initializeForm());
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
    return () => dispatch(initializeFilter());
  }, []);

  useEffect(() => {
    if (result.data && showPostReports) {
      const filteredActivity = result.data.filter((item) => item.reports);
      setPosts({ data: filteredActivity });
    } else {
      setPosts(result);
    }
  }, [result.data, result.isLoading, showPostReports]);

  return (
    <LayoutStyle>
      <Header text={'커뮤니티 게시글'} url={'/community/PostWrite'} />
      <Category />
      <Filter />
      <CommunityReportsButton
        showPostReports={showPostReports}
        setShowPostReports={setShowPostReports}
        showCommentReports={showCommentReports}
        setShowCommentReports={setShowCommentReports}
      />
      <PostList type={'community'} result={posts} />
    </LayoutStyle>
  );
};

export default CommunityManagePage;
