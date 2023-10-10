import React from "react";

import { Filter, TextWarpper, Img } from "../../styles/FilterModalStyle";
import classNames from "classnames";
import useModal from "../../components/Modal/useModal";
import { useSelector } from "react-redux";
import { postWriteSelector } from "../../module/PostWriteStatus";

export const CategoryButton = ({ text }) => {
  const isActive = useSelector(postWriteSelector("ButtonActive", "category"));
  const { openModal } = useModal();

  const onClickButton1 = () => {
    openModal({ type: "CategoryModal" });
  };

  return (
    <Filter className={classNames({ isActive })} onClick={onClickButton1}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      <Img className={classNames({ isActive })} />
    </Filter>
  );
};
