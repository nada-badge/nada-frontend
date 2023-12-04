import { LikeStyle } from '../../../styles/Community/CommentStyle';

export const Like = () => {
  return (
    <LikeStyle>
      <img
        className="vector"
        alt="Vector"
        src="https://c.animaapp.com/eG8nhu7n/img/vector.png"
      />
      <div className="like">
        <div className="text">0</div>
      </div>
    </LikeStyle>
  );
};
