import styled from 'styled-components';
import { applyFontStyles } from '../fontStyle';

export const TextWarpper = styled.div`
  align-items: center;
  border-radius: 16px;
  background-color: var(--myspec-gray-scalegray-100);
  gap: 8px;
  padding: 4px 12px;

  ${applyFontStyles({
    font: 'body-01',
    color: 'var(--myspec-gray-scalegray-600)',
  })};
  margin-top: -1px;

  &.isActive {
    color: var(--myspec-gray-scalewhite);
    background-color: var(--myspec-primaryblue-1);
  }
`;
