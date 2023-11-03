import React, { useEffect } from "react";
import classNames from "classnames";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postWriteSelector,
  initializeForm,
  addField,
  setField,
} from "../../../module/Community/postWrite";
import { Button, TextWarpper } from "../../../styles/Community/SelectButton";

export const SelectAllButton = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState();
  const nowModal = useSelector(postWriteSelector("postWriteSelect", "modal"));

  const cases = [
    { id: 1, key: "area", all: "전국" },
    { id: 2, key: "field", all: "전체" },
    { id: 3, key: "category", all: "전체" },
  ];
  const key = cases[nowModal].key;
  const all = cases[nowModal].all;
  const setStatus = key === "category" ? setField : addField;

  const state = useSelector(postWriteSelector("postWriteSelect", key));

  const OnClickButton = () => {
    if (!state.includes(all)) {
      dispatch(initializeForm({ form: "postWriteSelect", key: key }));
      dispatch(
        setStatus({
          form: "postWriteSelect",
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
