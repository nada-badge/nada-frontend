import CommentOutPut from "../../components/community/comment/commentOutput";
import { CommentList } from "../../styles/Community/CommentStyle";
import ReplyOutPut from "../../components/community/comment/replyOutput";
import { BottomBar } from "../../container/community/comment/BottomBar";

const CommentPage = () => {
  return (
    <div>
      <CommentList>
        <CommentOutPut />
        <ReplyOutPut />
        <ReplyOutPut />
      </CommentList>
      <BottomBar />
    </div>
  );
};

export default CommentPage;
