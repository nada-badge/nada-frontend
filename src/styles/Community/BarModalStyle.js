import styled from "styled-components";

export const Layout = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

export const List = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
`;

export const Menu = styled.div`
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1.12px;
  border-color: var(--myspec-gray-scalegray-200);
  display: flex;
  flex: 0 0 auto;
  gap: 142px;
  justify-content: center;
  padding: 12px 0px;
  position: relative;
  width: 256px;

  & > .text-wrapper {
    color: var(--myspec-gray-scalegray-900);
    font-family: var(--subtitle-02-font-family);
    font-size: var(--subtitle-02-font-size);
    font-style: var(--subtitle-02-font-style);
    font-weight: var(--subtitle-02-font-weight);
    letter-spacing: var(--subtitle-02-letter-spacing);
    line-height: var(--subtitle-02-line-height);
    margin-top: -1.12px;
    position: relative;
    white-space: nowrap;
    width: fit-content;

    &.isRed {
      color: red;
    }
  }
`;

export const Border = styled.div`
  height: 16px;
  position: relative;
  width: 256px;
`;