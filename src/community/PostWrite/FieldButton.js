import React from "react";

import { Filter, TextWarpper, Img } from "../../styles/FilterModalStyle";
import classNames from "classnames";
import useModal from "../../components/Modal/useModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { postWriteSelector } from "../../module/PostWriteStatus";

export const FieldButton = ({ text }) => {
  const isActive = useSelector(postWriteSelector("ButtonActive", "field"));
  const { openModal } = useModal();

  const onClickButton1 = () => {
    openModal({ type: "FieldModal" });
  };

  return (
    <Filter className={classNames({ isActive })} onClick={onClickButton1}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      <Img className={classNames({ isActive })} />
    </Filter>
  );
};
