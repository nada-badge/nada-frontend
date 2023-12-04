/**CommentOutPut 댓글을 출력하는 컴포넌트 */
import { useDispatch } from 'react-redux';
import { CommentBox } from '../../../styles/Community/CommentStyle';
import { changeCommentField } from '../../../modules/Community/postDetail';
import ReplyOutPut from './replyOutput';
import useModal from '../../common/modal/useModal';
import { Profile } from './Profile';
import { Menu } from './Menu';
import { Like } from './Like';
import { Reply } from './Reply';

const CommentOutPut = ({ comment }) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();

  const sendComment = () => {
    dispatch(changeCommentField({ form: '_id', value: comment._id }));
    dispatch(changeCommentField({ form: 'position', value: 'reply' }));
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
      <CommentBox>
        <div className="header">
          <Profile comment={comment} />
          <Menu openMenu={openMenu} />
        </div>
        <div className="content">{comment.content}</div>
        <div className="bottom">
          <Like />
          <Reply sendComment={sendComment} />
        </div>
      </CommentBox>
      {comment.replies.map((reply) => (
        <div key={reply.id}>{ReplyOutPut({ reply })}</div>
      ))}
    </div>
  );
};

export default CommentOutPut;
