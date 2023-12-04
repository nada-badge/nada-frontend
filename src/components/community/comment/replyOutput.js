/**ReplyOutPut 답글을 출력하는 컴포넌트 */
import { ReplyBox } from '../../../styles/mommunity/CommentStyle';
import { Profile } from './Profile';
import { Menu } from './Menu';
import { Like } from './Like';
import { Reply } from './Reply';

const ReplyOutPut = ({ reply }) => {
  const sendReply = () => {
    //코드 추가 예정
  };

  const openMenu = () => {
    //코드 추가 예정
  };

  return (
    <ReplyBox>
      <div className="header">
        <Profile comment={reply} />
        <Menu opemMenu={openMenu} />
      </div>
      <div className="content">{reply.content}</div>
      <div className="bottom">
        <Like />
        <Reply sendComment={sendReply} />
      </div>
    </ReplyBox>
  );
};

export default ReplyOutPut;
