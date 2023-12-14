/** PostItem, postList을 이루는 PostItem. */
import { PostContainer } from '../../../styles/community/postItemStyle';

const PostItem = ({ card }) => {
  const { title, field, category, region, content, updatedAt } = card;

  const DetailText = ({ text, isLast }) => {
    return (
      <>
        <div className="text-2">
          {text} {!isLast && <>,</>}
        </div>
      </>
    );
  };

  return (
    <PostContainer>
      <div className="image" />
      <div className="innerBox">
        <div className="title">{title}</div>
        <div className="text">{content}</div>
        <div className="frame">
          {region.map((text, index) => (
            <DetailText
              key={index}
              text={text}
              isLast={index === region.length - 1}
            />
          ))}
          <div className="ellipse" />
          {field.map((text, index) => (
            <DetailText
              key={index}
              text={text}
              isLast={index === field.length - 1}
            />
          ))}
          <div className="ellipse" />
          <div className="text-2">{category}</div>
          <div className="ellipse" />
          <div className="text-2">{updatedAt}</div>
        </div>
      </div>
    </PostContainer>
  );
};

export default PostItem;
