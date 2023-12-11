import styled from 'styled-components';
import { applyFontStyles } from '../fontStyle';

export const PostContainer = styled.div`
  height: 90px;
  position: relative;
  width: 345px;
  display: flex;
  flex-direction: row;

  & > .image {
    height: 64px;
    left: 0;
    position: absolute;
    top: 13px;
    width: 64px;
    background-image: url('https://c.animaapp.com/hs22pPSO/img/image-3.svg');
  }

  & > .innerBox {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 269px;
    height: 64px;
    top: 13px;
    left: 76px;

    & > .title {
      ${applyFontStyles({
        font: 'subtitle-03',
      })};
      position: relative;
      white-space: nowrap;
      width: 269px;
      text-align: left;
    }

    & > .text {
      ${applyFontStyles({
        font: 'body-01',
      })};
      position: relative;
      top: 5px;
      white-space: nowrap;
      width: 268px;
      text-align: left;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & > .frame {
      align-items: center;
      position: relative;
      margin-left: auto;
      display: flex;
      gap: 4px;
      top: 12px;

      & > .text-2 {
        ${applyFontStyles({
          font: 'caption-03',
          color: 'var(--myspec-gray-scalegray-600)',
        })};
        margin-top: -1px;
        position: relative;
        text-align: right;
        white-space: nowrap;
        width: fit-content;
      }
      & > .ellipse {
        background-color: var(--myspec-gray-scalegray-600);
        border-radius: 1px;
        height: 2px;
        position: relative;
        width: 2px;
      }
    }
  }
`;
