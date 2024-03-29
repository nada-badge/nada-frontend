import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const Bar = styled.div`
  align-items: flex-start;
  background-color: var(--myspec-gray-scalewhite);
  border-color: var(--myspec-gray-scalegray-200);
  border-top-style: solid;
  border-top-width: 1px;
  gap: 12px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  padding: 16px 15px;
  width: 345px;
`;

export const InputBar = styled.div`
  width: 345px;
  display: flex;
  gap: 8px;

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
      gap: 4px;
      position: relative;
      width: 269px;

      & > .name {
        ${applyFontStyles({
          font: 'body-01',
          color: 'var(--myspec-primaryblue-1)',
        })};
      }

      & > .wrapper {
        ${applyFontStyles({
          font: 'body-01',
        })};
        background-color: var(--myspec-gray-scalegray-100);
        margin-top: -1px;
        position: relative;
        white-space: nowrap;
        width: fit-content;
        border: none;

        ::placeholder {
          ${applyFontStyles({
            font: 'body-01',
            color: 'var(--myspec-gray-scalegray-600)',
          })};
        }
      }
      & > .wrapper:focus {
        outline: none;
      }
    }
  }
`;
