import styled from 'styled-components';
import { subtitle_02 } from '../fontStyle';

export const CommunityPage = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  text-align: left;
  gap: 12px 0px;
  background-color: var(--myspec-gray-scalegray-100);
`;

export const Search = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  height: 64px;
  position: relative;
  width: 375px;

  & > .Input {
    background-color: var(--myspec-gray-scalegray-100);
    border-radius: 10px;
    height: 40px;
    left: 15px;
    overflow: hidden;
    position: relative;
    top: 12px;
    width: 345px;

    & > .Text {
      ${subtitle_02('var(--myspec-gray-scalegray-600)')}
      height: 24px;
      left: 12px;
      position: absolute;
      top: 7px;
    }

    & > .SearchImg {
      height: 24px;
      left: 309px;
      position: absolute;
      top: 8px;
      width: 24px;
    }
  }
`;

export const Border = styled.div`
  height: 16px;
  position: relative;
`;

export const Contents = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  height: 546px;
  position: relative;
  width: 375px;

  & > .Content {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    left: 15px;
    position: relative;
    top: 12px;
  }
`;
