/** SelectAllButton  region, field, category 모달 내 전체를 아우르는 버튼 */
import { useEffect } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  postWriteSelector,
  initializeForm,
} from '../../../modules/Community/postWrite';
import { Button, TextWarpper } from '../../../styles/Community/SelectButton';
import { selectAllConfig } from '../../common/AreaFieldCategoryData';

export const SelectAllButton = () => {
  const dispatch = useDispatch();
  const modal = useSelector(({ modal }) => modal);
  const { contentType } = modal;
  const buttonAll = selectAllConfig(contentType);
  const [isActive, setIsActive] = useState();

  //region, field와 category의 타입차이로 인한 삼항 연산자

  const state = useSelector(postWriteSelector('postWriteSelect', contentType));

  const onClicks = () => {
    if (!state.includes(buttonAll)) {
      //전국,전체 버튼이 비활성화였다면 개별 버튼을 다 비활성화 후 해당 버튼 활성화
      dispatch(initializeForm({ form: 'postWriteSelect', key: contentType }));
    }
  };

  useEffect(() => {
    setIsActive(state.includes(buttonAll));
  }, [state]);

  return (
    <Button className={classNames({ isActive })} onClick={onClicks}>
      <TextWarpper className={classNames({ isActive })}>
        {buttonAll}
      </TextWarpper>
    </Button>
  );
};
