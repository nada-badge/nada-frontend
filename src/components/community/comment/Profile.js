/** Profile 프로필 컴포넌트  */
import Dateformat from '../../../modules/common/Dateformat';
import { ProfileStyle } from '../../../styles/community/CommentStyle';

export const Profile = ({ comment }) => {
  return (
    <ProfileStyle>
      <div className="image" />
      <div className="name-date">
        <div className="name">{comment.userName}</div>
        <div className="line">
          <div className="date">{Dateformat(comment.updatedAt)}</div>
          {comment.isEdited && <div className="update">(수정됨)</div>}
        </div>
      </div>
    </ProfileStyle>
  );
};
