import React from "react";
import { PostButton } from "../styles/PostWriteButtonStyle";
import { useNavigate } from "react-router-dom";

export const PostWriteButton = () => {
  const navigate = useNavigate();

  const toPostWrite = () => {
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
