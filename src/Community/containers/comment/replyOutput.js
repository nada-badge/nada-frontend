/**ReplyOutPut 답글을 출력하는 컴포넌트 */
import { useDispatch } from 'react-redux';
import useModal from '../../../Modal/modules/useModal';
import { changeCommentField } from '../../modules/redux/postDetail';
import { ReplyBox } from '../../styles/CommentStyle';
import { Profile } from '../../components/comment/Profile';
import { Menu } from '../../components/comment/Menu';
import { Reply } from '../../components/comment/Reply';

const ReplyOutPut = ({ comment, reply }) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();

  const openMenu = () => {
    dispatch(changeCommentField({ form: '_id', value: comment._id }));
    dispatch(changeCommentField({ form: 'reply_id', value: reply._id }));
    dispatch(changeCommentField({ form: 'content', value: reply.content }));
    openModal({
      type: 'MenuModal',
      contentType: '댓글',
      content: ['Copy', 'Update', 'Delete', 'Report'],
      position: 'reply',
    });
  };

  return (
    <ReplyBox>
      <div className="header">
        <Profile comment={reply} />
        <Menu openMenu={openMenu} />
      </div>
      <div className="content">{reply.content}</div>
      <div className="bottom">
        <Reply comment={comment} />
      </div>
    </ReplyBox>
  );
};

export default ReplyOutPut;