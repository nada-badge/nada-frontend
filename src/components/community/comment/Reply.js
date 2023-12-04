import { ReplyStyle } from '../../../styles/community/CommentStyle';
export const Reply = ({ sendComment }) => {
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
