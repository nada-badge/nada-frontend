import CommentOutPut from "../../components/community/comment/commentOutput";
import { CommentList } from "../../styles/Community/CommentStyle";
import { BottomBar } from "../../container/community/comment/BottomBar";
import { useSelector } from "react-redux";

const CommentPage = () => {
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const { comments } = PostDetail;

  console.log("comment : ", comments);
  return (
    <div>
      <CommentList>
        {comments.map((comment) => (
          <div key={comment.id}>{CommentOutPut({ comment })}</div>
        ))}
      </CommentList>
      <BottomBar />
    </div>
  );
};

export default CommentPage;
