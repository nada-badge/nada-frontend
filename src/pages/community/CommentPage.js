import CommentOutPut from "../../components/community/comment/commentOutput";
import { CommentList } from "../../styles/Community/CommentStyle";
import ReplyOutPut from "../../components/community/comment/replyOutput";

const CommentPage = () => {
  return (
    <CommentList>
      <CommentOutPut />
      <ReplyOutPut />
      <ReplyOutPut />
    </CommentList>
  );
};

export default CommentPage;
