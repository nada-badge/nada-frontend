import styled from 'styled-components';
import { subtitle_02 } from '../fontStyle';

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
    ${subtitle_02('var(--myspec-gray-scalegray-900)')}
    margin-top: -1.12px;
    position: relative;
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
