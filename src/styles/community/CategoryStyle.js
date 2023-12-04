import styled from 'styled-components';
import { subtitle_01 } from '../fontStyle';

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
    ${subtitle_01('var(--myspec-gray-scalegray-500)')}
    margin-top: -2px;
    position: relative;
    width: fit-content;
  }
  & > .isActive {
    color: var(--myspec-primaryblue-1);
  }
`;
