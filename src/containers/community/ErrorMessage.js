import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const ErrorMessage = () => {
  return (
    <div>
      <ErrorTitle>조건에 맞는 게시물이 없습니다</ErrorTitle>
      <ErrorContent>선택한 필터를 변경해 보세요</ErrorContent>
    </div>
  );
};

export const ErrorTitle = styled.div`
  ${applyFontStyles({
    font: 'body-02',
    color: 'var(--myspec-gray-scalegray-600)',
  })};
  height: 21px;
  left: 109px;
  position: absolute;
  text-align: center;
  top: 170px;
  white-space: nowrap;
`;

export const ErrorContent = styled.div`
  ${applyFontStyles({
    font: 'caption-02',
    color: 'var(--myspec-gray-scalegray-600)',
  })};

  height: 18px;
  left: 120px;
  position: absolute;
  text-align: center;
  top: 193px;
  white-space: nowrap;
`;
