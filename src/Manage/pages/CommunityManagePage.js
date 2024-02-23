import { LayoutStyle } from './HomePage.';
import Header from '../containers/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import PostList from '../../components/postList/PostList';
import { useGetPostList } from '../../Community/modules/queries/useGetCommunity';
import {
  useGetReportedPost,
  useGetReportedComment,
} from '../modules/queries/useGetReported';
import Category from '../../Community/containers/Category';
import Filter from '../../components/filter/Filter';
import { initializeForm } from '../../modules/redux/postData';
import { initializeAll as initializeFilter } from '../../modules/redux/filter';
import { CommunityReportsButton } from '../containers/CommunityReportsButton';
import { ReportedCommentList } from '../containers/ReportedCommentList';

const CommunityManagePage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);
  const [posts, setPosts] = useState([]);
  // 서버에서 가져온 query 결과 가져오기
  const result = useGetPostList({ filter: filter });
  const reportedPost = useGetReportedPost().data;
  const reportedComment = useGetReportedComment().data;
  const [showPostReports, setShowPostReports] = useState(false);
  const [showCommentReports, setShowCommentReports] = useState(false);
  console.log('reportedComment : ', reportedComment);
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
    if (showPostReports) {
      setPosts({ data: reportedPost });
    } else if (showCommentReports) {
      setPosts({ data: reportedComment });
    } else {
      setPosts(result);
    }
  }, [result.data, result.isLoading, showPostReports, showCommentReports]);

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
      <div>
        신고된 게시글 및 답글은 모집/홍보/자유와 상관없이 전체 게시글이
        출력됩니다.
      </div>
      {showCommentReports ? (
        <ReportedCommentList data={posts} />
      ) : (
        <PostList type={'community'} result={posts} />
      )}
    </LayoutStyle>
  );
};

export default CommunityManagePage;
