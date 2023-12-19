import styled from 'styled-components';
import { applyFontStyles } from '../fontStyle';

export const Layout = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  position: relative;

  & > .title {
    ${applyFontStyles({
      font: 'subtitle-01',
      color: 'var(--myspec-gray-scalegray-900)',
    })};

    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & > .content {
    ${applyFontStyles({
      font: 'caption-02',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
    position: relative;
    text-align: center;
    width: fit-content;
  }

  & > .img {
    flex: 0 0 auto;
    position: relative;
  }

  & > .border {
    height: 8px;
    position: relative;
    width: 256px;
  }

  & > .border-2 {
    height: 16px;
    position: relative;
    width: 256px;
  }

  & > .link {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
    width: 232px;
    height: 48px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: var(--myspec-gray-scalegray-200);

    &.text {
      ${applyFontStyles({
        font: 'subtitle-02',
      })};
      margin-top: -1px;
      position: relative;
      width: fit-content;
    }
  }
  & > .kakaO {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
    width: 232px;
    height: 48px;

    & > .text {
      ${applyFontStyles({
        font: 'subtitle-02',
      })};
      margin-top: -1.12px;
      position: relative;
      width: fit-content;
    }
  }
`;
