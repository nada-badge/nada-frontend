/**CommentOutPut 댓글을 출력하는 컴포넌트 */
import { useDispatch } from 'react-redux';
import { Comment } from '../../../styles/Community/CommentStyle';
import Dateformat from '../Dateformat';
import { changeCommentField } from '../../../modules/Community/postDetail';
import ReplyOutPut from './replyOutput';
import useModal from '../../common/modal/useModal';

const CommentOutPut = ({ comment }) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();

  const sendReply = () => {
    dispatch(changeCommentField({ form: '_id', value: comment._id }));
    dispatch(changeCommentField({ form: 'isReply', value: true }));
  };

  const openMenu = () => {
    dispatch(changeCommentField({ form: '_id', value: comment._id }));
    dispatch(changeCommentField({ form: 'isCommentModal', value: true }));
    openModal({
      type: 'MenuModal',
      contentType: '댓글',
      content: ['Copy', 'Update', 'Delete', 'Report'],
      position: 'comment',
    });
  };

  return (
    <div>
      <Comment>
        <div className="profile">
          <div className="image-name-date">
            <div className="image" />
            <div className="name-date">
              <div className="name">{comment.userName}</div>
              <div className="date">{Dateformat(comment.updatedAt)}</div>
            </div>
          </div>
          <div className="menu" onClick={openMenu}>
            <div className="meatball">
              <div className="ellipse" />
              <div className="ellipse" />
              <div className="ellipse" />
            </div>
          </div>
        </div>
        <div className="content">{comment.content}</div>
        <div className="likes-reply">
          <div className="likes">
            <img
              className="vector"
              alt="Vector"
              src="https://c.animaapp.com/eG8nhu7n/img/vector.png"
            />
            <div className="like">
              <div className="text">0</div>
            </div>
          </div>
          <div className="reply" onClick={sendReply}>
            <img
              className="reply"
              alt="Reply"
              src="https://c.animaapp.com/FZc9bisJ/img/reply-4.svg"
            />
            <div className="text">답글 달기</div>
          </div>
        </div>
      </Comment>
      {comment.replies.map((reply) => (
        <div key={reply.id}>{ReplyOutPut({ reply })}</div>
      ))}
    </div>
  );
};

export default CommentOutPut;
