import styled from "styled-components";

export const ModalButton = (text) => {
  return (
    <Close>
      <div className="text-wrapper">{text}</div>
    </Close>
  );
};

export default ModalButton;

export const Close = styled.div`
  background-color: var(--myspec-primaryblue-1);
  border-radius: 12px;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 264px;

  & > .text-wrapper {
    color: var(--myspec-gray-scalewhite);
    font-family: var(--subtitle-01-font-family);
    font-size: var(--subtitle-01-font-size);
    font-style: var(--subtitle-01-font-style);
    font-weight: var(--subtitle-01-font-weight);
    left: 117px;
    letter-spacing: var(--subtitle-01-letter-spacing);
    line-height: var(--subtitle-01-line-height);
    position: absolute;
    text-align: center;
    top: 11px;
    white-space: nowrap;
  }
`;
