/** Reply 답장 컴포넌트  */
import { useDispatch } from 'react-redux';
import { changeCommentField } from '../../../modules/community/postDetail';
import { ReplyStyle } from '../../../styles/community/CommentStyle';

export const Reply = ({ comment }) => {
  const dispatch = useDispatch();

  const sendComment = () => {
    dispatch(changeCommentField({ form: 'position', value: 'reply' }));
    dispatch(changeCommentField({ form: '_id', value: comment._id }));
    dispatch(changeCommentField({ form: 'userName', value: comment.userName }));
    dispatch(changeCommentField({ form: 'isReplying', value: true }));
    dispatch(changeCommentField({ form: 'isUpdating', value: false }));
  };

  return (
    <ReplyStyle onClick={sendComment}>
      <img
        className="reply"
        alt="Reply"
        src="https://c.animaapp.com/FZc9bisJ/img/reply-4.svg"
      />
      <div className="text">답글 달기</div>
    </ReplyStyle>
  );
};
