/** SelectButton  area, field, category 모달 내 개별요소에 대한 버튼 */
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  communitySelector,
  addField,
  deleteField,
} from "../../module/Community/community";
import { Button, TextWarpper, Img } from "../../styles/Community/SelectButton";

export const SelectButton = ({ text }) => {
  const dispatch = useDispatch();

  const nowModal = useSelector(communitySelector("buttonSelect", "filter"));

  const [isActive, setIsActive] = useState(false);
  const form = "subButtonSelect";

  const num = match(nowModal);

  const cases = [
    { id: 0, key: "area", all: "전국" },
    { id: 1, key: "field", all: "전체" },
    { id: 2, key: "category", all: "전체" },
  ];
  const key = cases[num].key;
  const all = cases[num].all;

  const state = useSelector(communitySelector("subButtonSelect", key));

  const OnClickButton = () => {
    if (isActive) {
      dispatch(deleteField({ form: form, key: key, value: text }));
      if (state.length === 1) {
        dispatch(
          addField({
            form: form,
            key: key,
            value: all,
          })
        );
      }
    } else {
      dispatch(
        addField({
          form: form,
          key: key,
          value: text,
        })
      );
      dispatch(deleteField({ form: form, key: key, value: all }));
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
