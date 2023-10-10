import React, { useEffect } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postWriteSelector,
  addField,
  deleteField,
} from "../../module/PostWriteStatus";

export const SelectButton = ({ text }) => {
  const [isActive, setIsActive] = useState();
  const dispatch = useDispatch();
  const state = useSelector(postWriteSelector("postWriteSelect", "area"));

  const OnClickButton = () => {
    if (state.includes(text)) {
      dispatch(
        deleteField({
          form: "postWriteSelect",
          key: "area",
          value: text,
        })
      );
      console.log("test전", state.length);
      if (state.length === 1) {
        console.log("test후", state.length);
        dispatch(
          addField({
            form: "postWriteSelect",
            key: "area",
            value: "전국",
          })
        );
      }
    } else {
      dispatch(
        deleteField({
          form: "postWriteSelect",
          key: "area",
          value: "전국",
        })
      );
      dispatch(
        addField({
          form: "postWriteSelect",
          key: "area",
          value: text,
        })
      );
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

export const Button = styled.div`
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  background-color: var(--myspec-gray-scalegray-100);
  gap: 8px;
  padding: 4px 12px;

  &.isActive {
    background-color: var(--myspec-primaryblue-1);
    gap: 8px;
    padding: 4px 12px;
  }
`;

export const TextWarpper = styled.div`
  font-family: var(--body-01-font-family);
  font-size: var(--body-01-font-size);
  font-style: var(--body-01-font-style);
  font-weight: var(--body-01-font-weight);
  letter-spacing: var(--body-01-letter-spacing);
  line-height: var(--body-01-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;

  color: var(--myspec-gray-scalegray-600);

  &.isActive {
    color: var(--myspec-gray-scalewhite);
  }
`;

export const Img = styled.image`
  height: 7.06px;
  margin-right: -0.35px;
  width: 12.71px;
  position: relative;
  background-size: 80%;
  background-image: url("https://c.animaapp.com/ECVOBGUR/img/x-2.svg");
`;
