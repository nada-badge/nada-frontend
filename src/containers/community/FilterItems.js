/** FilterItems 활성화 된 filter의 내용을 출력하기 위한 filter아이템 관리 컨테이너*/
import { useEffect, useState } from 'react';
import { SelectButton } from '../../components/community/SelectButton';
import styled from 'styled-components';
import { SelectAllButton } from '../../components/community/SelectAllButton';
import { useSelector } from 'react-redux';
import { filterSelector } from '../../modules/filter';
import { selectConfig } from '../../components/common/AreaFieldCategoryData';

export const FilterItems = ({ text }) => {
  const mainCategory = useSelector(
    filterSelector('buttonSelect', 'maincategory'),
  );

  const [contents, setContents] = useState([]);

  useEffect(() => {
    setContents(selectConfig({ content: text, mainCategory }));
  }, [mainCategory, text]);

  const output = () => {
    return contents.map(({ text }, index) => (
      <SelectButton key={index} text={text} />
    ));
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
