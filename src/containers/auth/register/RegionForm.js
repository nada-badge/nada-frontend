import { authSelector } from '../../../modules/auth';
import { TitleBox, Explain, LoginBtn } from '../../../styles/Auth';
import {
  FilterItems,
  Item,
} from '../../../components/common/filter/FilterItems';
import { useState } from 'react';
import { regionData } from '../../../modules/common/AttributeData';
import { AttributeInfoButton } from '../../../components/common/AttributeInfoButton';

const RegionForm = ({ dispatchField, onSubmit, order, type }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <TitleBox>
        주로 어디에서
        <br />
        활동하고 계신가요?
        <br />
        <Explain>지역을 바탕으로 알맞는 정보를 추천해 드릴게요</Explain>
      </TitleBox>
      <Item style={{ paddingTop: '45px' }}>
        {regionData.map(({ id, text }) => (
          <AttributeInfoButton text={text} />
        ))}
      </Item>
      <LoginBtn form={order} disabled={disabled}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default RegionForm;
