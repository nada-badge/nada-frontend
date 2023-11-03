import { PostButton } from "../../styles/Community/PostWriteButtonStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setField } from "../../module/Community/postWrite";
import { initializeForm } from "../../module/Community/postDetail";

export const PostWriteButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toPostWrite = () => {
    dispatch(initializeForm());
    dispatch(setField({ form: "method", key: "isSubmit", value: true }));
    navigate("/community/PostWrite");
  };

  return (
    <PostButton onClick={toPostWrite}>
      <img
        className="group"
        alt="Group"
        src="https://c.animaapp.com/bZTbag8r/img/group-1@2x.png"
      />
    </PostButton>
  );
};
