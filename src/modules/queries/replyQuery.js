/** replyQuery 답글을 작성하는 쿼리 */
import { useMutation } from "@tanstack/react-query";
import client from "../../lib/api/client";
import { useSelector } from "react-redux";
import { PostDetailSelector } from "../Community/postDetail";

const useReply = () => {
  const postId = useSelector(PostDetailSelector("PostDetail", "_id"));
  const commentId = useSelector(PostDetailSelector("Comment", "_id"));
  const userEmail = "20230904@nate.com";
  const userName = "오늘닉네임";

  const mutation = useMutation({
    mutationFn: ({ inputValue }) =>
      client.post(`/community/reply/${postId}/${commentId}`, {
        userEmail,
        userName,
        content: inputValue,
      }),
    onSuccess: (data) => {
      console.log("답글이 달렸습니다.", data);
    },
    onError: (error) => {
      console.log("답글 게시에 실패하였습니다.", error);
    },
  });

  return mutation;
};

export default useReply;
