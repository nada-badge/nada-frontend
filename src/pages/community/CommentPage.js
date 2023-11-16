/** CommentPage 댑글과 답글을 보여주는 페이지 */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentOutPut from '../../components/community/comment/commentOutput';
import { CommentList } from '../../styles/Community/CommentStyle';
import { BottomBar } from '../../containers/community/comment/BottomBar';
import { setBarStatus } from '../../modules/bar';

const CommentPage = () => {
  const dispatch = useDispatch();
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const { comments } = PostDetail;

  useEffect(() => {
    dispatch(
      setBarStatus({ headerState: 'back', text: '댓글', isShowBottom: false }),
    );
  }, []);

  return (
    <div>
      <CommentList>
        {comments.map((comment) => (
          <div key={comment.id}>{CommentOutPut({ comment })}</div>
        ))}
      </CommentList>
      <BottomBar />
    </div>
  );
};

export default CommentPage;
