import { authSelector } from '../../../modules/redux/auth';
import { TitleBox, Explain, LoginBtn } from '../../../styles/Auth';
import { Item } from '../../../components/common/filter/FilterItems';
import { useState } from 'react';
import { regionData } from '../../../modules/common/AttributeData';
import { AttributeInfoButton } from '../../../components/common/AttributeInfoButton';
import { useSelector } from 'react-redux';

const RegionForm = ({ dispatchField, onSubmit, order, type }) => {
  const [disabled, setDisabled] = useState(true);

  const region = useSelector(authSelector(type, 'region'));

  const onClick = (e) => {
    const value = e.target.innerText;
    const updatedRegion = region.includes(value)
      ? region.filter((item) => item !== value) // 기존 region 존재하면, 삭제하기
      : [...region, value]; // 기존 region 없으면, 추가하기

    dispatchField({
      target: {
        value: updatedRegion,
        name: 'region',
      },
    });
  };

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
          <AttributeInfoButton
            text={text}
            onClick={onClick}
            isActive={region.includes(text)}
          />
        ))}
      </Item>
      <LoginBtn form={order} disabled={disabled}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default RegionForm;
