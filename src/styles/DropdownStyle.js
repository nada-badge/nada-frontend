import styled from "styled-components";

export const Dropdown = styled.div`
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  overflow: hidden;
  position: relative;

  &.unselected {
    background-color: var(--myspec-gray-scalegray-100);
    gap: 8px;
    padding: 4px 12px;
  }

  &.opened {
    background-color: var(--myspec-primaryblue-1);
    gap: 8px;
    padding: 4px 12px;
  }

  &.selected {
    background-color: var(--myspec-primaryblue-1);
    gap: 3px;
    padding: 4px 7px 4px 12px;
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

  &.unselected {
    color: var(--myspec-gray-scalegray-600);
  }

  &.opened {
    color: var(--myspec-gray-scalewhite);
  }

  &.selected {
    color: var(--myspec-gray-scalewhite);
  }
`;

export const Img = styled.image`
  position: relative;
  background-size: 100%;
  height: 7.06px;
  margin-right: -0.35px;
  width: 12.71px;

  &.unselected {
    background-image: url("https://c.animaapp.com/hs22pPSO/img/vector-9-3.svg");
  }

  &.opened {
    background-image: url("https://c.animaapp.com/hs22pPSO/img/vector-9-4.svg");
  }

  &.selected {
    background-image: url("https://c.animaapp.com/SYOY3Elz/img/vector-8-1.svg");
  }
`;
