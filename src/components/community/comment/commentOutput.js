import { useDispatch } from 'react-redux';
import { CommentBox } from '../../../styles/community/CommentStyle';
import { changeCommentField } from '../../../modules/community/postDetail';
import ReplyOutPut from './replyOutput';
import useModal from '../../common/usedInModal/useModal';
import { Profile } from './Profile';
import { Menu } from './Menu';
import Content from './Content';
import { Like } from './Like';
import { Reply } from './Reply';

const CommentOutPut = ({ comment }) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();

  // 댓글이 삭제되었고 답글이 없을 때, 아무것도 렌더링하지 않음
  if (comment.isDeleted && !comment.replies.length) {
    return null;
  }

  // 댓글 메뉴 열기
  const openMenu = () => {
    dispatch(changeCommentField({ form: '_id', value: comment._id }));
    dispatch(changeCommentField({ form: 'content', value: comment.content }));
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
          {!comment.isDeleted && <Menu openMenu={openMenu} />}
        </div>
        <Content comment={comment} />
        {!comment.isDeleted && (
          <div className="bottom">
            <Like />
            <Reply comment={comment} />
          </div>
        )}
      </CommentBox>
      {comment.replies.map((reply) => (
        <div key={reply.id}>{ReplyOutPut({ comment, reply })}</div>
      ))}
    </div>
  );
};

export default CommentOutPut;
