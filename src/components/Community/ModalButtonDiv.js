import styled from "styled-components";
import classNames from "classnames";

export const ModalButtonDiv = ({ cancelText, cancel, actText, act, isRed }) => {
  return (
    <ButtonList>
      <div className="cancel" onClick={() => cancel()}>
        <div className="text">{cancelText}</div>
      </div>
      <div className={classNames("act", { isRed })} onClick={() => act()}>
        <div className="text">{actText}</div>
      </div>
    </ButtonList>
  );
};

export default ModalButtonDiv;

export const ButtonList = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;

  & > .cancel {
    background-color: var(--myspec-gray-scalegray-100);
    border-radius: 10px;
    height: 48px;
    overflow: hidden;
    position: relative;
    width: 128px;
    & > .text {
      color: var(--myspec-gray-scalegray-900);
      font-family: var(--subtitle-02-font-family);
      font-size: var(--subtitle-02-font-size);
      font-style: var(--subtitle-02-font-style);
      font-weight: var(--subtitle-02-font-weight);
      left: 49px;
      letter-spacing: var(--subtitle-02-letter-spacing);
      line-height: var(--subtitle-02-line-height);
      position: absolute;
      text-align: center;
      top: 11px;
      white-space: nowrap;
    }
  }

  & > .act {
    border-radius: 10px;
    height: 48px;
    overflow: hidden;
    position: relative;
    width: 128px;
    display: flex;
    background-color: var(--myspec-primaryblue-1);
    &.isRed {
      background-color: var(--myspec-primaryred-1);
    }
    & > .text {
      color: var(--myspec-gray-scalegray-100);
      font-family: var(--subtitle-01-font-family);
      font-size: var(--subtitle-01-font-size);
      font-style: var(--subtitle-01-font-style);
      font-weight: var(--subtitle-01-font-weight);
      letter-spacing: var(--subtitle-01-letter-spacing);
      line-height: var(--subtitle-01-line-height);
      position: relative;
      width: 128px;
      top: 11px;
      white-space: nowrap;
      text-align: center;
    }
  }
`;
