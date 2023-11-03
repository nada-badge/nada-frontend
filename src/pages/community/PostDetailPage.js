import TagButtons from "../../components/community/TagButton";
import { ContentsList } from "../../styles/Community/PostDetailStyle";
import { useSelector } from "react-redux";
import { BottomBar } from "../../container/community/postDetail/bottomBar";
import Dateformat from "../../components/community/Dateformat";

const PostDetail = () => {
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);

  const {
    _id,
    userName,
    mainCategory,
    area,
    title,
    content,
    views,
    registeredAt,
    updatedAt,
  } = PostDetail;

  return (
    <div>
      <ContentsList>
        <div className="title">
          <div className="p">{title}</div>
        </div>
        <div className="profile">
          <div className="image" />
          <div className="text">
            <div className="nickname">{userName}</div>
            <div className="date">{Dateformat(updatedAt)}</div>
          </div>
        </div>
        <div className="tag">
          <TagButtons />
        </div>
        <div className="content">
          <div className="text">{content} </div>
          <div className="image-2" />
          <div className="image-2" />
        </div>
      </ContentsList>
      <BottomBar />
    </div>
  );
};

export default PostDetail;
