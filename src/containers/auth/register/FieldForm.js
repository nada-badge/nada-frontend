import { authSelector } from '../../../modules/auth';
import { TitleBox, Explain, LoginBtn } from '../../../styles/Auth';
import { FilterItems } from '../../../components/common/filter/FilterItems';
import { useState } from 'react';

const FieldForm = ({ dispatchField, onSubmit, order, type }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <TitleBox>
        관심 분야가
        <br />
        어떻게 되시나요?
      </TitleBox>
      <Explain>관심 분야를 바탕으로 공고를 띄워 드려요</Explain>
      {/* <FilterItems text={'region'} /> */}
      <LoginBtn form={order} disabled={disabled}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default FieldForm;
