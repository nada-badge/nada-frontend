import styled from 'styled-components';
import { applyFontStyles } from '../fontStyle';

export const Button = styled.div`
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  background-color: var(--myspec-gray-scalegray-100);
  gap: 8px;
  padding: 4px 12px;

  &.isActive {
    background-color: var(--myspec-primaryblue-1);
    gap: 8px;
    padding: 4px 12px;
  }
`;

export const TextWarpper = styled.div`
  ${applyFontStyles({
    font: 'body-01',
    color: 'var(--myspec-gray-scalegray-600)',
  })};
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;

  &.isActive {
    color: var(--myspec-gray-scalewhite);
  }
`;

