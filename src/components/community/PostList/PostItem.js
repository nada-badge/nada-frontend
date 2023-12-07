/** PostItem, postList을 이루는 PostItem. */
import { PostContainer } from '../../../styles/community/postItemStyle';

const PostItem = ({ card }) => {
  const { title, field, category, region, content, postAt } = card;

  return (
    <PostContainer>
      <div className="image" />
      <div className="innerBox">
        <div className="title">{title}</div>
        <div className="text">{content}</div>
        <div className="frame">
          <div className="text-2">{region}</div>
          <div className="ellipse" />
          <div className="text-2">{field}</div>
          <div className="ellipse" />
          <div className="text-2">{category}</div>
          <div className="ellipse" />
          <div className="text-2">{postAt}</div>
        </div>
      </div>
    </PostContainer>
  );
};

export default PostItem;
