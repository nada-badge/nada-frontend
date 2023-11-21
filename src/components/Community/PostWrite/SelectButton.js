/** SelectButton  area, field, category 모달 내 개별요소에 대한 버튼 */
import { useEffect } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  postWriteSelector,
  addField,
  deleteField,
  setField,
  initializeForm,
} from '../../../modules/Community/postWrite';
import {
  Button,
  TextWarpper,
  Img,
} from '../../../styles/Community/SelectButton';

export const SelectButton = ({ text }) => {
  const dispatch = useDispatch();

  const nowModal = useSelector(postWriteSelector('postWriteSelect', 'modal'));
  const [isActive, setIsActive] = useState(false);
  const form = 'postWriteSelect';

  const cases = [
    { id: 0, key: 'area', all: '전국' },
    { id: 1, key: 'field', all: '전체' },
    { id: 2, key: 'category', all: '전체' },
  ];
  //현재 선택된 모달에 따른 key와 all 값 선언
  const key = cases[nowModal].key;
  const all = cases[nowModal].all;
  //area, field와 category의 타입차이로 인한 삼항 연산자
  const setStatus = key === 'category' ? setField : addField;
  const deleteStatus = key === 'category' ? initializeForm : deleteField;

  const state = useSelector(postWriteSelector('postWriteSelect', key));

  const onClickButton = () => {
    const deactivateButton = () => {
      dispatch(deleteStatus({ form, key, value: text }));
      if (state.length === 1) {
        dispatch(setStatus({ form, key, value: all }));
      }
    };

    const activateButton = () => {
      dispatch(setStatus({ form, key, value: text }));
      if (key !== 'category') {
        dispatch(deleteField({ form, key, value: all }));
      }
    };

    isActive ? deactivateButton() : activateButton();
  };

  useEffect(() => {
    setIsActive(state.includes(text));
  }, [state]);

  return (
    <Button className={classNames({ isActive })} onClick={onClickButton}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      {isActive && <Img />}
    </Button>
  );
};
