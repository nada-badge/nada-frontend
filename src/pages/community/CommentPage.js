/** CommentPage 댑글과 답글을 보여주는 페이지 */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CommentOutPut from '../../components/community/comment/commentOutput';
import { CommentList } from '../../styles/community/CommentStyle';
import { BottomBar } from '../../containers/community/comment/BottomBar';
import { changeBarStatus } from '../../modules/bar';
import { applyFontStyles } from '../../styles/fontStyle';

const CommentPage = () => {
  const dispatch = useDispatch();
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const { comments } = PostDetail;

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '댓글',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <div>
      {!PostDetail.comments.length && <Message>댓글을 남겨보세요</Message>}
      <CommentList>
        {comments.map((comment) => (
          <CommentOutPut key={comment._id} comment={comment} />
        ))}
      </CommentList>
      <BottomBar />
    </div>
  );
};

export default CommentPage;

export const Message = styled.div`
  ${applyFontStyles({
    font: 'body-01',
    color: 'var(--myspec-gray-scalegray-600)',
  })};
  position: relative;
  width: 104px;
  height: 21px;
  top: 308px;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
`;
