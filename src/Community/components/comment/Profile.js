/** Profile 프로필 컴포넌트  */
import getDateFormat from '../../../modules/common/getDateFormat';
import { ProfileStyle } from '../../styles/CommentStyle';

export const Profile = ({ comment, isEdited = comment.isEdited }) => {
  return (
    <ProfileStyle>
      <div className="image" />
      <div className="name-date">
        <div className="name">{comment.userName}</div>
        <div className="line">
          <div className="date">{getDateFormat(comment.updatedAt)}</div>
          {isEdited && <div className="update">(수정됨)</div>}
        </div>
      </div>
    </ProfileStyle>
  );
};
