/** SelectButton  region, field, category 모달 내 개별요소에 대한 버튼 */
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
import { selectAllConfig } from '../../common/AreaFieldCategoryData';

export const SelectButton = ({ text }) => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const form = 'postWriteSelect';

  const modal = useSelector(({ modal }) => modal);
  const { contentType } = modal;
  const buttonAll = selectAllConfig(contentType);

  //현재 선택된 모달에 따른 key와 all 값 선언

  //region, field와 category의 타입차이로 인한 삼항 연산자
  const setStatus = contentType === 'category' ? setField : addField;
  const deleteStatus =
    contentType === 'category' ? initializeForm : deleteField;

  const state = useSelector(postWriteSelector('postWriteSelect', contentType));

  const onClickButton = () => {
    const deactivateButton = () => {
      dispatch(deleteStatus({ form, key: contentType, value: text }));
      if (state.length === 1) {
        dispatch(setStatus({ form, key: contentType, value: buttonAll }));
      }
    };

    const activateButton = () => {
      dispatch(setStatus({ form, key: contentType, value: text }));
      if (contentType !== 'category') {
        dispatch(deleteField({ form, key: contentType, value: buttonAll }));
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
