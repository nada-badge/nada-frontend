import styled from 'styled-components';
import { subtitle_01 } from '../fontStyle';

export const CardsContainer = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  box-shadow: 0px 2px 5px #00000005;
  position: relative;
  flex-wrap: nowrap;
  width: 375px;

  & > h1 {
    ${subtitle_01('#000000')}
    position: relative;
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
