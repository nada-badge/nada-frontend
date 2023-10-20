import { useEffect } from "react";
import classNames from "classnames";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postWriteSelector,
  addField,
  deleteField,
  setField,
  initializeForm,
} from "../../module/PostWriteStatus";
import { Button, TextWarpper, Img } from "../../styles/SelectButton";

export const SelectButton = ({ text }) => {
  const dispatch = useDispatch();

  const nowModal = useSelector(postWriteSelector("postWriteSelect", "modal"));

  const [isActive, setIsActive] = useState(false);
  const form = "postWriteSelect";

  const cases = [
    { id: 0, key: "area", all: "전국" },
    { id: 1, key: "field", all: "전체" },
    { id: 2, key: "category", all: "전체" },
  ];
  const key = cases[nowModal].key;
  const all = cases[nowModal].all;
  const setStatus = key === "category" ? setField : addField;
  const deleteStatus = key === "category" ? initializeForm : deleteField;

  const state = useSelector(postWriteSelector("postWriteSelect", key));

  const OnClickButton = () => {
    if (isActive) {
      dispatch(deleteStatus({ form: form, key: key, value: text }));
      if (state.length === 1) {
        dispatch(
          setStatus({
            form: form,
            key: key,
            value: all,
          })
        );
      }
    } else {
      dispatch(
        setStatus({
          form: form,
          key: key,
          value: text,
        })
      );
      if (key !== "category") {
        dispatch(deleteField({ form: form, key: key, value: all }));
      }
    }
  };

  useEffect(() => {
    setIsActive(state.includes(text));
  }, [state]);

  return (
    <Button className={classNames({ isActive })} onClick={OnClickButton}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      {isActive && <Img />}
    </Button>
  );
};
