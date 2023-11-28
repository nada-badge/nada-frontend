/** SelectButton  region, field, category 모달 내 개별요소에 대한 버튼 */
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector, addField, deleteField } from '../../modules/filter';
import { Button, TextWarpper, Img } from '../../styles/Community/SelectButton';
import { selectAllConfig } from '../common/AreaFieldCategoryData';

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
    <Button className={classNames({ isActive })} onClick={onClicks}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      {isActive && <Img />}
    </Button>
  );
};
