import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

const TextWrapper = styled.div`
  display: flex;
  padding: 4px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: var(--myspec-gray-scalegray-100);
  ${applyFontStyles({
    font: 'caption-02',
    color: 'var(--myspec-gray-scalegray-600)',
  })}
`;

const HashTag = ({ children }) => {
  return <TextWrapper>{children}</TextWrapper>;
};

export default HashTag;
