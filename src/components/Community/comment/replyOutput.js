import { Reply } from "../../../styles/Community/CommentStyle";
import Dateformat from "../Dateformat";

const ReplyOutPut = ({ reply }) => {
  return (
    <Reply>
      <div className="profile">
        <div className="image-name-date">
          <div className="image" />
          <div className="name-date">
            <div className="name">{reply.userName}</div>
            <div className="date">{Dateformat(reply.updatedAt)}</div>
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
      <div className="content">{reply.content}</div>
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
    </Reply>
  );
};

export default ReplyOutPut;
