import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./Dropdown.css";

export const DropDown = ({
  type,
  className,
  vectorClassName,
  text = "지역",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "closed",
  });

  return (
    <div
      className={`drop-down ${state.type} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="text-wrapper">{text}</div>
      {["closed", "opened", "selected-category", "selected"].includes(
        state.type
      ) && (
        <img
          className={`vector ${vectorClassName}`}
          alt="Vector"
          src={
            state.type === "selected"
              ? "https://c.animaapp.com/hs22pPSO/img/x.svg"
              : state.type === "opened"
              ? "https://c.animaapp.com/hs22pPSO/img/vector-9-4.svg"
              : state.type === "closed"
              ? "https://c.animaapp.com/hs22pPSO/img/vector-9-3.svg"
              : "https://c.animaapp.com/hs22pPSO/img/vector-8.svg"
          }
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.type === "selected-category") {
    switch (action) {
      case "click":
        return {
          type: "opened",
        };
      default:
        return undefined;
    }
  }

  if (state.type === "selected") {
    switch (action) {
      case "click":
        return {
          type: "opened",
        };
      default:
        return undefined;
    }
  }

  if (state.type === "unselected") {
    switch (action) {
      case "click":
        return {
          type: "opened",
        };
      default:
        return undefined;
    }
  }

  if (state.type === "opened") {
    switch (action) {
      case "click":
        return {
          type: "closed",
        };
      default:
        return undefined;
    }
  }

  if (state.type === "closed") {
    switch (action) {
      case "click":
        return {
          type: "opened",
        };
      default:
        return undefined;
    }
  }

  return state;
}

DropDown.propTypes = {
  type: PropTypes.oneOf([
    "unselected",
    "selected",
    "closed",
    "opened",
    "selected-category",
  ]),
  text: PropTypes.string,
};
