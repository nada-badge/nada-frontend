/** SelectButton  area, field, category 모달 내 개별요소에 대한 버튼 */
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
} from "../../../module/Community/postWrite";
import {
  Button,
  TextWarpper,
  Img,
} from "../../../styles/Community/SelectButton";

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
  //현재 선택된 모달에 따른 key와 all 값 선언
  const key = cases[nowModal].key;
  const all = cases[nowModal].all;
  //area, field와 category의 타입차이로 인한 삼항 연산자
  const setStatus = key === "category" ? setField : addField;
  const deleteStatus = key === "category" ? initializeForm : deleteField;

  const state = useSelector(postWriteSelector("postWriteSelect", key));

  const OnClickButton = () => {
    //클릭된 값이 이미 활성화상태였다면 비활성화
    if (isActive) {
      dispatch(deleteStatus({ form: form, key: key, value: text }));
      //비활성화 후 state길이가 1이라면 전체,전국 버튼 활성화
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
      // 클릭된 값이 비활성화 상태라면 활성화
      dispatch(
        setStatus({
          form: form,
          key: key,
          value: text,
        })
      );
      if (key !== "category") {
        //해당 버튼 활성화 후 전체,전국 버튼은 비활성화
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
