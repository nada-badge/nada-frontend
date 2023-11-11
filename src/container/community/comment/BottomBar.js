import styled from "styled-components";
import { useState, useEffect } from "react";
import classNames from "classnames";
import arrowButton from "../../../icon/arrowButton.png";
import arrowButtonActive from "../../../icon/arrowButtonActive.png";
import useComment from "../../../module/queries/commentQuery";

export const BottomBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { mutate } = useComment();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setIsActive(!!inputValue);
  }, [inputValue]);

  const sendComment = () => {
    mutate({ inputValue });
    setInputValue("");
  };

  return (
    <Bar>
      <div className="input">
        <div className="text">
          <input
            className="wrapper"
            onChange={onChange}
            value={inputValue}
            placeholder="댓글을 입력하세요"
          />
        </div>
      </div>
      <div
        className={classNames("sendArrow", { isActive })}
        onClick={sendComment}
      />
    </Bar>
  );
};

export const Bar = styled.div`
  align-items: flex-start;
  background-color: var(--myspec-gray-scalewhite);
  border-color: var(--myspec-gray-scalegray-200);
  border-top-style: solid;
  border-top-width: 1px;
  display: inline-flex;
  gap: 8px;
  padding: 16px 15px 36px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  & > .input {
    align-items: center;
    background-color: var(--myspec-gray-scalegray-100);
    border-radius: 51px;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    padding: 8px 16px;
    position: relative;

    & > .text {
      align-items: center;
      display: flex;
      gap: 10px;
      position: relative;

      & > .wrapper {
        background-color: var(--myspec-gray-scalegray-100);
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
        border: none;
        width: 269px;
      }
      & > .wrapper:focus {
        outline: none;
      }
    }
  }
  & > .sendArrow {
    background-size: 100%;
    height: 36px;
    width: 36px;
    background-image: url(${arrowButton});

    &.isActive {
      background-image: url(${arrowButtonActive});
    }
  }
`;
