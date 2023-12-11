import styled from 'styled-components';
import { applyFontStyles } from '../fontStyle';

export const Layout = {
  alignItems: 'center',
  display: 'inline-flex',
  flexDirection: 'column',
  position: 'relative',
};

export const List = {
  alignItems: 'flex-start',
  display: 'inline-flex',
  flex: '0 0 auto',
  flexDirection: 'column',
  position: 'relative',
};

export const Border = {
  height: '16px',
  position: 'relative',
  width: '256px',
};

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
    ${applyFontStyles({
      font: 'subtitle-02',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
    margin-top: -1.12px;
    position: relative;
    width: fit-content;

    &.isRed {
      color: red;
    }
  }
`;
