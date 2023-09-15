import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import client from "../../lib/api/client";

const useSubmit = () => {
  const navigate = useNavigate();

  //1) activityWrite에서 넘겨받은 값 /activity에 post하기
  return useMutation({
    mutationFn: ({ title, field, category, area, content, menu }) =>
      client.post(`/community`, {
        title: title,
        field: field,
        category: category,
        area: area,
        content: content,
        menu: menu,
      }),
    onSuccess: (data) => {
      console.log("게시물이 등록되었습니다.", data);
      alert("등록되었습니다.");
      navigate("/Community");
    },
    onError: (error) => {
      console.log("게시물 등록에 실패하였습니다.", error);
      alert("실패.");
      navigate("/Community");
    },
  });
};

export default useSubmit;
