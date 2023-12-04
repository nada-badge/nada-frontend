import styled from 'styled-components';
import { applyFontStyles } from '../fontStyle';

export const PostContainer = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

export const TitleStyle = styled.div`
  align-items: center;
  background-color: var(--myspec-gray-scalewhite);
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 10px 10px;
  padding: 12px 15px;
  position: relative;
  width: 375px;

  & > .div {
    ${applyFontStyles({
      font: 'title-02',
      color: 'var(--myspec-gray-scalegray-600)',
    })};
    margin-top: -1px;
    position: relative;
    width: 345px;
    border: none;
  }
  & > .div:focus {
    outline: none;
  }
`;

export const Frame = styled.div`
  align-items: flex-start;
  background-color: var(--myspec-gray-scalewhite);
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  padding: 12px 15px;
  position: relative;
  width: 375px;
`;

export const ContentStyle = styled.div`
  align-items: flex-start;
  background-color: var(--myspec-gray-scalewhite);
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  height: 466px;
  padding: 12px 15px;
  position: relative;
  width: 375px;

  & > .text {
    ${applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-600)',
    })};
    margin-top: -1px;
    position: relative;
    width: 345px;
    border: none;
  }
  & > .text:focus {
    outline: none;
  }
`;

export const Border = styled.div`
  height: 12px;
  position: relative;
  width: 375px;
`;

export const Images = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  height: 96px;
  position: relative;
  width: 375px;

  & > .images {
    align-items: flex-start;
    display: flex;
    gap: 8px;
    left: 15px;
    position: relative;
    top: 12px;
    width: 345px;

    & > .image {
      background-color: var(--myspec-gray-scalegray-100);
      border-radius: 10px;
      height: 72px;
      overflow: hidden;
      position: relative;
      width: 72px;

      & > .overlap-group {
        height: 45px;
        left: 18px;
        position: relative;
        top: 18px;
        width: 45px;

        & > .rectangle {
          border: 2px solid;
          border-color: var(--myspec-gray-scalegray-400);
          border-radius: 10px;
          height: 36px;
          left: 0;
          position: absolute;
          top: 0;
          width: 36px;
        }

        & > .img {
          height: 16px;
          left: 1px;
          position: absolute;
          top: 12px;
          width: 34px;
        }

        & > .ellipse {
          border: 2px solid;
          border-color: var(--myspec-gray-scalegray-400);
          border-radius: 4px;
          height: 8px;
          left: 21px;
          position: absolute;
          top: 7px;
          width: 8px;
        }

        & > .group {
          background-color: #888787;
          border-radius: 10px;
          height: 20px;
          left: 25px;
          position: absolute;
          top: 25px;
          width: 20px;
        }
      }
    }
  }
`;
