import { Comment } from "../../../styles/Community/CommentStyle";

const CommentOutPut = () => {
  return (
    <Comment>
      <div className="profile">
        <div className="image-name-date">
          <div className="image" />
          <div className="name-date">
            <div className="name">닉네임</div>
            <div className="date">2023년 8월 15일 19:33</div>
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
      <div className="content">댓글이 적히는 공간입니다.</div>
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
