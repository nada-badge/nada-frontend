import React from 'react';
import { LoginBtn, TitleBox } from '../../../styles/Survey';
import styled from 'styled-components';
import { RightArrowSvg } from '../../../icon/Login/RightArrowSvg';
import { SpaceBetween } from '../../../Search/components/SearchCategory';
import { applyFontStyles } from '../../../styles/fontStyle';
import ShapeGrid from '../../components/ShapeGrid';

const RoundSpaceBetween = styled(SpaceBetween)`
  ${applyFontStyles({ font: 'body-01' })}
  padding: 13px;
  border-radius: 20px;
  background: var(--myspec-gray-scalegray-100, #f8f8f8);
  box-sizing: border-box;
`;

const FixedLoginBtn = styled(LoginBtn)`
  position: fixed;
  max-width: 345px;
  border: none;
  margin-bottom: 50px;
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
