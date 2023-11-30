/** SelectAllButton  region, field, category 모달 내 전체를 아우르는 버튼 */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector, initializeForm } from '../../modules/filter';
import { selectAllConfig } from '../common/AreaFieldCategoryData';
import { AttributeInfoButton } from '../common/AttributeInfoButton';

export const SelectAllButton = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const content = useSelector(filterSelector('buttonSelect', 'filter'));
  const slectAll = selectAllConfig(content);
  const state = useSelector(filterSelector('subButtonSelect', content));

  const onClick = () => {
    if (!state.includes(slectAll)) {
      dispatch(initializeForm({ form: 'subButtonSelect', key: content }));
    }
  };

  useEffect(() => {
    setIsActive(state.includes(slectAll));
  }, [state]);

  return (
    <AttributeInfoButton
      text={slectAll}
      onClick={onClick}
      isActive={isActive}
      isImg={false}
    />
  );
};
