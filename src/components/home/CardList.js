import styled from 'styled-components';

export const CardsContainer = styled.div`
  box-shadow: 0px 2px 5px #00000005;
  position: relative;

  & > h1 {
    color: #000000;
    font-family: var(--subtitle-01-font-family);
    font-size: var(--subtitle-01-font-size);
    font-style: var(--subtitle-01-font-style);
    font-weight: var(--subtitle-01-font-weight);
    left: 16px;
    letter-spacing: var(--subtitle-01-letter-spacing);
    line-height: var(--subtitle-01-line-height);
    position: relative;
    white-space: nowrap;
    padding: 16px 0px;
    margin: 0;
  }
`;

export const CardListWrapper = styled.div`
  gap: 12px;
  align-items: flex-start;
  display: flex;
  left: 15px;
  overflow-x: scroll;
  position: relative;
  padding-bottom: 12px;
`;
