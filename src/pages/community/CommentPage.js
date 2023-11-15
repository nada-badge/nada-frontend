/** CommentPage 댑글과 답글을 보여주는 페이지 */
import CommentOutPut from "../../components/community/comment/CommentOutput";
import { CommentList } from "../../styles/Community/CommentStyle";
import { BottomBar } from "../../container/community/comment/BottomBar";
import { useSelector } from "react-redux";

const CommentPage = () => {
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const { comments } = PostDetail;

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
