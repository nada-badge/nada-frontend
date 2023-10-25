import styled from "styled-components";

export const Categorylist = styled.div`
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
`;

export const Wrapper = styled.div`
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: var(--myspec-gray-scalegray-500);
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  height: 24px;
  justify-content: center;
  position: relative;

  &.isActive {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-color: var(--myspec-primaryblue-1);
  }

  & > .Text {
    color: var(--myspec-gray-scalegray-500);
    font-family: var(--subtitle-01-font-family);
    font-size: var(--subtitle-01-font-size);
    font-style: var(--subtitle-01-font-style);
    font-weight: var(--subtitle-01-font-weight);
    letter-spacing: var(--subtitle-01-letter-spacing);
    line-height: var(--subtitle-01-line-height);
    margin-top: -2px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  & > .isActive {
    color: var(--myspec-primaryblue-1);
  }
`;
