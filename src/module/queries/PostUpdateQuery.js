import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import client from "../../lib/api/client";

const useUpdate = () => {
  const navigate = useNavigate();

  //1) postWrite에서 넘겨받은 값 /community/post에 post하기
  return useMutation({
    mutationFn: ({
      _id,
      userEmail,
      userName,
      mainCategorys,
      categorys,
      fields,
      areas,
      title,
      content,
    }) =>
      client.patch(`/community/post`, {
        _id: _id,
        userEmail: userEmail,
        userName: userName,
        mainCategory: mainCategorys,
        category: categorys,
        field: fields,
        area: areas,
        title: title,
        content: content,
      }),
    onSuccess: (data) => {
      console.log("게시물이 수정되었습니다.", data);
      alert("수정되었습니다.");
      navigate("/Community");
    },
    onError: (error) => {
      console.log("게시물 수정에 실패하였습니다.", error);
      alert("실패.");
      navigate("/Community");
    },
  });
};

export default useUpdate;
