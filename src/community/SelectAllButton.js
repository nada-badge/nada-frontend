import React, { useEffect } from "react";
import classNames from "classnames";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  communitySelector,
  initializeForm,
  addField,
} from "../module/Community/CommunityStatus";
import { Button, TextWarpper } from "../styles/SelectButton";

export const SelectAllButton = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState();
  const nowModal = useSelector(communitySelector("buttonSelect", "filter"));

  const cases = [
    { id: 1, key: "area", all: "전국" },
    { id: 2, key: "field", all: "전체" },
    { id: 3, key: "category", all: "전체" },
  ];

  const num = match(nowModal);
  const key = cases[num].key;
  const all = cases[num].all;

  const state = useSelector(communitySelector("subButtonSelect", key));

  const OnClickButton = () => {
    if (!state.includes(all)) {
      dispatch(initializeForm({ form: "subButtonSelect", key: key }));
      dispatch(
        addField({
          form: "subButtonSelect",
          key: key,
          value: all,
        })
      );
    }
  };

  useEffect(() => {
    setIsActive(state.includes(all));
  }, [state]);

  return (
    <Button className={classNames({ isActive })} onClick={OnClickButton}>
      <TextWarpper className={classNames({ isActive })}>{all}</TextWarpper>
    </Button>
  );
};

const match = (nowModal) => {
  switch (nowModal) {
    case "지역":
      return 0;
    case "분야":
      return 1;
    case "종류":
      return 2;
    default:
      return 4;
  }
};
