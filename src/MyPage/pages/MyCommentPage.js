import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useGetMyComment } from '../modules/queries/useGetMyComment';
import PostList from '../../components/postList/PostList';
import { Contents } from '../../Community/styles/CommunityStyle';

const MyCommentPage = () => {
  const dispatch = useDispatch();
  const result = useGetMyComment({ email: `maintest01@gmail.com` });

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '내가 댓글단 글 ',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <div className="pageContainer" style={{ gap: '0' }}>
      <Contents>
        <div className="content">
          <PostList type={'community'} result={result} />
        </div>
      </Contents>
    </div>
  );
};

export default MyCommentPage;
