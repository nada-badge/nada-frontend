/** ErrorMessage 조건에 맞는 게시물이 없을 시 출력되는 에러 컨테이너 */
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const ErrorMessage = () => {
  return (
    <Error>
      <div className="ErrorTitle">조건에 맞는 게시물이 없습니다</div>
      <div className="ErrorContent">선택한 필터를 변경해 보세요</div>
    </Error>
  );
};

export const Error = styled.div`
  padding-top: 82px;
  padding-bottom: 128px;
  display: block;
  flex-direction: column;

  & > .ErrorTitle {
    ${applyFontStyles({
      font: 'body-02',
      color: 'var(--myspec-gray-scalegray-600)',
    })};
    height: 21px;
    text-align: center;
    white-space: nowrap;
  }

  & > .ErrorContent {
    ${applyFontStyles({
      font: 'caption-02',
      color: 'var(--myspec-gray-scalegray-600)',
    })};

    height: 18px;
    text-align: center;
    white-space: nowrap;
  }
`;
