import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Dropdown, TextWarpper, Img } from "../styles/DropdownStyle";
import { useSelector, useDispatch } from "react-redux";
import { communitySelector, setField } from "../module/CommunityStatus";

export const DropDown = ({ text, id }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState("unselected");
  const cases = [
    { text: "area", all: "전국" },
    { text: "field", all: "전체" },
    { text: "category", all: "전체" },
  ];

  const select = useSelector(
    communitySelector("subButtonSelect", cases[id].text)
  );
  const closestate = cases[id].all === select[0] ? "unselected" : "selected";

  const isOpen = useSelector(communitySelector("buttonSelect", "filter"));

  // A버튼이 클릭된 상태로 재클릭이라면 filter를 초기화하고, 그게 아니라면 filter에 해당 text 값 넘기기
  const onClicks = () => {
    if (isOpen === text) {
      dispatch(setField({ form: "buttonSelect", key: "filter", value: "" }));
      setState(closestate);
    } else {
      dispatch(setField({ form: "buttonSelect", key: "filter", value: text }));
      setState("opened");
    }
  };

  // A버튼이 열려있는 상태로 B버튼이 클릭되면 A버튼은 닫기
  useEffect(() => {
    state === "opened" && text !== isOpen && setState(closestate);
    state === "selected" && isOpen === undefined && setState(closestate);
  }, [isOpen]);

  return (
    <Dropdown
      className={state}
      onClick={() => {
        onClicks();
      }}
    >
      <TextWarpper className={state}>{text}</TextWarpper>
      <Img className={state} />
    </Dropdown>
  );
};

DropDown.propTypes = {
  type: PropTypes.oneOf(["unselected", "selected", "opened"]),
  text: PropTypes.string,
};
