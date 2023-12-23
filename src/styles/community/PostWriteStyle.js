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
  background-color: var(--myspec-gray-scalegray-100);
`;

export const Images = styled.div`
  position: relative;
  height: 96px;
  width: 375px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const PreViewImg = styled.div`
  position: relative;

  & > .img {
    width: 72px;
    height: 72px;
    border-radius: 10px;
  }
  & > .xImg {
    position: absolute;
    left: 53px;
    top: 2px;
  }
`;
