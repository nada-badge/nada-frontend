import styled from 'styled-components';
import { body_01 } from '../../styles/fontStyle';

const TagButton = ({ tag }) => {
  return (
    <Button>
      <TextWarpper>{tag}</TextWarpper>
    </Button>
  );
};
export default TagButton;

export const Button = styled.div`
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  background-color: var(--myspec-gray-scalegray-100);
  gap: 8px;
  padding: 4px 12px;
`;

export const TextWarpper = styled.div`
  ${body_01('var(--myspec-gray-scalegray-600)')}
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;
