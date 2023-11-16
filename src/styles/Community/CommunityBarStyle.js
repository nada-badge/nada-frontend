import styled from 'styled-components';
import { body_02 } from '../fontStyle';

export const Bar = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  border-color: var(--myspec-gray-scalegray-400);
  border-top-style: solid;
  border-top-width: 1px;
  height: 72px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;

  & > .div {
    align-items: center;
    display: inline-flex;
    gap: 4px;
    left: 311px;
    padding: 6px 4px;
    position: absolute;
    top: 10px;
    & > .comment {
      height: 24px;
      position: relative;
      width: 24px;
      & > .group {
        background-image: url(https://c.animaapp.com/Owwkr6s0/img/vector.svg);
        background-size: 100% 100%;
        height: 18px;
        left: 3px;
        position: relative;
        top: 3px;
        width: 18px;
      }
    }
    & > .text {
      ${body_02('var(--myspec-gray-scalegray-600)')}
      position: relative;
      text-align: center;
      white-space: nowrap;
      width: fit-content;
    }
  }
`;

export const Img = styled.div`
  height: 24px;
  width: 24px;
  top: 16px;
  position: absolute;
  background-size: 100%;
`;

export const MenuImg = styled(Img)`
  left: 14px;
  background-image: url('https://c.animaapp.com/Owwkr6s0/img/frame-33.svg');
`;

export const BookmarkImg = styled(Img)`
  left: 50px;
  background-image: url('https://c.animaapp.com/Owwkr6s0/img/bookmark.svg');
  &.isActive {
    background-image: url('https://c.animaapp.com/dApWEI5K/img/bookmark.svg');
  }
`;
