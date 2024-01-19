import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const PostContainer = styled.div`
  height: 90px;
  position: relative;
  width: 345px;
  display: flex;
  flex-direction: row;

  & > .image {
    position: absolute;
    height: 64px;
    width: 64px;
    left: 0;
    top: 13px;
    border-radius: 10px;
    background-size: cover;
    background-image: ${({ imgurl }) =>
      `url('${
        imgurl ? imgurl : 'https://c.animaapp.com/hs22pPSO/img/image-3.svg'
      }')`};
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
      white-space: nowrap;
      width: 268px;
      text-align: left;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & > .frame {
      position: relative;
      margin-left: auto;
      display: flex;
      gap: 4px;
      max-width: 230px;
      flex-wrap: nowrap;
      overflow: hidden;
      align-items: center;
      & > .nowrap {
        position: relative;
        max-width: 70px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        top: -3px;

        & > .text-2 {
          ${applyFontStyles({
            font: 'caption-03',
            color: 'var(--myspec-gray-scalegray-600)',
          })};
          margin-top: -1px;
          position: relative;
          text-align: right;
        }
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
