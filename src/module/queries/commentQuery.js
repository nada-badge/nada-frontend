import { useMutation } from "@tanstack/react-query";
import client from "../../lib/api/client";
import { useSelector } from "react-redux";
import { PostDetailSelector } from "../Community/postDetail";

const useComment = () => {
  const _id = useSelector(PostDetailSelector("_id"));
  const userEmail = "20230904@nate.com";
  const userName = "오늘닉네임";
  //추후에 댓글 단 사람의 이메일과 이름으로 위 코드를 수정해야햠.

  return useMutation({
    mutationFn: ({ inputValue }) =>
      client.post(`/community/comment/${_id}`, {
        userEmail: userEmail,
        userName: userName,
        content: inputValue,
      }),
    onSuccess: (data) => {
      console.log("댓글이 달렸습니다.", data);
    },
    onError: (error) => {
      console.log("댓글 게시에 실패하였습니다.", error);
    },
  });
};

export default useComment;
