import React from "react";
import { Filter, TextWarpper, Img } from "../../styles/FilterModalStyle";
import classNames from "classnames";
import useModal from "../../components/Modal/useModal";
import { useState } from "react";

export const FilterModal = ({ text, Modalname, state }) => {
  const [isActive, setIsActive] = useState(false);

  const { openModal } = useModal();

  const onClickButton1 = () => {
    openModal({ type: Modalname });
  };

  return (
    <Filter className={classNames({ isActive })} onClick={onClickButton1}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      <Img className={classNames({ isActive })} />
    </Filter>
  );
};
