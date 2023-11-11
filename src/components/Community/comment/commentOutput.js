import { Comment } from "../../../styles/Community/CommentStyle";
import Dateformat from "../Dateformat";

const CommentOutPut = ({ comment }) => {
  return (
    <Comment>
      <div className="profile">
        <div className="image-name-date">
          <div className="image" />
          <div className="name-date">
            <div className="name">{comment.userName}</div>
            <div className="date">{Dateformat(comment.updatedAt)}</div>
          </div>
        </div>
        <div className="menu">
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
        <div className="reply">
          <img
            className="reply"
            alt="Reply"
            src="https://c.animaapp.com/FZc9bisJ/img/reply-4.svg"
          />
          <div className="text">답글 달기</div>
        </div>
      </div>
    </Comment>
  );
};

export default CommentOutPut;
