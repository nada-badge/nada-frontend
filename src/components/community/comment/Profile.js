import Dateformat from '../Dateformat';
import { ProfileStyle } from '../../../styles/Community/CommentStyle';

export const Profile = ({ comment }) => {
  return (
    <ProfileStyle>
      <div className="image" />
      <div className="name-date">
        <div className="name">{comment.userName}</div>
        <div className="date">{Dateformat(comment.updatedAt)}</div>
      </div>
    </ProfileStyle>
  );
};
