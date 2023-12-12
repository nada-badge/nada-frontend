/**CommentOutPut 댓글을 출력하는 컴포넌트 */
import { useDispatch } from 'react-redux';
import { CommentBox } from '../../../styles/community/CommentStyle';
import { changeCommentField } from '../../../modules/community/postDetail';
import ReplyOutPut from './replyOutput';
import useModal from '../../common/usedInModal/useModal';
import { Profile } from './Profile';
import { Menu } from './Menu';
import { Like } from './Like';
import { Reply } from './Reply';

const CommentOutPut = ({ comment }) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const content = comment.isDeleted ? '삭제된 댓글입니다.' : comment.content;

  if (comment.isDeleted && !comment.replies.length) {
    return;
  }

  const sendComment = () => {
    dispatch(changeCommentField({ form: '_id', value: comment._id }));
    dispatch(changeCommentField({ form: 'userName', value: comment.userName }));
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
        <div className="content">{content}</div>
        <div className="bottom">
          <Like />
          <Reply sendComment={sendComment} />
        </div>
      </CommentBox>
      {comment.replies.map((reply) => (
        <div key={reply.id}>{ReplyOutPut({ comment, reply })}</div>
      ))}
    </div>
  );
};

export default CommentOutPut;
