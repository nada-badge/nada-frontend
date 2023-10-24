import styled from 'styled-components';
import { caption_02 } from '../../styles/fontStyle';

const TextWrapper = styled.div`
  display: flex;
  padding: 4px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: var(--myspec-gray-scale-gray-100);
  ${caption_02('var(--myspec-gray-scale-gray-600)')}
`;

const HashTag = ({ children }) => {
  return <TextWrapper>{children}</TextWrapper>;
};

export default HashTag;
