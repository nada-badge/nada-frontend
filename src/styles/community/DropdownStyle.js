import styled from 'styled-components';
import { applyFontStyles } from '../fontStyle';

export const Dropdown = styled.div`
  align-items: center;
  border-radius: 16px;
  display: flex;
  position: relative;
  padding: 4px 12px;

  &.unselected {
    background-color: var(--myspec-gray-scalegray-100);
    gap: 8px;
  }

  &.opened {
    background-color: var(--myspec-primaryblue-1);
    gap: 8px;
  }

  &.selected {
    background-color: var(--myspec-primaryblue-1);
    gap: 3px;
    padding: 4px 7px 4px 12px;
  }
`;

export const TextWarpper = styled.div`
  ${applyFontStyles({ font: 'body-01', color: '' })};
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;

  &.unselected {
    color: var(--myspec-gray-scalegray-600);
  }

  &.opened {
    color: var(--myspec-gray-scalewhite);
  }

  &.selected {
    color: var(--myspec-gray-scalewhite);
  }
`;
