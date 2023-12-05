/** SelectButton  region, field, category 모달 내 개별요소에 대한 버튼 */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  postWriteSelector,
  addField,
  deleteField,
  setField,
  initializeForm,
} from '../../../modules/tommunity/postWrite';
import { selectAllConfig } from '../../common/AreaFieldCategoryData';
import { AttributeInfoButton } from '../../common/AttributeInfoButton';

export const SelectButton = ({ text }) => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const form = 'postWriteSelect';

  const modal = useSelector(({ modal }) => modal);
  const { contentType } = modal;
  const buttonAll = selectAllConfig(contentType);

  //region, field와 category의 타입차이로 인한 삼항 연산자
  const setStatus = contentType === 'category' ? setField : addField;
  const deleteStatus =
    contentType === 'category' ? initializeForm : deleteField;

  const state = useSelector(postWriteSelector('postWriteSelect', contentType));

  const onClick = () => {
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
    <AttributeInfoButton
      text={text}
      onClick={onClick}
      isActive={isActive}
      isImg={true}
    />
  );
};
