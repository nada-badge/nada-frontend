import styled from 'styled-components';
import arrowButton from '../../icon/arrowButton.png';
import arrowButtonActive from '../../icon/arrowButtonActive.png';
import { applyFontStyles } from '../fontStyle';

export const Bar = styled.div`
  align-items: flex-start;
  background-color: var(--myspec-gray-scalewhite);
  border-color: var(--myspec-gray-scalegray-200);
  border-top-style: solid;
  border-top-width: 1px;
  display: inline-flex;
  gap: 8px;
  padding: 16px 15px 36px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  & > .input {
    align-items: center;
    background-color: var(--myspec-gray-scalegray-100);
    border-radius: 51px;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    padding: 8px 16px;
    position: relative;

    & > .text {
      align-items: center;
      display: flex;
      gap: 10px;
      position: relative;

      & > .wrapper {
        ${applyFontStyles({
          font: 'body-01',
          color: 'var(--myspec-gray-scalegray-600)',
        })};
        background-color: var(--myspec-gray-scalegray-100);
        margin-top: -1px;
        position: relative;
        white-space: nowrap;
        width: fit-content;
        border: none;
        width: 269px;
      }
      & > .wrapper:focus {
        outline: none;
      }
    }
  }
  & > .sendArrow {
    background-size: 100%;
    height: 36px;
    width: 36px;
    background-image: url(${arrowButton});

    &.isActive {
      background-image: url(${arrowButtonActive});
    }
  }
`;
