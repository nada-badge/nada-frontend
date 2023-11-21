/** SelectButton  area, field, category 모달 내 개별요소에 대한 버튼 */
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import {
  communitySelector,
  addField,
  deleteField,
} from '../../modules/Community/community';
import { Button, TextWarpper, Img } from '../../styles/Community/SelectButton';

export const SelectButton = ({ text }) => {
  const dispatch = useDispatch();

  const nowModal = useSelector(communitySelector('buttonSelect', 'filter'));

  const [isActive, setIsActive] = useState(false);
  const form = 'subButtonSelect';

  const cases = [
    { id: 0, key: 'area', all: '전국' },
    { id: 1, key: 'field', all: '전체' },
    { id: 2, key: 'category', all: '전체' },
  ];
  const num = ['지역', '분야', '종류'].indexOf(nowModal);
  const { key, all } = cases[num !== -1 ? num : cases.length - 1];

  const state = useSelector(communitySelector('subButtonSelect', key));

  const OnClickButton = () => {
    const deactivateButton = () => {
      dispatch(deleteField({ form, key, value: text }));
      if (state.length === 1) {
        dispatch(addField({ form, key, value: all }));
      }
    };

    const activateButton = () => {
      dispatch(addField({ form, key, value: text }));
      dispatch(deleteField({ form, key, value: all }));
    };

    isActive ? deactivateButton() : activateButton();
  };

  useEffect(() => {
    setIsActive(state.includes(text));
  }, [state]);

  return (
    <Button className={classNames({ isActive })} onClick={OnClickButton}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      {isActive && <Img />}
    </Button>
  );
};
