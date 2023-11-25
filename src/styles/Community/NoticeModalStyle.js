import styled from 'styled-components';
import { subtitle_01, subtitle_02, caption_02 } from '../fontStyle';
import kakao from '../../icon/kakao.png';
import link from '../../icon/link.png';

export const Layout = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  position: relative;

  & > .title {
    ${subtitle_01('var(--myspec-gray-scalegray-900)')}
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & > .content {
    ${caption_02('var(--myspec-gray-scalegray-600)')}
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
      ${subtitle_02('#000000')}
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
      ${subtitle_02('#000000')}
      margin-top: -1.12px;
      position: relative;
      width: fit-content;
    }
  }
`;

export const Image = styled.div`
  position: relative;
  background-size: 100%;
  width: 16px;
  height: 16px;

  &.linkImg {
    height: 16px;
    background-image: url(${link});
  }
  &.kakaOImg {
    height: 15px;
    background-image: url(${kakao});
  }
`;
