/** FilterItems 활성화 된 filter의 내용을 출력하기 위한 filter아이템 관리 컨테이너*/
import { useEffect, useState } from 'react';
import { SelectButton } from '../../components/community/SelectButton';
import styled from 'styled-components';
import { SelectAllButton } from '../../components/community/SelectAllButton';
import { useSelector } from 'react-redux';
import { communitySelector } from '../../modules/Community/community';
import { regionButtons } from '../../components/common/AreaFieldCategoryData';
import { fieldButtons } from '../../components/common/AreaFieldCategoryData';
import { categoryButtons } from '../../components/common/AreaFieldCategoryData';

export const FilterItems = ({ text }) => {
  const mainCategory = useSelector(
    communitySelector('buttonSelect', 'maincategory'),
  );

  const [category, setCategory] = useState(categoryButtons);

  //모집의 경우 category의 내용을 공모전~대외활동까지로 수정
  useEffect(() => {
    if (mainCategory === '모집') {
      setCategory(category.slice(0, 6));
    }
  }, []);

  const output = (text) => {
    //코드 수정
    switch (text) {
      case '지역':
        return regionButtons.map((current, index) => {
          return <SelectButton key={index} text={current.text} />;
        });
      case '분야':
        return fieldButtons.map((current, index) => {
          return <SelectButton key={index} text={current.text} />;
        });
      case '종류':
        return category.map((current, index) => {
          return <SelectButton key={index} text={current.text} />;
        });
      default:
        return undefined;
    }
  };

  return (
    <Items>
      <Item>
        <SelectAllButton />
        {output(text)}
      </Item>
    </Items>
  );
};

const Items = styled.div`
  position: relative;
  width: 345px;
`;

const Item = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;
  position: relative;
  width: 345px;
`;
