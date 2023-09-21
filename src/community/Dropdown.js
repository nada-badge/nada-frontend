import PropTypes from "prop-types";
import React from "react";
import { useReducer, useEffect } from "react";
import { Dropdown, TextWarpper } from "../styles/DropdownStyle";
import { useSelector, useDispatch } from "react-redux";
import { filterActiveSelector, changeField } from "../module/CommunityStatus";

export const DropDown = ({ type, vectorClassName, text }) => {
  const dispatch = useDispatch();

  const [state, setState] = useReducer(reducer, {
    type: type || "closed",
  });

  const isOpen = useSelector(filterActiveSelector);

  const onClicks = () => {
    setState();
    isOpen === text
      ? dispatch(changeField({ form: "filterActive", value: "" }))
      : dispatch(changeField({ form: "filterActive", value: text }));
  };

  useEffect(() => {
    state.type === "opened" && text !== isOpen && setState("closed");
  });

  return (
    <Dropdown
      className={`${state.type} `}
      onClick={() => {
        onClicks();
      }}
    >
      <TextWarpper className={`${state.type} `}>{text}</TextWarpper>

      <img
        className={`vector ${vectorClassName}`}
        alt="Vector"
        src={
          state.type === "opened"
            ? "https://c.animaapp.com/hs22pPSO/img/vector-9-4.svg"
            : "https://c.animaapp.com/hs22pPSO/img/vector-9-3.svg"
        }
      />
    </Dropdown>
  );
};

function reducer(state) {
  switch (state.type) {
    case "selected":
      return {
        type: "opened",
      };
    case "unselected":
      return {
        type: "opened",
      };
    case "opened":
      return {
        type: "unselected",
      };
    default:
      return undefined;
  }
}

DropDown.propTypes = {
  type: PropTypes.oneOf(["unselected", "selected", "opened"]),
  text: PropTypes.string,
};
