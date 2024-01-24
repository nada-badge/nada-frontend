// 뱃지 모양을 입력받는 컨테이너
import { LoginBtn, TextWithSvg, TitleBox } from '../../../styles/Survey';
import styled from 'styled-components';
import { RightArrowSvg } from '../../../icon/Login/RightArrowSvg';
import { applyFontStyles } from '../../../styles/fontStyle';
import ShapeGrid from '../../components/ShapeGrid';

const RoundSpaceBetween = styled(TextWithSvg)`
  ${applyFontStyles({ font: 'body-01' })}
  border-radius: 20px;
`;

export const FixedLoginBtn = styled(LoginBtn)`
  position: fixed;
  max-width: 345px;
  border: none;
  margin-bottom: 50px;
  & > div {
    ${applyFontStyles({ font: 'title-01', color: 'white' })}
  }
`;

const ShapeForm = ({ onSubmit, order, dispatchField }) => {
  return (
    <>
      <TitleBox>뱃지 모양을 골라 주세요.</TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <RoundSpaceBetween>
          <div>사진 업로드하기</div>
          <RightArrowSvg width={8} height={16} />
        </RoundSpaceBetween>
        <ShapeGrid />
      </form>
      <FixedLoginBtn form={order} disabled={false}>
        <div>다음</div>
      </FixedLoginBtn>
    </>
  );
};

export default ShapeForm;
