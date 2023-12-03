/** SelectButton  region, field, category 모달 내 개별요소에 대한 버튼 */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector, addField, deleteField } from '../../modules/filter';
import { selectAllConfig } from '../common/AreaFieldCategoryData';
import { AttributeInfoButton } from '../common/AttributeInfoButton';

export const SelectButton = ({ text }) => {
  const dispatch = useDispatch();
  const content = useSelector(filterSelector('buttonSelect', 'filter'));
  const state = useSelector(filterSelector('subButtonSelect', content));

  const [isActive, setIsActive] = useState(state.includes(text));
  const form = 'subButtonSelect';
  const slectAll = selectAllConfig(content);

  const onClicks = () => {
    const deactivateButton = () => {
      dispatch(deleteField({ form, key: content, value: text }));
      if (state.length === 1) {
        dispatch(addField({ form, key: content, value: slectAll }));
      }
    };

    const activateButton = () => {
      dispatch(addField({ form, key: content, value: text }));
      dispatch(deleteField({ form, key: content, value: slectAll }));
    };

    isActive ? deactivateButton() : activateButton();
  };

  useEffect(() => {
    setIsActive(state.includes(text));
  }, [state, text]);

  return (
    <AttributeInfoButton
      text={text}
      onClicks={onClicks}
      isActive={isActive}
      isImg={true}
    />
  );
};
