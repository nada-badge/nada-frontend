import styled from "styled-components";

export const CardsContainer = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  box-shadow: 0px 2px 5px #00000005;
  position: relative;
  flex-wrap: nowrap;
  width: 375px;

  & > h1 {
    color: #000000;
    font-family: var(--subtitle-01-font-family);
    font-size: var(--subtitle-01-font-size);
    font-style: var(--subtitle-01-font-style);
    font-weight: var(--subtitle-01-font-weight);
    letter-spacing: var(--subtitle-01-letter-spacing);
    line-height: var(--subtitle-01-line-height);
    position: relative;
    white-space: nowrap;
    padding: 16px 12px;
    margin: 0;
    text-align: left;
  }
`;

export const CardListWrapper = styled.div`
  width: 345px;
  gap: 12px;
  align-items: flex-start;
  display: flex;
  padding: 12px 12px;
  overflow-x: scroll;
  position: relative;
`;
